# SMSNode
Una app sencilla para enviar sms
# Configuración
En tu terminal , acceder a la carpeta del proyecto y ejecutar 
npm install
 # USO
 ejecutar npm start
 abir postman
 (<a href="https://www.getpostman.com/">Descargar Postman</a>)
 y confirurarlo de la siguiente manera:
Tipo de peticion post
En la sección de url colocar localhost:3000/send
poner en headers COntent-Type application/json
y la sección de body seleccionar raw:
{
	"toNumber":"EL numero que registraron",
	"message":"Mensaje a enviar :D"
}

