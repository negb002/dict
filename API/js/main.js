const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  const lang = document.getElementById('lang').value;
  const textOne = document.querySelector('.text-one').value;
  const textTwo = document.querySelector('.text-two');
  const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '09f951ce44msh47568a75676581ap1a6ebbjsne11cc0fc6885',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
      source_language: 'uz',
      target_language: `${lang}`,
      text: `${textOne}`
    })
  };

  /*try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }*/
  fetch(url, options)
      .then(response => response.json())
      .then(json => textTwo.innerText=json.data.translatedText);
});
