const fs = require('fs');
const colors= require('colors');
const tabla = async(numero = 5, listar, hasta=12) => {
  try {
    
    let salida = "";
  
    for (let i = 1; i <= hasta; i++) {
      salida += `La tabla del ${numero} ${'x'} ${i} ${'='} ${numero * i}\n`;
    }
    if (listar) {
      console.log("=======================".blue);
      console.log(`======tabla del ${numero}======`.green);
      console.log("=======================".blue);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
  
    return `tabla-${numero}.txt`;
  } catch (err) {
      throw err
  }
  
}
module.exports ={
    tabla
}
