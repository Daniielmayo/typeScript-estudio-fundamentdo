import { addProduct, calcStock, pruducts } from './product.service';

addProduct({
  title: 'Camisa basica',
  createdAt: new Date(),
  stocck: 20,
  size: 'XL',
});
addProduct({
  title: 'Camisa basica',
  createdAt: new Date(),
  stocck: 8,
  size: 'M',
});

console.log(pruducts);
const total = calcStock();
console.log(total);
