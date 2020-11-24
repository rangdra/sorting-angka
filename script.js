const search = document.querySelector(".search-button");
const tambah = document.querySelector(".tambah");

search.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const sort = document.querySelector(".hasil-sorting");
  const hasilTambah = document.querySelector(".hasil-tambah");
  const banyakData = document.querySelector(".banyak-data");
  const nilaiBesar = document.querySelector(".nilai-besar");
  const nilaiKecil = document.querySelector(".nilai-kecil");
  const range = document.querySelector(".range");

  const angka = inputKeyword.value;
  const arrAngka = angka.split(" ");

  const sorting = arrAngka.sort((a, b) => a - b);

  const number = arrAngka.map((x) => parseInt(x));
  const hasil = number.reduce((acc, curr) => acc + curr);

  sort.innerHTML = sorting.join(",");
  hasilTambah.innerHTML = hasil;
  banyakData.innerHTML = sorting.length;
  nilaiKecil.innerHTML = sorting[0];
  nilaiBesar.innerHTML = sorting.slice(-1)[0];
  range.innerHTML = sorting.slice(-1)[0] - sorting[0];
});

// const grouped = sorting.reduce((r, v, i, a) => {
//     if (v === a[i - 1]) {
//       r[r.length - 1].push(v);
//     } else {
//       r.push(v === a[i + 1] ? [v] : v);
//     }
//     return r;
//   }, []);

const searchLog = document.querySelector(".search-log");
searchLog.addEventListener("click", function () {
  const inputLog = document.querySelector(".input-log");
  const banyakKelas = document.querySelector(".banyak-kelas");

  const angka = parseFloat(inputLog.value);
  banyakKelas.innerHTML = `${hitungBanyakKelas(
    angka
  )} dibulatkan jadi ${Math.round(hitungBanyakKelas(angka))}`;
});

function hitungBanyakKelas(val) {
  const log = Math.log(val) / Math.LN10;
  let k = 1 + 3.3 * log;
  return k;
}
