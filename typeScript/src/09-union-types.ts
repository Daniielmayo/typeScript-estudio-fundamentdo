(() => {
  let userId : string | number ;
  userId = '2323';
  userId = 3232
  console.log( userId )


  function greeting( myText: string | number){
      if( typeof myText === 'string'){
        console.log(`string ${myText.toLocaleLowerCase()}`)
      }else{
        console.log(`number ${myText.toFixed(1)}`)
      }
  }
  greeting('Hello')
  greeting(2323.333)
})()
