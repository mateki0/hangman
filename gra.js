let categories = [];

function getQuery() {
  let query = window.location.search.substring(1)
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    categories.push(vars[i].slice(0, vars[i].indexOf('=')))
  }
}
getQuery()
console.log(categories)









// Categories

var miasta = [
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
];


var sport = [
  'tłoki gorzyce',
  'błękitni roposzyce',
  'kmita zabierzów',
  'górnik wałbrzych',
  'rozwój katowice',
  'ruch radzionków',
  'aluminium konin',
  'podbeskidzie bielsko biała',
];

var panstwa = [
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
]

var osoby = [
  'Alexander Graham Bell',
  'Albert Einstein',
  'Pitagoras',
  'Bill Gates',
  'Walt Disney',
  'Thomas Edison',
  'Chuck Norris',
]