import { img } from '../utils/images'

export const menuCategories = ['All', 'Coffee', 'Tea', 'Cold Coffee', 'Mocktails', 'Pizza', 'Pasta', 'Sandwich', 'Burgers', 'Desserts']

export const menuItems = [
  ['Coffee', 'Urban Signature Latte', 'Velvety espresso, vanilla cream, and caramel dust.', 280, 'photo-1514432324607-a09d9b4aefdd'],
  ['Coffee', 'Hazelnut Mocha', 'Dark cocoa folded into roasted hazelnut espresso.', 320, 'photo-1509042239860-f550ce710b93'],
  ['Coffee', 'Cortado Reserve', 'Double ristretto with silky steamed milk.', 250, 'photo-1495474472287-4d71bcdd2085'],
  ['Tea', 'Saffron Masala Chai', 'Spiced tea finished with saffron and jaggery notes.', 180, 'photo-1571934811356-5cc061b6821f'],
  ['Tea', 'Rose Green Tea', 'Fragrant green tea with rose petals and honey.', 210, 'photo-1544787219-7f47ccb76574'],
  ['Cold Coffee', 'Belgian Frappe', 'Cold brew, Belgian chocolate, and whipped cream.', 340, 'photo-1461023058943-07fcbe16d735'],
  ['Cold Coffee', 'Salted Caramel Cold Brew', 'Slow-steeped coffee over caramel foam.', 330, 'photo-1517701604599-bb29b565090c'],
  ['Mocktails', 'Citrus Mint Sparkler', 'Orange, lime, mint, and sparkling water.', 260, 'photo-1544145945-f90425340c7e'],
  ['Mocktails', 'Berry Basil Cooler', 'Strawberry, basil, lemon, and crushed ice.', 290, 'photo-1500217052183-bc01eee1a74e'],
  ['Pizza', 'Truffle Mushroom Pizza', 'Wild mushroom, mozzarella, and truffle oil.', 560, 'photo-1513104890138-7c749659a591'],
  ['Pizza', 'Margherita Luxe', 'San Marzano tomato, basil, and fresh mozzarella.', 480, 'photo-1604382354936-07c5d9983bd3'],
  ['Pasta', 'Creamy Pesto Penne', 'Basil pesto, cream, parmesan, and pine nuts.', 470, 'photo-1551183053-bf91a1d81141'],
  ['Pasta', 'Arrabbiata Rosso', 'Tomato, garlic, chilli, basil, and olive oil.', 420, 'photo-1473093295043-cdd812d0e601'],
  ['Sandwich', 'Smoked Paneer Panini', 'Charred paneer, pesto, peppers, and cheddar.', 360, 'photo-1528735602780-2552fd46c7af'],
  ['Sandwich', 'Avocado Club', 'Avocado, greens, tomato, and house aioli.', 390, 'photo-1553909489-cd47e0907980'],
  ['Burgers', 'Urban Crispy Burger', 'Crispy patty, cheddar, lettuce, and smoky sauce.', 430, 'photo-1568901346375-23c9450c58cd'],
  ['Burgers', 'Classic Cheese Burger', 'Grilled patty, cheese, pickles, and brioche.', 450, 'photo-1550547660-d9450f859349'],
  ['Desserts', 'Tiramisu Jar', 'Espresso-soaked layers with mascarpone cream.', 310, 'photo-1571877227200-a0d98ea607e9'],
  ['Desserts', 'Biscoff Cheesecake', 'Creamy cheesecake with spiced cookie crumble.', 340, 'photo-1533134242443-d4fd215305ad'],
].map(([category, name, description, price, photo], index) => ({
  id: index + 1,
  category,
  name,
  description,
  price,
  image: img(photo),
  chefRecommended: [1, 4, 6, 10, 12, 18].includes(index + 1),
  popular: [1, 6, 10, 18].includes(index + 1),
}))

export const todaysSpecials = menuItems.filter((item) => item.popular).concat(menuItems.slice(8, 10)).slice(0, 6)
