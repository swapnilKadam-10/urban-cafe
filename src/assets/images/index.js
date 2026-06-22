import BreadButter from "./bread_butter_sand.jpg";
import VegSandwich from "./veg_sand.png";
import PaneerSandwich from "./paneer_sand.png";
import ChoclateSandwich from "./choc_sand.png";
import ChoclateCheeseSandwich from "./choc_sand_2.png";
import TandoriChickenSandwich from './tandori_chicken_sand.png'
import BBQChickenSandwich from "./bbq_sand.png";
import MexicanBurger from './mexican_burger.png';
import PaneerBurger from './paneer_burger.png';
import BBQChickenBurger from './bbq_burger.png';
import MargheritaPizza from './margherita_pizza.png';

import ChickenPopocorn from './chciken_popcorn.png';





export const image = (name) => {
  const images = {
    "bread-butter": BreadButter,
    "veg-sandwich": VegSandwich,
    "paneer-sandwich": PaneerSandwich,
    "chocolate-sandwich": ChoclateSandwich,
    "chocolate-cheese-sandwich": ChoclateCheeseSandwich,  
    "tandori-chicken-sandwich": TandoriChickenSandwich,
    "bbq-chicken-sandwich": BBQChickenSandwich,
    "mexican-burger": MexicanBurger,
    "paneer-burger": PaneerBurger,
    "bbq-burger": BBQChickenBurger,
    "margherita-pizza": MargheritaPizza,
    "chicken-popcorn": ChickenPopocorn,
  };
  return images[name];
}