// Algoritmo condicional con el cual se realiza un registros de datos para el ingreso a su cuenta de banco
// Paso 1
// Limite de accion

function bucleFor (dato) {
    let ingreseNumero = parseInt(prompt("Ingresa Numero"))
    for (i = ingreseNumero; i <= 15; i++) {
        if (i >= 6 ) {
            return "Limite de acciones"
        }
        alert (i)
}

}

// Paso 2
// Inicio de sesión

function IniciSesion(nombre, clave) {
    let bienvenida = "Bienvenidos al banco!"
    alert(bienvenida)
    let usuario = "franco@gmail.com"
    let password = "franco123"
    let usuarioIngresado = prompt("Ingrese su nombre de usuario")
    let passwordIngresado = prompt("Ingrese su clave")
    if (usuario === usuarioIngresado && password === passwordIngresado) {
        return "Bienvenidos al banco"
    } else {
        return "Datos incorrectos, intente nuevamente"
    }
}