const scores = document.querySelector('.scores');

export const fetchScores = async (url) => {
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
