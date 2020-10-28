const search = document.querySelector(".search-button");

let angka = [];
search.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const sort = document.querySelector(".sort");
  const angkaFix = inputKeyword.value;
  angka.push(angkaFix);

  angka.sort((a, b) => a - b);
  sort.innerHTML = `<ul>
        <li>${angka.join(" ")}</li>
  </ul>`;
});
