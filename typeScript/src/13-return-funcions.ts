(() => {
  const calcTotal = (price: number[]): number => {
    let total = 0;
    price.forEach((item) => {
      total += item;
    });
    return total;
  };

  const respuesta = calcTotal([1, 2, 3, 4, 5]);
  console.log(respuesta);
})();
