console.log("Dice roll using the DOM!");

const randomNumber = Math.floor(Math.random() * 6) + 1;

const display = document.querySelector("#display");
display.textContent = randomNumber;

const img = document.querySelector("img.coin");

/*
//        MODALITATEA 1 DE IMPLEMENTARE: daca o valoarea random = 1 afiseasa side 1; daca nu (:) afiseaza side 2
*/
const coinValue = Math.random() > 0.5 ? "coin-side-1.jpg" : "coin-side-2.jpg";
img.src = `img/${coinValue}`;

//
//
//

/*
//        MODALITATEA 2 DE IMPLEMENTARE: care merge perfect findca am doua valori (1 si 2) si doua fete (side-1 si side-2)
const coinValue = Number(Math.random() > 0.5) + 1;
img.src = `img/coin-side-${coinValue}.jpg`;
*/
