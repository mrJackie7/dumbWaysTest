/*
  Membutuhkan prompt-sync untuk bisa mengambil input dari user.
  Harus import dulu modulnya dari npm
*/
const prompt = require('prompt-sync')({sigint: true})

// sebuah fungsi untuk mengechek kata-kata dengan array kata kunci
const checkIndex = (stringKey, word) => {
  //jika input kosong, print 'Harap input dengan benar'
  if(word === '') {
    console.log('Harap input dengan benar')
  }else{
    // mengubah kalimat menjadi array string, dengan memisahkan berdasarkan " " dengan metode split()
    let arr = stringKey.split(" "), res = 0

    //check kata per array index dengan looping for
    for(let i = 0; i < arr.length; i++){
      // print jika kata yang diperiksa memiliki index dari array kunci
      console.log(`${arr[i]} & ${word} => ${word.includes(arr[i]) ? res = 'true' : res = 'false'}`)
    }
  }
}

const dataKey = "dumb ways the best"
let yourWord = prompt('masukan kata yang ingin diperiksa: ')
checkIndex(dataKey, yourWord)