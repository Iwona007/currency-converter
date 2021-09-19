let plnElement = document.querySelector(".js-pln");
let usdElement = document.querySelector(".usd");
let audElement = document.querySelector(".aud");
let formElement = document.querySelector(".js-form");
let calculatedElement = document.querySelector(".js-calculate");
let changeCurrency = document.querySelector(".changeCurrency");

let usd = 3.92;
let aud = 2.85;
let result = 0.00;
let pln = parseFloat(plnElement.value);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (changeCurrency.value) {
        case "usd":
            console.log("Wybrano usd")
            result = plnElement.value * usd;
            break;
        case "aud":
            console.log("Wybrano aud")
            result = plnElement.value * aud;
            break;
        default:
            result;
    }
    calculatedElement.innerText = result.toFixed(2);
    console.log(`Przeliczono, wynik to: ${result}`)
});
