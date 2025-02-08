const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
require('dotenv/config');
const Keyv = require('keyv');
const keyv = new Keyv();
const CLIENT_SERVER = process.env.CLIENT_SERVER;
const CVE2HOST = process.env.CLIENT_SERVER;
const LOADSERVER = process.env.LOADSERVER;

const keitaroStatus = (subid, status) => {
    
      axios.get(`http://193.233.112.39/e686f86/postback?subid=${subid}&status=${status}`).then(res => {
        console.log(res.data);
        
      }).catch(e => {
        console.log('Error set status Keitaro');
        
      })
}

const new_visit = async (req, res) => {
    // используем как регистрацию конверсии
    const headers = req.headers;

    const { uuid, lang, currency, device, browser, os, cpu } = JSON.parse(req.body);
    const domain = headers['x-offer-domain'];
    if (!domain) {
        console.log('Роут работает только через балансировщик nginx ');
        return res.send({ title: 'Params not valid', code: 401 });

    }
 
    
    const body = {
        uuid: uuid,
        lang: lang,
        currency: currency,
        site: domain,
        device: device,
        browser: browser,
        os: os,
        cpu: cpu
        // ipInfo: ipInfo.data ? JSON.parse(ipInfo.data) : null
    }
    const result = await axios.post(CLIENT_SERVER + '/api/click_new_json', body)
        .then(response => response.data)
        .catch((e) => {
            console.error(e);
            return { error: true, message: e?.message }
        });

      return res.send(result)
}

const getUser = async (domain) => {
    if (!domain) {
        return null
    }
    let user = await keyv.get(domain);
    if (user) {
        user = JSON.parse(user);
        return user

    }
    return await axios.post(`${process.env.CVE2HOST}/api/find_user_for_domain`, { domain: domain }).then(async res => {
        if (!res?.data?.data) {
            return null
        }
        const { user_id } = res.data.data;
        
        if (user_id) {
            await keyv.set(domain, JSON.stringify(res.data.data), 10*60*1000);

        }
        return res.data.data
    }).catch(e => {
        console.log(e);
        return null
    })


}
const settingUser = async (req, res) => {
    const domain = req.headers['x-offer-domain'];
    if (!domain) {
        console.log('Роут работает только через балансировщик nginx ');
        return null

    }
    const user = await getUser(domain);
    if (!user) {
        return null
    }
    let setting = user.offerList.find(x => x.domainUser == domain);
    if (!setting) {
        return null

    }
    return setting
    
    
}
const set_conversion = async (req, res) => {
    const ip = req.headers.hasOwnProperty('cf-connecting-ip') ? req.headers['cf-connecting-ip'] : req.headers['x-real-ip'];
    const headers = req.headers;
    const { uuid, download_setup, subid } = JSON.parse(req.body);
    const domain = headers['x-offer-domain'];
    if (!domain) {
        console.log('Роут работает только через балансировщик nginx ');
        return res.send({ title: 'Params not valid', code: 401 });

    }


    const ipInfo = await axios.get(LOADSERVER + '/api/get_ip?ip=' + ip).then(r => r.data).catch(e => {
        return null
    });
    keitaroStatus(subid, 'lead')
    const body = {
        uuid: uuid,
        subid: subid,
        site: domain,
        merchant: false,
        amount: 0,
        payment: true,
        ipInfo: ipInfo?.data ? JSON.parse(ipInfo.data) : {},
        download_setup: download_setup
    }
    const result = await axios.post(CLIENT_SERVER + '/api/click_update_json', body)
    .then(response => response.data)
    .catch((e) => {
        console.error(e);
        return { error: true, message: e?.message }
    });
  return res.send(result)
}



module.exports = { new_visit, set_conversion, settingUser }