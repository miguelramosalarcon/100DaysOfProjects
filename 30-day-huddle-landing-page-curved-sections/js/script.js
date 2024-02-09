function validarCorreo() {
    var emailInput = document.getElementById("email");
    var errorMsg = document.getElementById("error-msg");
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorMsg.style.display = "inline";
        return false; // Evita que el formulario se envíe
    } else {
        errorMsg.style.display = "none";
        return true; // Permite que el formulario se envíe
    }
}
