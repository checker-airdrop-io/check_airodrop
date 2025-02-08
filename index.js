require("dotenv/config");
const express = require('express');
const bodyParser = require('body-parser')
const textParser = bodyParser.text()
const app = express();
const url = require('url');
const { new_visit, set_conversion, settingUser } = require('./visitor');
const { setSettingIndexHtml } = require('./injectSetting');
const fs = require('fs');
var JavaScriptObfuscator = require('javascript-obfuscator');



 

// app.use(async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('X-Frame-Options', `*`);

//   if (req.url === '/' && !Boolean(Number(process.env.DEV))) {

//     const setting = await settingUser(req, res);
//     if (!setting) {
//       return res.send({ title: 'Params not valid', code: 401 });
      
//     }
//     const html = setSettingIndexHtml(setting);
//     return res.send(html);

//   }
//   next();
// });

app.get('/load.js', (req, res) => {
  const script = fs.readFileSync('./public/load.js', 'utf-8');
  const obfuscate = JavaScriptObfuscator.obfuscate(script, {
    exclude: ['loadFile']
  }); // обусифицируем


  res.set("Content-Type", "application/javascript"); // corrected content type
  return res.send(obfuscate.getObfuscatedCode());
});
app.get('/main.js', (req, res) => {
  const script = fs.readFileSync('./public/main.js', 'utf-8');
  const obfuscate = JavaScriptObfuscator.obfuscate(script, {
    exclude: ['enabelLoadImg']
  }); // обусифицируем


  res.set("Content-Type", "application/javascript"); // corrected content type
  return res.send(obfuscate.getObfuscatedCode());
});

app.use(express.static('public'));
app.use(textParser);



app.post('/new_download', (req, res) => new_visit(req, res));
app.post('/update_download', (req, res) => set_conversion(req, res));
app.use((req, res, next) => {
  // rout not found
  const document = fs.readFileSync('./public/index.html', 'utf-8');
  res.set("Content-Type", "text/html; charset=UTF-8");

  res.send(document);
});

app.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
});