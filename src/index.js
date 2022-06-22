import './style.css';
import fetchScores from './modules/display-scores.js';
import sendScore from './modules/display-scores.js';

const refresh = document.querySelector('#refresh');
const scoreAdder = document.querySelector('form');

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/45ygaw4er3w4rt34ty64yrtrw3rik8/scores/`;

refresh.addEventListener('click', fetchScores(url));

scoreAdder.addEventListener('submit', sendScore(url));
