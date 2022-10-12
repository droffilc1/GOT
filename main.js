document.querySelector('button').addEventListener('click', getCharacter)


function getCharacter() { 
  fetch(`https://api.gameofthronesquotes.xyz/v1/random`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)  
      document.querySelector('h1').innerText = data.sentence
      document.querySelector('h2').innerText = data.character.name     
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}