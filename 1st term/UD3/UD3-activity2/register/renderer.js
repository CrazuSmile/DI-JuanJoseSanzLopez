const setButton = document.getElementById('LoginButton')
const togglePassword = document.getElementById('password')
const register = document.getElementById('Register');
const email = document.getElementById('email');



setButton.addEventListener('click', () => {
    window.electronAPI.changeLogin();
})

register.addEventListener('click', () => {
    alert("User registered successfully");
    window.electronAPI.changeLogin();
    
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