let categories = [];
let allCat = []

function getQuery() {
  let query = window.location.search.substring(1)
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    categories.push(vars[i].slice(0, vars[i].indexOf('=')))
  }
}
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

function getCategory() {
  let keys = Object.keys(allCategories)
  categories.map(cat => {
    keys.map(key => {
      let value = allCategories[key]
      if (cat == key) {
        allCat.push(value)
      }
    })
  })
  return allCat
}

function getOneRandomCategory() {
  let min = 0;
  let max = allCat.flat().length;
  let random = Math.floor(Math.random() * (max - min)) + min;
  return allCat.flat()[random]
}
getQuery()
getCategory()
getOneRandomCategory()