const setButton = document.getElementById('RegisterButton')
const togglePassword = document.getElementById('password')
const buttonPassword = document.getElementById('togglePassword')

setButton.addEventListener('click', () => {
    window.electronAPI.changeRegister();
})

function toggle() {
    if (togglePassword.type === "password") {
        togglePassword.type = "text";
        buttonPassword.class = "bi-eye-fill"
    } else {
        togglePassword.type = "password";
        buttonPassword.class = "bi bi-eye-slash"
    }
}