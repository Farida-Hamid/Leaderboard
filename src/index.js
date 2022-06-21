import './style.css';
import fetchScores from './modules/display-scores.js';

const refresh = document.querySelector('#refresh');
const url = ``;

refresh.addEventListener('click', fetchScores(url));
