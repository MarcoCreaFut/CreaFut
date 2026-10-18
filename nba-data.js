/* Données NBA — une ligne par équipe.
   logo : nom du fichier du logo sur Cloudinary, SANS l'extension.
   cartes : [nom du fichier sans extension, texte affiché]. */
var NBA_BASE = "https://res.cloudinary.com/qwlhmio0/image/upload/";
var NBA_EXT = ".webp";
var NBA_EQUIPES = [
  {"id": "atlanta", "nom": "Atlanta", "conf": "est", "logo": "Atlanta_01", "cartes": [["Atlanta_02", "Atlanta 02"], ["Atlanta_03", "Atlanta 03"], ["Atlanta_04", "Atlanta 04"], ["Atlanta_05", "Atlanta 05"], ["Atlanta_06", "Atlanta 06"]]},
  {"id": "boston", "nom": "Boston", "conf": "est", "logo": "Boston_01", "cartes": [["Boston_02", "Boston 02"], ["Boston_03", "Boston 03"], ["Boston_04", "Boston 04"], ["Boston_05", "Boston 05"], ["Boston_06", "Boston 06"]]},
  {"id": "brooklyn", "nom": "Brooklyn", "conf": "est", "logo": "Brooklyn_01", "cartes": [["Brooklyn_02", "Brooklyn 02"], ["Brooklyn_03", "Brooklyn 03"], ["Brooklyn_04", "Brooklyn 04"], ["Brooklyn_05", "Brooklyn 05"], ["Brooklyn_06", "Brooklyn 06"]]},
  {"id": "charlotte", "nom": "Charlotte", "conf": "est", "logo": "Charlotte_01", "cartes": [["Charlotte_02", "Charlotte 02"], ["Charlotte_03", "Charlotte 03"], ["Charlotte_04", "Charlotte 04"], ["Charlotte_05", "Charlotte 05"], ["Charlotte_06", "Charlotte 06"]]},
  {"id": "chicago", "nom": "Chicago", "conf": "est", "logo": "Chicago_-_00", "cartes": [["Chicago_-_01", "Chicago 01"], ["Chicago_-_02", "Chicago 02"], ["Chicago_-_03", "Chicago 03"], ["Chicago_-_04", "Chicago 04"]]},
  {"id": "cleveland", "nom": "Cleveland", "conf": "est", "logo": "Cleveland_01", "cartes": [["Cleveland_02", "Cleveland 02"], ["Cleveland_03", "Cleveland 03"], ["Cleveland_04", "Cleveland 04"], ["Cleveland_05", "Cleveland 05"], ["Cleveland_06", "Cleveland 06"]]},
  {"id": "detroit", "nom": "Détroit", "conf": "est", "logo": "Detroit_01", "cartes": [["Detroit_02", "Détroit 02"], ["Detroit_03", "Détroit 03"], ["Detroit_04", "Détroit 04"], ["Detroit_05", "Détroit 05"], ["Detroit_06", "Détroit 06"]]},
  {"id": "indiana", "nom": "Indiana", "conf": "est", "logo": "Indiana_01", "cartes": [["Indiana_02", "Indiana 02"], ["Indiana_03", "Indiana 03"], ["Indiana_04", "Indiana 04"], ["Indiana_05", "Indiana 05"], ["Indiana_06", "Indiana 06"]]},
  {"id": "miami", "nom": "Miami", "conf": "est", "logo": "Miami_-_01", "cartes": [["Miami_-_02", "Miami 02"], ["Miami_-_03", "Miami 03"], ["Miami_-_04", "Miami 04"], ["Miami_-_05", "Miami 05"], ["Miami_-_06", "Miami 06"], ["Miami_-_07", "Miami 07"]]},
  {"id": "milwaukee", "nom": "Milwaukee", "conf": "est", "logo": "Milwaukee_01", "cartes": [["Milwaukee_02", "Milwaukee 02"], ["Milwaukee_03", "Milwaukee 03"], ["Milwaukee_04", "Milwaukee 04"], ["Milwaukee_05", "Milwaukee 05"], ["Milwaukee_06", "Milwaukee 06"]]},
  {"id": "new-york", "nom": "New York", "conf": "est", "logo": "New_York_01", "cartes": [["New_York_02", "New York 02"], ["New_York_03", "New York 03"], ["New_York_04", "New York 04"], ["New_York_05", "New York 05"]]},
  {"id": "orlando", "nom": "Orlando", "conf": "est", "logo": "https://res.cloudinary.com/qwlhmio0/image/upload/v1792303067/Orlando_Magic_01.png", "cartes": [["Orlando_Magic_02", "Orlando 02"], ["Orlando_Magic_03", "Orlando 03"], ["Orlando_Magic_04", "Orlando 04"], ["Orlando_Magic_05", "Orlando 05"], ["Orlando_Magic_06", "Orlando 06"], ["Orlando_Magic_07", "Orlando 07"]]},
  {"id": "philadelphie", "nom": "Philadelphie", "conf": "est", "logo": "Philadelphia_-_02", "cartes": [["Philadelphia_-_03", "Philadelphie 03"], ["Philadelphia_-_04", "Philadelphie 04"], ["Philadelphia_-_05", "Philadelphie 05"], ["Philadelphia_-_06", "Philadelphie 06"], ["Philadelphia_-_07", "Philadelphie 07"], ["Philadelphia_-_08", "Philadelphie 08"]]},
  {"id": "toronto", "nom": "Toronto", "conf": "est", "logo": "Toronto_01", "cartes": [["Toronto_02", "Toronto 02"], ["Toronto_03", "Toronto 03"], ["Toronto_04", "Toronto 04"], ["Toronto_05", "Toronto 05"], ["Toronto_06", "Toronto 06"]]},
  {"id": "washington", "nom": "Washington", "conf": "est", "logo": "Washington_-_02", "cartes": [["Washington_-_03", "Washington 03"], ["Washington_-_04", "Washington 04"], ["Washington_-_05", "Washington 05"], ["Washington_-_06", "Washington 06"], ["Washington_-_07", "Washington 07"], ["Washington_-_08", "Washington 08"], ["Washington_-_09", "Washington 09"]]},
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
