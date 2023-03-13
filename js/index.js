/* fixing window height on iPhone */

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', appHeight);
appHeight();

/* fixing window height on iPhone */

/* 

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

 */


/* ------------------------- HOMEPAGE ------------------------- */

const btnCheck = document.getElementById('btn-check');
const btnPlay = document.getElementById('btn-play');
const homepage = document.getElementById('homepage');
const check = document.getElementById('check');
const play = document.getElementById('play');


btnCheck.addEventListener('click', () => {
    homepageToggle();
    checkToggle();
})





function homepageToggle(){
    homepage.classList.toggle('d-none');
}
function playToggle(){
    play.classList.toggle('d-none');
}

function checkToggle(){
    check.classList.toggle('d-none');
}

