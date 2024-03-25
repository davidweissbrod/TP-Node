import fs from 'fs';
const ARCHIVO_ENTRADA = "./doc1.txt";
const ARCHIVO_SALIDA = "./doc2.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
    fs.readFile(origen, 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
          return;
        } else {
          console.log(data);
        }
    fs.writeFile(destino, data , function(err){
            if(err){
                console.log('error: ', err)
                return;
            }
        })
      });
}