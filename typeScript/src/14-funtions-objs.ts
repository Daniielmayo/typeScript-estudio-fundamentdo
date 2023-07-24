(() => {
  const login = (data: { email: string; password: string | number }) => {
    console.log(data.email, data.password);
  };
  login({
    email: 'daniel@google.com',
    password: 123,
  });

  type Size = 'S' | 'M' | 'L' | 'XL';
  const pruducts: any[] = [];
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stocck: number;
    size?: Size;
  }) => {
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
