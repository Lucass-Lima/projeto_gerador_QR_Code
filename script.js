
const inputQRCode = document.querySelector("#qr_form input");
const btnQRCode = document.querySelector("#qr_form button");

const divQRCode = document.querySelector("#qr_code");
const imgQRCode = document.querySelector("#qr_code img");


function GenerateQRCode(){

    const qrCodeValue = inputQRCode.value;

    if(!qrCodeValue) return;

    btnQRCode.innerText = "Gerando código..."

    imgQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}`

    imgQRCode.addEventListener("load", () => {
        divQRCode.style.display = "flex";
        btnQRCode.innerText = "Código Criado"
    })
}

btnQRCode.addEventListener("click", () => {

    GenerateQRCode()
})

inputQRCode.addEventListener("keydown", (e) => {

    if(e.key === "Enter"){
        GenerateQRCode();
    }
})

inputQRCode.addEventListener("keyup", (e) => {

    if(!inputQRCode.value){
        divQRCode.style.display = "none";
        btnQRCode.innerText = "Gerar QR Code"
    }
})