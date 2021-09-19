let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".usd");
let audElement = document.querySelector(".aud");
let formElement = document.querySelector(".js-form");
let calculatedElement = document.querySelector(".js-calculate");
let chosenCurrency = document.querySelector(".js-chosenCurrency");
let changeCurrency = document.querySelector(".changeCurrency");

changeCurrency.addEventListener("input", () => {

    switch (changeCurrency.value) {
        case "usd":
            chosenCurrency.value = 3.92;
        case "aud":
            chosenCurrency.value = 2.85;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let pln = parseFloat(plnElement.value);
    let chosen = parseFloat(chosenCurrency.value);
    let result;
    result = pln * chosen;

    calculatedElement.innerText = result.toFixed(2);
});