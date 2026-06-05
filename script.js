const gifts = document.querySelectorAll(".gift");

const CLOSED_IMAGE =
"img/caja-cerrada.png";

const OPEN_IMAGE =
"img/caja-abierta.png";

function updateGifts(){

let openedCount = 0;

gifts.forEach(gift=>{

const id = gift.dataset.id;

const opened =
localStorage.getItem(
"gift_"+id
);

const img =
gift.querySelector("img");

if(opened){

img.src = OPEN_IMAGE;

gift.classList.add(
"opened"
);

openedCount++;
}
});

if(openedCount === 6){

document
.getElementById(
"all-opened"
)
.classList.remove(
"hidden"
);
}
}

updateGifts();

gifts.forEach(gift=>{

gift.addEventListener(
"click",
()=>{

const id =
gift.dataset.id;

const link =
gift.dataset.link;

localStorage.setItem(
"gift_"+id,
"opened"
);

gift.classList.add(
"opened"
);

gift.querySelector(
"img"
).src =
OPEN_IMAGE;

setTimeout(()=>{

window.location.href =
link;

},700);

});
});

const canvas =
document.getElementById(
"stars"
);

const ctx =
canvas.getContext("2d");

function resize(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;
}

resize();

window.addEventListener(
"resize",
resize
);

const stars = [];

for(let i=0;i<180;i++){

stars.push({

x:
Math.random()*
canvas.width,

y:
Math.random()*
canvas.height,

r:
Math.random()*2.2,

speed:
Math.random()*0.15,

alpha:
Math.random(),

color:
Math.random()>0.95
? "#ffb7d5"
: (
Math.random()>0.8
? "#9fd9ff"
: "#ffffff"
)

});
}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

stars.forEach(star=>{

star.alpha +=
(Math.random()-0.5)
*0.01;

if(star.alpha<0.2)
star.alpha=0.2;

if(star.alpha>1)
star.alpha=1;

ctx.beginPath();

ctx.fillStyle =
star.color;

ctx.globalAlpha =
star.alpha;

ctx.arc(
star.x,
star.y,
star.r,
0,
Math.PI*2
);

ctx.fill();

star.y += star.speed;

if(star.y >
canvas.height){

star.y = 0;

star.x =
Math.random()*
canvas.width;
}
});

ctx.globalAlpha = 1;

requestAnimationFrame(
animate
);
}

animate();


const music =
document.getElementById(
"bgMusic"
);

const musicBtn =
document.getElementById(
"musicBtn"
);

let playing = false;

musicBtn.addEventListener(
"click",
()=>{

if(!playing){

music.play();

musicBtn.innerHTML = "🔊";

playing = true;

}else{

music.pause();

musicBtn.innerHTML = "🎵";

playing = false;
}

});