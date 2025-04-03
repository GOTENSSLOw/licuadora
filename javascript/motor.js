var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");


function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerprprp();
        licuadora.classList.add("active");
        console.log("me prendiste");
    } else{
        estadoLicuadora = "apagada";
        hacerprprp();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

function hacerprprp() {
    if( sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}