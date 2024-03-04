import './App.css';
import RecipeList from "./bricks/RecipeList";
import 'bootstrap/dist/css/bootstrap.min.css';

import CubaLibre from "./assets/images/drinks/cuba-libre.jpg";
import Daiquri from "./assets/images/drinks/daiquiri.jpg";
import Mojito from "./assets/images/drinks/mojito.jpg";
import PinaColada from "./assets/images/drinks/pina-colada.jpg"


const recipeList = [
  {
    "name": "Cuba Libre",
    "price": "9 USD",
    "category": "Rum",
    "ingredients": "Bacardi, Cola, Limet, Ice",
    "drinkId": "84d4e4261f30a2e5",
    "drinkImg": CubaLibre,
    "description": "Autentický koktejl Cuba Libre spojuje tmavý rum s klasickým Cola nápojem a šťávou z čerstvé limetky. Osvěžující a chutný, připomíná vůni karibského klimatu.",
    "snipet": " Kombinace tmavého rumu a koly pro chuť Kuby."
  },
  {
    "name": "Piňa Colada",
    "price": "8 USD",
    "category": "Rum",
    "ingredients": "Rum, ananas juice, cocos cream",
    "drinkId": "1e838cb06cfeb01c",
    "drinkImg": PinaColada,
    "description": "Oslnivá Piňa Colada přináší dojem tropického ráje pomocí směsi bílého rumu, ananasové šťávy a kokosového mléka. Každý doušek přenáší na pláž s bílým pískem a azurovým mořem.",
    "snipet": "Tropická slast plná ananasu a kokosu."
  },
  {
    "name": "Daiquiri",
    "price": "7 USD",
    "category": "Rum",
    "ingredients": "Rum, Lemon juice, Sugr sirup",
    "drinkId": "f780b198cf290778",
    "drinkImg": Daiquri,
    "description": "Daiquiri, klasický koktejl inspirovaný Kubou, spojuje bílý rum, čerstvou limetkovou šťávu a jednoduchý sirup. Jeho jedinečná rovnováha mezi sladkostí a kyselostí ho řadí mezi oblíbence všech dob.",
    "snipet": "Klasika s rumem, limetkou a sirupem."
  },
  {
    "name": "Mojito",
    "price": "6 USD",
    "category": "Rum",
    "ingredients": "Rum, Mathe, Limet, Brown sugr",
    "drinkId": "3aa1b99e902f5175",
    "drinkImg": Mojito,
    "description": "Osvežující Mojito je tradiční kubánský koktejl složený z bílého rumu, čerstvé máty, cukru, limetky a sodovky. Kombinace sladké a osvěžující chuti ho činí ideálním pro horké letní dny.",
    "snipet": "Osvěžující mix rumu, máty a limetky."
  }
]

function App() {
  return (
    <div className="App">
      <h1>Cocktail MENU</h1>
      <h3>Welcome in club Paradiso! Choose you drink!</h3>
      <RecipeList recipeList={recipeList} />
    </div>
  );
}

export default App;