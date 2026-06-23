const productos = productosSushi;

function agregarLocalStorage(key, value) {
    localStorage.setItem(key, value)
}

function obtenerLocalStorage(key, index) {
    convertirCadenaTextoObjeto(textObj);
}

function convertirObjetoCadenaTexto(Object) {
    localStorage.setItem('user', JSON.stringify(Object));
}

function convertirCadenaTextoObjeto(textObj) {
    const userData = JSON.parse(datosProductoAlmacenado);
}

export { agregarLocalStorage, obtenerLocalStorage, convertirCadenaTextoObjeto, convertirObjetoCadenaTexto };