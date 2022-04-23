{
    const calculateResult = (plnAmount, chosenCurrency) => {
        
        switch (chosenCurrency) {
            case "CAD":
                chosenCurrency = document.querySelector(".js-cadRate");
                return plnAmount / +chosenCurrency.value;
            case "USD":
                chosenCurrency = document.querySelector(".js-usdRate");
                return plnAmount / +chosenCurrency.value;
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

        const plnAmount = +plnAmountElement.value;
        let chosenCurrency = chosenCurrencyElement.value;

        const result = calculateResult(plnAmount, chosenCurrency);

        onResultText(plnAmount, result, chosenCurrency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}

