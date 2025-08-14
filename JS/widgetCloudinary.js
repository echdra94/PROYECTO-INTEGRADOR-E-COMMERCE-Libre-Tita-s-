const cloudName = "libretitaspi";
const uploadPreset = "solo-mi-sitio";
let imagenURL = "";
const myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    cropping: true,
    multiple: false,

}, (error, result) => {
    if (!error && result && result.event === "success") {
        imagenURL = result.info.secure_url;
        document.getElementById("previsualizacion").src = imagenURL;
        console.log('Listo aqui esta la informacion de tu imagen: ', result.info);
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);