const snowContainer =
document.getElementById("snow-container");

function createSnowflake(){

    const snow =
    document.createElement("div");

    snow.classList.add("snowflake");

    snow.innerHTML = "❄";

    snow.style.left =
    Math.random() * window.innerWidth + "px";

    snow.style.fontSize =
    (10 + Math.random() * 20) + "px";

    snow.style.animationDuration =
    (5 + Math.random() * 10) + "s";

    snowContainer.appendChild(snow);

    setTimeout(() => {

        snow.remove();

    }, 15000);
}

setInterval(createSnowflake, 150);

const rewardBox =
document.getElementById("reward-box");

const claimBtn =
document.getElementById("claim-btn");

claimBtn.addEventListener("click", () => {

    rewardBox.classList.remove("hidden");

    claimBtn.textContent =
    "🩵 Cupón Reclamado";
});

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("music-btn");

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