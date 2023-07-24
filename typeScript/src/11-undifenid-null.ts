(() => {
  // let myNumber: number;
  // let myString: string;
  let myNull: null = null;
  let myUndefines: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'dsjfls';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'no body';
    }
    console.log(hello);
  }

  hi('Nicolas');
  hi(null);

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'noBody';
    console.log(hello);
  }

  hiV2('Daniel');
  hiV2(null);
})();
