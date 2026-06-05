const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

music.play();

intro.classList.add("fade-out");

setTimeout(() => {
content.style.display = "block";
},1500);

});

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});

},{
threshold:0.15
});

document.querySelectorAll(".reveal")
.forEach(el=>observer.observe(el));

const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<250;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

r:Math.random()*2.5,

speed:Math.random()*0.15,

color:[
"#ffffff",
"#bde0ff",
"#ffc8dd"
][Math.floor(Math.random()*3)]

});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

ctx.beginPath();

ctx.fillStyle=star.color;

ctx.arc(
star.x,
star.y,
star.r,
0,
Math.PI*2
);

ctx.fill();

star.y+=star.speed;

if(star.y>canvas.height){

star.y=0;
star.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});