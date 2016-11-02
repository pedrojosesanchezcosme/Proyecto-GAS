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
 

function elegir(){
  var sps = SpreadsheetApp.openById("1oDnph6_Z2FD9CvXnSMZoBItgYnj-umW4Jjr4lRahfS0");
  var sheet = sps.getSheets();
  var datos = sheet[0].getDataRange().getValues();
  
  //Con esto sabemos cuantos participantes hay.
  var ultimafila = sheet[0].getLastRow();
  var total = ultimafila - 1;
  
  Logger.log("El total de inserts es: "+total);
  
  // Aqui se define la fila del ganador.
  var winner = Math.floor(Math.random() * total) + 1;
  
  Logger.log("El numero del ganador es: "+ winner);
  
  var name = sheet[0].getRange(winner, 2).getValue();
    
  //Mostramos el ganador   
  sheet[0].getRange(2, 8).setValue(name);
  //Browser.msgBox("El nombre del ganador es: " + name);
}//Fin Function elegir

function borrar(){
  var sps = SpreadsheetApp.openById("1oDnph6_Z2FD9CvXnSMZoBItgYnj-umW4Jjr4lRahfS0");
  var sheet = sps.getSheets();
  var datos = sheet[0].getDataRange().getValues();
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var concursantes = ss.getSheetByName("concursantes");
  concursantes.clear();
}//Fin function: borrar


function onOpen() {
   var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Opciones avanzadas')
      .addItem('Elegir ganador', 'elegir')
      .addItem('Eliminar los concursantes', 'borrar')
      .addToUi();
}//Fin Function onOpen


