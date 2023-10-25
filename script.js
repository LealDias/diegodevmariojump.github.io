const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const bgSound = document.getElementById('background-sound');
const jumpSound = document.getElementById('jump-sound');

const jump = () => {
    mario.classList.add('jump');
    jumpSound.play();
    setTimeout(() =>{mario.classList.remove('jump')}, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; // Take pipe's position
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }
    
}, 10);

const song = () => {
    bgSound.play();
    setTimeout(song, 1)
}

song();

document.addEventListener('keydown', jump);