
function programarAlarma() {
    // valores seleccionados por el usuario
    var horaSeleccionada = document.getElementById("hora").value;
    var diaSeleccionado = document.getElementById("opciones").value;

    // crea un nuevo elemento de lista
    var nuevaAlarma = document.createElement("li");

    // texto del nuevo elemento
    nuevaAlarma.textContent = `Alarma programada para ${horaSeleccionada} los ${diaSeleccionado}`;

    // agrega el nuevo elemento a la lista
    var listaAlarmas = document.getElementById("lista-alarmas");
    listaAlarmas.appendChild(nuevaAlarma);


    // calcula la diferencia de tiempo para la alarma
    var ahora = new Date();
    var horaAlarma = new Date(`${ahora.toDateString()} ${horaSeleccionada}`);
    var tiempoRestante = horaAlarma - ahora;


    // temporizador para reproducir el sonido cuando llegue el momento
    setTimeout(function() {
        reproducirSonido();
    }, tiempoRestante);
}

    // crea un objeto de audio
    function reproducirSonido() {
    var audio = new Audio('C:/Diana/PROYECTOS/alarmas/1 hour of iphone alarm.mp3'); 

    // reproduce el sonido
    audio.play();
}

        
    var botonMusica = document.getElementById('boton-musica');

    // agrega un event listener para el clic en el botón
    botonMusica.addEventListener('click', function() {
    // redirigir a la lista de reproducción de YouTube
    window.open('https://www.youtube.com/playlist?list=PLzzrwmr2cjM34a6_pr9Abc1Fp1LygbWYW', '_blank');
});
    
        