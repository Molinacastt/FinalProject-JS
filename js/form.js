let Formulario = {
    validarFormulario: function (formElement) {
        let inputs = formElement.getElementsByTagName("input");
        for (let input of inputs) {
            if (input.value === "") {
                return false;
            }
        }
        return true;
    },

    limpiarFormulario: function (formElement) {
        formElement.reset();
    },

    enviarFormulario: function (formElement, successCallback) {
        if (this.validarFormulario(formElement)) {
            successCallback();
        } else {
            alert("Por favor, complete todos los campos del formulario.");
        }
    }
};

document.getElementById("user-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let usuario = {
        name: name,
        password: password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario))
    Formulario.enviarFormulario(this, function () {
        window.open("./pages/login.html", "_self");
        Formulario.limpiarFormulario(this);
    });
});