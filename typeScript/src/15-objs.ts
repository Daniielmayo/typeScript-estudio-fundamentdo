(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Products = {
    title: string;
    createdAt: Date;
    stocck: number;
    size?: Size;
  };
  const pruducts: Products[] = [];
  const addProduct = (data: Products) => {
    pruducts.push(data);
  };

  addProduct({
    title: 'Camisa basica',
    createdAt: new Date(),
    stocck: 20,
    size: 'XL',
  });
  console.log(pruducts);
})();
