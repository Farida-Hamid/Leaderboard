const formData = document.querySelector('#add');
/* eslint-disable import/prefer-default-export */

export const sendScore = async (url) => {
  try {
    const message = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: formData.name.value,
        score: formData.score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    formData.name.value = '';
    formData.score.value = '';

    return message.json();
  } catch (error) {
    return false;
  }
};
