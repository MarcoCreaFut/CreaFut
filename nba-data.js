/* Données NBA — une ligne par équipe.
   logo : nom du fichier du logo sur Cloudinary, SANS l'extension (ex. "Logo_Atlanta").
   Tant que logo est vide, la tuile affiche la première carte de l'équipe. */
var NBA_BASE = "https://res.cloudinary.com/qwlhmio0/image/upload/";
var NBA_EXT = ".webp";
var NBA_EQUIPES = [
  {"id": "atlanta", "nom": "Atlanta", "conf": "est", "logo": "", "cartes": [["Atlanta_01", "Atlanta 01"], ["Atlanta_02", "Atlanta 02"]]},
  {"id": "boston", "nom": "Boston", "conf": "est", "logo": "", "cartes": [["Boston_01", "Boston 01"], ["Boston_02", "Boston 02"]]},
  {"id": "brooklyn", "nom": "Brooklyn", "conf": "est", "logo": "", "cartes": [["Brooklyn_01", "Brooklyn 01"], ["Brooklyn_02", "Brooklyn 02"]]},
  {"id": "charlotte", "nom": "Charlotte", "conf": "est", "logo": "", "cartes": [["Charlotte_01", "Charlotte 01"], ["Charlotte_02", "Charlotte 02"]]},
  {"id": "chicago", "nom": "Chicago", "conf": "est", "logo": "", "cartes": [["Chicago_01", "Chicago 01"]]},
  {"id": "cleveland", "nom": "Cleveland", "conf": "est", "logo": "", "cartes": [["Cleveland_01", "Cleveland 01"], ["Cleveland_02", "Cleveland 02"]]},
  {"id": "detroit", "nom": "Détroit", "conf": "est", "logo": "", "cartes": [["Détroit_01", "Détroit 01"], ["Détroit_02", "Détroit 02"]]},
  {"id": "indiana", "nom": "Indiana", "conf": "est", "logo": "", "cartes": [["Indiana_01", "Indiana 01"], ["Indiana_02", "Indiana 02"]]},
  {"id": "miami", "nom": "Miami", "conf": "est", "logo": "", "cartes": [["Miami_01", "Miami 01"], ["Miami_02", "Miami 02"]]},
  {"id": "milwaukee", "nom": "Milwaukee", "conf": "est", "logo": "", "cartes": [["Milwaukee_01", "Milwaukee 01"], ["Milwaukee_02", "Milwaukee 02"]]},
  {"id": "new-york", "nom": "New York", "conf": "est", "logo": "", "cartes": [["NY", "NY"]]},
  {"id": "orlando", "nom": "Orlando", "conf": "est", "logo": "", "cartes": [["Magic_Orlando", "Magic Orlando"], ["Orlando_01", "Orlando 01"], ["Orlando_02", "Orlando 02"]]},
  {"id": "philadelphie", "nom": "Philadelphie", "conf": "est", "logo": "", "cartes": [["Philadelphie_01", "Philadelphie 01"], ["Philadelphie_02", "Philadelphie 02"], ["Philadelphie_03", "Philadelphie 03"]]},
  {"id": "toronto", "nom": "Toronto", "conf": "est", "logo": "", "cartes": [["Toronto_01", "Toronto 01"], ["Toronto_02", "Toronto 02"]]},
  {"id": "washington", "nom": "Washington", "conf": "est", "logo": "", "cartes": [["Washington_01", "Washington 01"], ["Washington_02", "Washington 02"], ["Washington_03", "Washington 03"]]},
  {"id": "dallas", "nom": "Dallas", "conf": "ouest", "logo": "", "cartes": [["Dallas_01", "Dallas 01"], ["Dallas_02", "Dallas 02"]]},
  {"id": "denver", "nom": "Denver", "conf": "ouest", "logo": "", "cartes": [["Denver_01", "Denver 01"], ["Denver_02", "Denver 02"]]},
  {"id": "golden-state", "nom": "Golden State", "conf": "ouest", "logo": "", "cartes": [["Golden_States_01", "Golden States 01"], ["Golden_States_02", "Golden States 02"], ["Golden_States_03", "Golden States 03"]]},
  {"id": "houston", "nom": "Houston", "conf": "ouest", "logo": "", "cartes": [["Houston_01", "Houston 01"], ["Houston_02", "Houston 02"]]},
  {"id": "la-clippers", "nom": "Los Angeles Clippers", "conf": "ouest", "logo": "", "cartes": [["Los_Angeles_-_Clippers_01", "Los Angeles - Clippers 01"], ["Los_Angeles_-_Clippers_02", "Los Angeles - Clippers 02"]]},
  {"id": "la-lakers", "nom": "Los Angeles Lakers", "conf": "ouest", "logo": "", "cartes": [["Los_Angeles_-_Lakers", "Los Angeles - Lakers"]]},
  {"id": "memphis", "nom": "Memphis", "conf": "ouest", "logo": "", "cartes": [["Memphis_01", "Memphis 01"]]},
  {"id": "minnesota", "nom": "Minnesota", "conf": "ouest", "logo": "", "cartes": [["Minnesota_01", "Minnesota 01"], ["Minnesota_02", "Minnesota 02"]]},
  {"id": "new-orleans", "nom": "New Orleans", "conf": "ouest", "logo": "", "cartes": [["NO", "NO"]]},
  {"id": "oklahoma-city", "nom": "Oklahoma City", "conf": "ouest", "logo": "", "cartes": [["OKC_01", "OKC 01"]]},
  {"id": "phoenix", "nom": "Phoenix", "conf": "ouest", "logo": "", "cartes": [["Phoenix_01", "Phoenix 01"], ["Phoenix_02", "Phoenix 02"]]},
  {"id": "portland", "nom": "Portland", "conf": "ouest", "logo": "", "cartes": [["Portland_01", "Portland 01"], ["Portland_02", "Portland 02"], ["Portland_03", "Portland 03"]]},
  {"id": "sacramento", "nom": "Sacramento", "conf": "ouest", "logo": "", "cartes": [["Sacramento_01", "Sacramento 01"], ["Sacramento_02", "Sacramento 02"]]},
  {"id": "san-antonio", "nom": "San Antonio", "conf": "ouest", "logo": "", "cartes": [["San_Antonio_01", "San Antonio 01"], ["San_Antonio_02", "San Antonio 02"]]},
  {"id": "seattle", "nom": "Seattle", "conf": "ouest", "logo": "", "cartes": [["Seattle_01", "Seattle 01"]]},
  {"id": "utah", "nom": "Utah", "conf": "ouest", "logo": "", "cartes": [["Utah_01", "Utah 01"], ["Utah_02", "Utah 02"]]},
  {"id": "vancouver", "nom": "Vancouver", "conf": "ouest", "logo": "", "cartes": [["Vancouver_01", "Vancouver 01"]]},
];
