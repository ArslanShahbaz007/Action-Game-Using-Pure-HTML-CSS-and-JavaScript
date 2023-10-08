let score = 0;
let flag = true;

let musics = new Audio('music.mp3');
let musicsgo = new Audio('gameover.mp3');
setTimeout(() => {
    musics.play();
}, 1000); 
document.onkeydown = (e) => {

    console.log(e.key);
    if (e.key == 'ArrowUp') {

        let dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {

            dino.classList.remove('animatedino')

        }, 700);

    }
    else if (e.key == 'ArrowRight') {

        let dino = document.querySelector('.dino');
        let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dx + 112) + 'px';
    }
    else if (e.key == 'ArrowLeft') {

        let dino = document.querySelector('.dino');
        let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dx - 112) + 'px';
    }
    else if (e.key == 'ArrowDown') {

        let dino = document.querySelector('.dino');
        // let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
        dino.style.bottom = 0 + 'px';
    }

}


setInterval(() => {
    let dino = document.querySelector('.dino');
    let obstacle = document.querySelector('.obstacle');
    let gameover = document.querySelector('.gameover');

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    let offsetx = Math.abs(dx - ox);
    let offsety = Math.abs(dy - oy);

    if (offsetx < 70 && offsety < 52) {

        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        musicsgo.play();

        setTimeout(() => {
            musicsgo.pause();
            musics.pause();
        }, 1000);

    }
    else if (offsetx < 115 && flag) {

        score += 1;
        console.log(score);
        updatescore(score);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, 1000);

        setTimeout(() => {

            let anidu = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdu = anidu - 0.1;
            if (newdu>3) {
                
                obstacle.style.animationDuration = newdu + 's';
            }
        }, 400);

    }




}, 15);


function updatescore(sore) {

    let scorevalue = document.querySelector('.score');
    scorevalue.innerHTML = 'Your score is: ' + sore;

}