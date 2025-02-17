let aH1 = document.getElementById("h1");
let aName = prompt("Ismingizni kiriting");

aH1.textContent = `1. Ism: ${aName}`;

let aH2 = document.getElementById("h2");
let aSurname = prompt("Familiyangizni kiriting");

aH2.textContent = `2. Familiya: ${aSurname}`;

let aH3 = document.getElementById("h3");
let anAge = prompt("Yoshingizni kiriting");

aH3.textContent = `3. Yosh: ${anAge}`;

let aH4 = document.getElementById("h4");
let aA = prompt(
  `Ismingiz katta harf yoki kichikligini tanlang
  1. Katta harf yoki
  2. Kichik harf`
);

if (aA === "1") {
  aH4.textContent = `4.Katta harf: ${aName.toUpperCase()}`;
} else if (aA === "2") {
  aH4.textContent = `4.Kichik harf: ${aName.toLowerCase()}`;
} else {
  aH4.textContent = "4.Noto'g'ri tanlov";
}
