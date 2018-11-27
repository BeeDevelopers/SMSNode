//configuración de paquetes
let express = require('express') //nos permite utilizar http 
let bodyParser = require('body-parser')//nos deja configurar las cabeceras y editar nuestras request
let Nexmo = require('nexmo')// api para enviar los sms
//configura express 
const app = express();
app.use(bodyParser.json());//establece el content-type como json
app.use(bodyParser.urlencoded({ extended: true }));//codea la url
//configura el servidor 
const server = app.listen(3000,() =>{
    console.log('Se creo el servidor en puerto  3000')
});
//configura la api con tus credenciales , necesario logearse en nexmo.com
const nexmo = new Nexmo({
    apiKey: 'API_KEY',
    apiSecret: 'API_SECRET'
  })
//configura la petición como POST
  app.post('/send', (req, res) => {
    // Send SMS
    nexmo.message.sendSms(
      'Nexmo', req.body.toNumber, req.body.message, {type: 'unicode'},
      (err, responseData) => {if (responseData) {console.log(responseData)}}
    );
  });