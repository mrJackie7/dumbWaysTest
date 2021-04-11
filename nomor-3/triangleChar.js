/*
  Membutuhkan prompt-sync untuk bisa mengambil input dari user.
  Harus import dulu modulnya dari npm
*/
const prompt = require('prompt-sync')({sigint: true})

// Sebuah fungsi untuk membuat segitiga secara random
const randomCharTriangle = (n) => {
  let string = ""
  let count = Math.floor(Math.random() * n <= 2 ? 2 : n)
  // External loop
  for (let i = 1; i <= n; i++) {
    // creating spaces
    for (let j = 0; j < n - i; j++) {
      string += " "
    }
    // creating alphabets
    for (let k = 0; k < 2 * i - 1; k++) {
      string += String.fromCharCode(Math.floor(Math.random() * count) + 65)
      count++
    }
    string += "\n"
  }
  console.log(string);
}

let yourNumber = prompt('Masukan nomor untuk generate segitiga-mu: ')
randomCharTriangle(yourNumber)