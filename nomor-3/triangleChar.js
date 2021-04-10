const pyramidLeft = (rows) => {
  let number = 1
  for (let i = 1; i <= rows; i++){
    let str = ' '

    for(let j = 1; j <= i; j++){
      //Count the '*' for each row
      str += number
      number++
    }
  //Print the pyramid pattern for each row
  console.log(str)
  } 
}

// const charFloyd = strg => {
//   let arr = strg.replace(/\s/g,'').split(''), str = ""
  
//   for (let i = 0; i < arr.length; i++){
//     for(let j = arr.length - i; j > 0; j--) str += " "
//     for(let k = 1; k <= i; i++) str += `* `
//     console.log(str)
//   }
// }

pyramidLeft(4)

//charFloyd("bermain dengan javascript")