(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    creteAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      creteAt,
      stock,
      size,
    };
  }
  const producto1 = createProductToJson('p1', new Date(), 12, 'S');
  console.log(producto1);

  // todo arrow functions
  const createProductToJsonV2 = (
    title: string,
    creteAt: Date,
    stock: number,
    //todos en signo de interrogante le decimos que size es opcional y que si no hay valor llega undefined
    size?: Size | undefined
  ) => {
    return {
      title,
      creteAt,
      stock,
      size,
    };
  };
  const producto1V2 = createProductToJsonV2('p1', new Date(), 12);
  console.log(producto1V2);
})();
