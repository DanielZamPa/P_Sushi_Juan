function agregarLocalStorage(){
    localStorage.setItem(key, value)
}

function obtenerLocalStorage(){}

function convertirObjetoCadenaTexto(obj){
    localStorage.setItem('user', JSON.stringify(userObj))
}

function convertirCadenaTextoObjeto(){
    const userData = JSON.parse(storedUserData)
}