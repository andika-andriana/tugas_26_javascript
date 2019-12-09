const tugas26 = () => {
  var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  for (i = 0; i < deret.length; i++) {
    if (isFinite(deret)) {
      console.log("Angka", deret[i], "Infinity");
    } else {
      console.log("Angka", deret[i], "NOT Infinity");
    }
  }
}

tugas26();