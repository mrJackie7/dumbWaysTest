let randomCharTriangle = (n) => {
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

randomCharTriangle(5)