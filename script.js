const search = document.querySelector(".search-button");

let angka = [];
search.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const angka = inputKeyword.value;
  const arrAngka = angka.split(" ");
  const sort = document.querySelector(".sort");

  const sorting = arrAngka.sort((a, b) => a - b);
  console.log(sorting);
  sort.innerHTML = `<li>${sorting.join(",")}</li>`;
  // const angkaFix = inputKeyword.value;
  // angka.push(angkaFix);

  // angka.sort((a, b) => a - b);
  // sort.innerHTML = `<ul>
  //       <li>${angka.join(" ")}</li>
  // </ul>`;
});
