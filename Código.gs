function emailOnFormSubmit (e) {
  
  //variables:
  var nombre = e.values[1];
  var email = e.values[3];
  var idioma = e.values[5];
    
  //Asunto del mensaje:
  var asunto = "Sorteo viajes";
  
  //Cuerpo del mensaje:
  
  var cuerpo;
  
  //Algoritmo:
  
  if (idioma == "Español") {cuerpo = "Hola " + nombre + " este es un correo que confirma que tu solicitud nos ha llegado con exito.";}
  else if (idioma == "Ingles") {cuerpo = "Hello " + nombre + " este es un correo que confirma que tu solicitud nos ha llegado con exito.";}
  else if (idioma == "Frances") {cuerpo = "Bonjour " + nombre + " este es un correo que confirma que tu solicitud nos ha llegado con exito.";}
  else {cuerpo = "Hallo " + nombre + " este es un correo que confirma que tu solicitud nos ha llegado con exito.";}
  
  //Comando para mandar el correo:
  MailApp.sendEmail(email, asunto, cuerpo);

}
  