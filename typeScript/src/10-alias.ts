(() => {
  type UserId = string | number | boolean;
  let userId: string | number | boolean;

  // function greeting(userId: UserId) {
  //   if (typeof userId === 'string') {
  //     console.log(`string ${userId.toLowerCase()}`);
  //   }
  // }
  // todo literas types
  type Size = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Size;
  shirtSize: 'M';
  shirtSize: 'L';
  shirtSize: 'XL';
  function greeting(userId: UserId, shirtSize: Size) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting(12121, 'S');
})();
