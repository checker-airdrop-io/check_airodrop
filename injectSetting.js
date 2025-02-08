

const { parse, HTMLElement } = require('node-html-parser');
const fs = require('fs');

const setSettingIndexHtml = (setting) => {

    const html = fs.readFileSync('./public/index.html');
    const root = parse(html);

    const head = root.querySelector('head');
    if (head) {
        const metrika = new HTMLElement('script', { id: 'yandex_metrika' });
        metrika.setAttribute('type', 'text/javascript');
        metrika.innerHTML = `(function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
                })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym('${setting.yandexMetrika}', "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });`;


        const twitter = new HTMLElement('script', { id: 'twitter_pixel' });
        twitter.setAttribute('type', 'text/javascript');


        twitter.innerHTML = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                twq('config', '${setting.twitter}');`;


        if (Array.isArray(setting.fbPixel) && setting.fbPixel.length > 0) {
            for (let index = 0; index < setting.fbPixel.length; index++) {
                const element = setting.fbPixel[index];
                if (!element) {
                    continue;
                }

                const fbPixel = new HTMLElement('script', { id: 'fb_pixel' });
                fbPixel.setAttribute('type', 'text/javascript');
                fbPixel.innerHTML = `!function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '${element}');
                            fbq('track', 'PageView');`;
                head.appendChild(fbPixel);

                const fbNoscriptPixel = new HTMLElement('noscript', { id: 'noscript_pixel' });
                fbNoscriptPixel.innerHTML = `<img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=${element}&ev=PageView&noscript=1"
                />`
                head.appendChild(fbNoscriptPixel);



            }
        }

        const google = new HTMLElement('script', { id: 'inertScript' });
        google.setAttribute('type', 'text/javascript');
        google.innerHTML = `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${setting.googleAnalytics}');`
        const googleScript = new HTMLElement('script', { id: 'inertScript' });
        googleScript.setAttribute('type', 'text/javascript');
        googleScript.setAttribute('async', true)
        googleScript.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${setting.googleAnalytics}`)

        
        if (setting.googleAnalytics) {
            head.appendChild(googleScript);
            head.appendChild(google);


        }
       


 

        if (setting.yandexMetrika) {
            head.appendChild(metrika);

        }
        if (setting.twitter) {
            head.appendChild(twitter);

        }

    }

    return root.toString();

}

module.exports = { setSettingIndexHtml };