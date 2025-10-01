// lop adalah condition yang berulang selama condition true

// segment 1 -> dieksekusi sebelum loop berjalan
// segment 2 -> CONDITION true or false
// segment 3 -> dieksekusi setelah di akhir sebuah loop


// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     // break; // berhentiin loop
//     continue; // berhentiin iterasi sekarang dan lanjut ke iterasi selanjutnya 
//   }
//   console.log("Masuk loop");
//   console.log("i = " + i);
// }

for (let i = 0; i < 5; i ++){// i = 0 | z = 2
  console.log("i = " + i);

  for (let z = 0; z < 3; z++){
    console.log("z = " + z);
  }
}
