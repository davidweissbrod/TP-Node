let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
  try{
    var miObjeto = {
      host:  laURL.href,
      pathname: laURL.pathname,
      parametros: laURL.search
    }
  } catch (error){
      console.log('Error:', error)
      return{
        host: null,
        pathname: null,
        parametros: {}
      }
  } 
}
