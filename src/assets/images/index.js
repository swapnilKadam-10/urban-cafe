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
import FarmhousePizza from './farmhouse_pizza.png';
import PaneerPizza from './paneer_tandori_pizza.png';
import SpicyPizza from './spicy_pizza.png';
import PepporiniPizza from './pepporani_pizza.png';
import FieryChickenPizza from './fiery_chicken_pizza.png';

import ChickenPopocorn from './chciken_popcorn.png';


import MasalaMaggi from './masala_maggie.png';
import PeriMaggie from './peri_maggie.png';

import GarlicBread from './garlic_bread.png';



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
    "farmhouse-pizza" : FarmhousePizza,
    "paneer-tandori-pizza" : PaneerPizza,
    "spicy-pizza" : SpicyPizza,
    "pepporini-pizza" : PepporiniPizza,
    "fiery-chicken-pizza" : FieryChickenPizza,
    "masala-maggi" : MasalaMaggi,
    "peri-maggi" : PeriMaggie,
    "garlic-bread" : GarlicBread,
  };
  return images[name];
}