var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");


function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        console.log("me prendiste");
    } else{
        estadoLicuadora = "apagada";
        console.log("me apagaste");
    }
}
