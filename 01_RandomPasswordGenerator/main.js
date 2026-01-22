const generateBtn = document.querySelector(".btn");

const inputElement = document.getElementById("input");

const copyElement = document.querySelector(".fa-copy");

const alertContainerElement = document.querySelector(".alert-container");

generateBtn.addEventListener('click', () => {
    createPassword();
});

createPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 14;

    let password = "";

    for(let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNum, randomNum + 1);

        // console.log(randomNum, password);

        inputElement.value = password;
    }
}

copyElement.addEventListener("click", () => {
    copyPassword();
    if(inputElement.value) {
        alertContainerElement.classList.remove('active');
        setTimeout( () => {
            alertContainerElement.classList.add('active');
        }, 2000);
    }
});

copyPassword = () => {
    inputElement.select();
    inputElement.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputElement.value);
    alertContainerElement.innerText = inputElement.value + " Copied!";
}