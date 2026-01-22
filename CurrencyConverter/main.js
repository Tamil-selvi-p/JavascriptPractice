const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const convertBtn = document.querySelector(".convert");

let rate;

updateRecord = () => {
    // console.log("called");

    fetch(`https://v6.exchangerate-api.com/v6/c55774e40dc33ad4d77eb048/latest/${currencyFirstEl.value}`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        rate = data.conversion_rates[currencySecondEl.value];
        // console.log(rate);
        // exchangeRateEl.innerText = `${worthFirstEl.value + " " +currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
        // worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);

        worthSecondEl.value = rate.toFixed(2);
    });
}

updateRecord();

currencyFirstEl.addEventListener("change", updateRecord);
worthFirstEl.addEventListener("change", updateRecord);
currencySecondEl.addEventListener("change", updateRecord);
convertBtn.addEventListener("click", () => {
    // console.log(rate);
    // console.log(currencyFirstEl.value);
    const finalRate = (worthFirstEl.value * rate).toFixed(2);
    // console.log(finalRate);
    exchangeRateEl.innerText = `${worthFirstEl.value + " " + currencyFirstEl.value} * ${worthSecondEl.value + " " + currencySecondEl.value} => ${finalRate}`;
});