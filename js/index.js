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
});

btnPlay.addEventListener('click', ()=> {
    homepageToggle();
    playToggle();
});



/* ------------------------- CHECK ------------------------- */
const list = [
    'robert.deniro@gmail.com',
    'chrisevans@icloud.com',
    'sheldoncooper@nasa.com'
]

const input = document.querySelector('input[name="email"]');
const btnGoCheck = document.getElementById('check-email');



input.addEventListener('input', () => {
    if (input.value != '' && input.value.includes('@') && input.value.trim().length > 1){
        btnGoCheck.disabled = false;
    } else {
        btnGoCheck.disabled = true;
    }
})

btnGoCheck.addEventListener('click', () => {
    const requested = input.value;
    input.value = '';
    btnGoCheck.disabled = true;
    document.querySelector('.requestedCheck').innerHTML = requested;

})


/* ------------------------- FUNCTIONS ------------------------- */

function homepageToggle(){
    homepage.classList.toggle('d-none');
}
function playToggle(){
    play.classList.toggle('d-none');
}

function checkToggle(){
    check.classList.toggle('d-none');
}

function checkEmail(){

    for(let i=0;i<list.length;i++){

    }
}

