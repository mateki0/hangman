const allCategories = {
  cities: [
    'Wagadugu',
    'Jamasukro',
    'Pretoria',
    'Windhuk',
    'Dżibuti',
    'Rangun',
    'Caracas',
    'Ndżamena',
    'Niamej',
    'Bissau',
  ],
  sport: [
    'tłoki gorzyce',
    'błękitni roposzyce',
    'kmita zabierzów',
    'górnik wałbrzych',
    'rozwój katowice',
    'ruch radzionków',
    'aluminium konin',
    'podbeskidzie bielsko biała',
  ],
  countries: [
    'Islamska Republika Afganistanu',
    'Księstwo Andory',
    'Republika Beninu',
    'Państwo Brunei Darussalam',
    'Republika Dżibuti',
    'Republika Gwinei',
    'Jordańskie Królestwo Haszymidzkie',
    'Sułtanat Omanu',
    'Republika Seszeli',
    'Republika Sierra Leone',
  ],
  people: [
    'Alexander Graham Bell',
    'Albert Einstein',
    'Pitagoras',
    'Bill Gates',
    'Walt Disney',
    'Thomas Edison',
    'Chuck Norris',
  ]
}
let categories = [];


function getQuery() {
  let query = window.location.search.substring(1)
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    categories.push(vars[i].slice(0, vars[i].indexOf('=')))
  }
}
getQuery();


const letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ż', 'Ź']



function buildKeyboard() {
  let keyboard = document.getElementById('keyboard');
  letters.forEach(letter => {
    let div = document.createElement('div');
    div.innerText = letter;
    div.classList.add('letter');
    div.addEventListener('click', guess)
    keyboard.appendChild(div);
  })
}

function concatCategories() {
  let allCat = []
  let keys = Object.keys(allCategories)
  categories.map(cat => {
    keys.map(key => {
      let value = allCategories[key]
      if (cat == key) {
        allCat.push(value);
      }
    })
  })
  return allCat.flat();
}


function getOneRandomPhrase() {
  let min = 0;
  let max = concatCategories().length;
  let random = Math.floor(Math.random() * (max - min)) + min;
  return concatCategories()[random].toUpperCase();
}
let phraseToGuess = getOneRandomPhrase().split('');
console.log(phraseToGuess)

function phraseInput() {

  let place = document.getElementById('phrase');

  phraseToGuess.forEach(p => {
    let div = document.createElement('div');
    if (p == ' ') {
      div.innerText = '';
      div.classList.add('blank', 'singleLetter');
    } else {
      div.innerText = '-';
      div.classList.add('singleLetter');
    }
    place.appendChild(div);
  })
}

let noBlank = phraseToGuess.filter(a => {
  return a !== ' ';
});
let counter = 0;
let badCounter = 0;

function endGame() {
  let keyboard = document.getElementById('keyboard');
  keyboard.innerHTML = '';
  keyboard.classList.remove('keyboard-grid');
  keyboard.classList.add('keyboard-flex');
  let span = document.createElement('span');
  let button = document.createElement('button');
  if (badCounter == 9) {
    span.innerHTML = 'Przegrana! Prawidłowe</br> hasło: ' + phraseToGuess.join('');
  } else {
    span.innerHTML = 'Tak jest! Podano prawidłowe</br> hasło: ' + phraseToGuess.join('');
  }
  button.innerText = 'jeszcze raz?';
  span.classList.add('win-span');
  button.classList.add('play-again');
  button.addEventListener('click', function() {
    window.location.href = '';
  })
  keyboard.appendChild(span)
  keyboard.appendChild(button)
}

function guess(e) {
  let clickedLetter = e.target.innerText;
  let array = [];
  const letters = document.querySelectorAll('.singleLetter');
  const goodAudio = document.getElementById('goodAudio')
  const badAudio = document.getElementById('badAudio')
  let img = document.getElementById('img');
  if (!phraseToGuess.includes(clickedLetter)) {
    badAudio.play();
    e.target.classList.add('bad');
    badCounter++;
    img.style.backgroundImage = `url(img/s${badCounter}.jpg)`
  }
  if (badCounter == 9) {
    endGame();
  }
  phraseToGuess.forEach(p => {
    if (p === clickedLetter) {
      goodAudio.play();
      counter++
      array = phraseToGuess.flatMap((phr, i) => phr == clickedLetter ? i : [])
      e.target.classList.add('good');
      Array.prototype.forEach.call(letters, (item, i) => {
        array.forEach(index => {
          if (index == i) {
            item.innerText = clickedLetter;
          }
        });
      });
    }
    if (counter == noBlank.length) {
      endGame();
    }
  })

}


buildKeyboard();
phraseInput();