const musicBtn =
document.getElementById("music-btn");

const music =
document.getElementById("music");

let playing = false;

musicBtn.addEventListener("click", () => {

    if(!playing){

        music.play();

        musicBtn.textContent =
        "⏸ Pausar Música";

    }else{

        music.pause();

        musicBtn.textContent =
        "🎵 Activar Música";
    }

    playing = !playing;
});