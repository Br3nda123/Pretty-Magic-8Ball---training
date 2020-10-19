const input = document.querySelector('.question-area input');
const answer = document.querySelector('.answer');
const img = document.querySelector('.ball-img img');
const error = document.querySelector('.error');

const answerArr = ['Nie chcesz znać odpowiedzi na to pytanie!', 'Tak.', 'Nie.', 'Nie znam odpowiedzi na to pytanie :/', 'Może.', 'Ciężko powiedzieć...'];

let timeShake = 1000;

const shakeBall = () => {
   img.classList.add('shake-animation');
   error.textContent = '';
   answer.textContent = '';
   setTimeout(checkInput, timeShake);
}

const drawAnswer = () => {
   const draw = Math.floor(Math.random() * answerArr.length);
   answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[draw]}`;
}

const checkInput = () => {
   img.classList.remove('shake-animation');
   if (input.value === '') {
      error.textContent = 'Musisz zadać jakieś pytanie!';
   } else if (input.value.slice(-1) !== '?') {
      error.textContent = 'Pytanie musi być zakończone znakiem "?".';
   } else {
      drawAnswer();
   };

};

img.addEventListener('click', shakeBall);