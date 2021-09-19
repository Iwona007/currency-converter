let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".usd");
let audElement = document.querySelector(".aud");
let formElement = document.querySelector(".js-form");

let calculatedElement = document.querySelector(".js-calculate");
let chosenCurrency = document.querySelector(".js-chosenCurrency");

let changeCurrency = document.querySelector(".changeCurrency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = parseFloat(plnElement.value);
    let chosen = parseFloat(chosenCurrency.value);
    let result;
    result = pln * chosen;

    calculatedElement.innerText = result.toFixed(2);
    console.log(`Przeliczono, wynik to: ${result}`)
});

changeCurrency.addEventListener("input", () => {

    switch (changeCurrency.value) {
        case "usd":
            chosenCurrency.value = 3.92;
            console.log("Wybrano usd")
        case "aud":
            chosenCurrency.value = 2.85;
            console.log("Wybrano aud")
    }
});

// changeCurrency.addEventListener("click", e => {
//     if (changeCurrency.classList.contains("usd")) {
//         console.log("Wybrano walutę: usd")
//     } else {
//         console.log("Wybrano walutę: aud")
//     }

// })
