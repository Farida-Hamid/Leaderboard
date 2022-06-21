const scores = document.querySelector('.scores');

const fetchScores = (url) => {
  console.log('refreshed');
  scores.innerHTML = '';

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.result.forEach((data) => {
        scores.innerHTML += `
      <li>${data.user}: ${data.score}</li>`;
      });
    });
};

export default fetchScores;