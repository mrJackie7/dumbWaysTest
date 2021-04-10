/*
  Membutuhkan prompt-sync untuk bisa mengambil input dari user.
  Harus import dulu modulnya dari npm
*/
const prompt = require('prompt-sync')({sigint: true})

const checkIndex = (stringKey, word) => {
  if(word === '') {
    console.log('false')
  }else{
    let arr = stringKey.split(" "), res = 0

    for(let i = 0; i < arr.length; i++){
      console.log(`${arr[i]} & ${word} => ${word.includes(arr[i]) ? res = 'true' : res = 'false'}`)
    }
  }
}

const dataKey = "dumb ways the best"
let yourWord = prompt('masukan kata yang ingin diperiksa: ')
checkIndex(dataKey, yourWord)