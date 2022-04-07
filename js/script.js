{
    const calculateResult = (plnAmount, chosenCurrency, rateCurrency) => {
        switch (chosenCurrency) {
            case chosenCurrency:
                return plnAmount / rateCurrency;
            case chosenCurrency:
                return plnAmount / rateCurrency;
        }
    }

    const onResultText = (plnAmount, result, chosenCurrency) => {
        const calculatedElement = document.querySelector(".js-calculate");
        calculatedElement.innerHTML = `${plnAmount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${chosenCurrency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const plnAmountElement = document.querySelector(".js-plnAmount");
        const chosenCurrencyElement = document.querySelector(".js-chosenCurrency");
        const chosenRateCurrencyElement = document.querySelector(".js-rateCurrency")

        const plnAmount = +plnAmountElement.value;
        const chosenCurrency = chosenCurrencyElement.value;
        const rateCurrency = +chosenRateCurrencyElement.value;

        const result = calculateResult(plnAmount, chosenCurrency, rateCurrency);

        onResultText(plnAmount, result, chosenCurrency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}

