
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"

    })
}



function Login() {
    var logado = 0
    var usuario = document.getElementsByName("usuario")[0].value
    usuario = usuario.toLowerCase()
    var senha = document.getElementById("senha").value

    if (usuario == "admin" && senha == "123") {
        window.location = "index.html"
        logado = 1;
    }

    if (logado == 0) {
        alert("Acesso Negado. Dados Incorretos")
    }
}
