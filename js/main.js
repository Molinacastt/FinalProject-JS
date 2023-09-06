/* LOGIN */ 

document.getElementById("form-group").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        window.location.href = "./pages/producto.html";  
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
});
