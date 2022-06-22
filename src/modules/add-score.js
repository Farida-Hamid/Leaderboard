const formData = document.querySelector('#add');

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

    return message.json();
  }
   catch (error) {
    console.log(error);
    return false;
  }
};
