// Buat segitiga menggunakan loop
let tinggi = 4; // jumlah baris segitiga
let hasil = "";

for (let i = 1; i <= tinggi; i++) {
  for (let j = 1; j <= i; j++) {
    hasil += "*";
  }
  hasil += "\n"; // pindah baris
}

console.log(hasil);