let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://quickchart.io/qr?text=" + qrText.value
        qrImage.classList.add("show-img")
    }
    else {
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 750)

    }
}