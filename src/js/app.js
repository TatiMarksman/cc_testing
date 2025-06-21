import { isValidCardNumber } from './validator';
import { detectCardType } from './detect';
import visaImg from '../img/visa.png';
import mastercardImg from '../img/mastercard.png';
import amexImg from '../img/amex.png';
import discoverImg from '../img/discover.png';
import jcbImg from '../img/jcb.png';
import dinersImg from '../img/diners.png';
import mirImg from '../img/mir.png';
import '../style.css';

const input = document.getElementById('card-number');
const button = document.getElementById('validate-btn');
const result = document.getElementById('result');
const cards = document.querySelectorAll('.card');

document.querySelector('.card.visa').src = visaImg;
document.querySelector('.card.mastercard').src = mastercardImg;
document.querySelector('.card.amex').src = amexImg;
document.querySelector('.card.discover').src = discoverImg;
document.querySelector('.card.jcb').src = jcbImg;
document.querySelector('.card.diners').src = dinersImg;
document.querySelector('.card.mir').src = mirImg;


button.addEventListener('click', () => {
  const number = input.value.trim();
  const isValid = isValidCardNumber(number);
  const type = detectCardType(number);

  cards.forEach(card => card.classList.remove('active'));
  if (type) {
    const activeCard = document.querySelector(`.card.${type}`);
    if (activeCard) activeCard.classList.add('active');
  }

  result.textContent = isValid ? 'Card number is valid' : 'Invalid card number';
  result.style.color = isValid ? 'green' : 'red';
});