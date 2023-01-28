let hole = document.getElementById('hole');
let pipe = document.getElementById('pipe');
let bird = document.getElementById('bird');
let scoreboard = document.getElementById('score');
let jumping = 0;
var score = 0;
// updating the position of Hole .....

hole.addEventListener('animationiteration',() =>{
    hole.style.top = -(Math.random()*300+150) + "px";

    score++;
    scoreboard.innerText = `Score : ${score}`;
});
document.body.onkeyup = function(e){
    jump();
}
setInterval(()=>{
    let birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    // updating the Bird positon .....
    if(jumping == 0)
    bird.style.top = (birdtop + 4) + "px";

    // Detection of collision .....

    let holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let pipeleft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let btop = -(900-birdtop);

    if((birdtop > 900) || ((pipeleft < 20) && (pipeleft > -40)) && ((btop < holetop) || (btop > (holetop+145)))){
        bird.style.top = 100 + "px";
        pipe.style.left = 400 + "px";
        jumping = 0;
        alert(`Game Over, Your Score is ${score} `);
        score = 0;
    }
},10);
function jump(){
    jumping = 1;
    jumpcount = 0;
    let jumpinterval = setInterval(()=>{

        // updating the Bird positon ..... while jumping .....

        let birdtop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if(birdtop > 5)
        bird.style.top = (birdtop - 6) + "px";

        // for how much time it should stay in air after jumping .....

        if(jumpcount > 25){
            clearInterval(jumpinterval);
            jumpcount = 0;
            jumping = 0;
        }
        jumpcount++;
    },10)
    jumping = 0;
}