(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('Product price: ', productPrice);

  let customer: number = 28;
  customer = customer + 1;
  console.log(customer, productPrice);

  let productInStock: number;
  // console.log(productInStock);
  // if (productInStock > 10) {
  //   console.log('Is grater');
  // }

  let discount = parseInt('1');
  console.log(discount);
  if (discount <= 220) {
    console.log('apply');
  } else {
    console.log('no apply');
  }

  let hex = 0xfffe;
  console.log(hex);

  let bin = 0b1010;
  console.log(bin);
})();
