const plant = document.getElementById("plant");
const ground = document.getElementById("ground");
const message = document.getElementById("message");
const music = document.getElementById("music");

let stage = 0;

plant.addEventListener("click", nextStage);

function nextStage(){

    stage++;

    switch(stage){

        case 1:

            ground.classList.remove("hidden");

            plant.innerHTML = "●";

            message.textContent =
            "Todo comenzó como una pequeña semilla, como una chispa donde no se sabe que esperar";

            break;

        case 2:

            plant.innerHTML = "🌱";

            message.textContent =
            "Con tiempo, paciencia y cariño, algo empezo a brotar entre nosotros";

            break;

        case 3:

            plant.innerHTML = "🌿";

            message.textContent =
            "Fuimos creciendo juntos sin darnos cuenta";

            break;

        case 4:

            plant.innerHTML =
            `
            🌷
            `;

            message.textContent =
            "Incluso después de momentos dificiles...";

            break;

        case 5:

            plant.innerHTML =
            `
            🌹
            <br>
            💐
            `;

            plant.classList.add("bloom");

            message.textContent =
            "Salimos adelante y nuestro amor floreció";

            createPetals();

            music.play().catch(() => {});

            break;

        case 6:

            plant.style.color = "#ffb6c1";

            plant.style.textShadow =
            "0 0 30px #ffb6c1";

            message.innerHTML =
            `
            <div class="final-text">
                <h2>Una flor para una hermosa flor.</h2>
                <br>
                <p>Feliz cumpleaños mi Vida ❤️</p>
            </div>
            `;

            break;
    }
}

function createPetals(){

    setInterval(() => {

        const petal =
        document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left =
        Math.random() * window.innerWidth + "px";

        petal.style.animationDuration =
        (4 + Math.random() * 4) + "s";

        document.body.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        }, 8000);

    }, 300);
}