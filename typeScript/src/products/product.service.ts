import { Products } from './proudct.model';

export const pruducts: Products[] = [];

export const addProduct = (data: Products) => {
  pruducts.push(data);
};

export const calcStock = (): number => {
  let total = 0;
  pruducts.forEach((item) => {
    total += item.stocck;
  });

  return total;
};
