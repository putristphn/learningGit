// Create a triangle using a loop
let tinggi = 4; // number of triangle rows
let hasil = "";

for (let i = 1; i <= tinggi; i++) {
  for (let j = 1; j <= i; j++) {
    hasil += "*";
  }
  hasil += "\n"; // move to the next line
}

console.log(hasil);