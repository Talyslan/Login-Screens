const passwordField = document.querySelector("#visible-img");
const inputPass = document.querySelector("#password");
const imgPass = document.querySelector("#imgPass");

imgPass.addEventListener("click", () => {

    if (inputPass.type === "password") {
        inputPass.type = "text";
        imgPass.src = "./images/HiddenPassword.png";
    }
    else if (inputPass.type === "text") {
        inputPass.type = "password";
        imgPass.src = "./images/VisiblePassword.png";
    }
});