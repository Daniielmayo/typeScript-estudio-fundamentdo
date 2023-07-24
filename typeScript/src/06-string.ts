(() => {
  let producTitle = 'My amazing product';
  producTitle = 'My awesome product changes';
  console.log('producTitle', producTitle);

  const productDescription = 'Bla bla bla bla bla bla bla bla bla bla';
  console.log('producTitle', productDescription);

  let productPrice = 100;

  let isNew: boolean = false;

  const summary = `
    title: ${producTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log('summary', summary);

  const myString: string = 'description';
  console.log(myString)
})();
