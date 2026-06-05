const reveals =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(element=>{

    observer.observe(element);

});

// =====================
// Música
// =====================

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.textContent =
        "⏸️ Pausar música";

    }else{

        music.pause();

        musicBtn.textContent =
        "🎵 Activar música";

    }

    playing = !playing;

});