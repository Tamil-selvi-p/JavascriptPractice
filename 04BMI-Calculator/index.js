const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const result = document.querySelector(".weight-condition");



btn.addEventListener("click", () => {
    const heightMeter = height.value / 100;
    const bmiCal = Number.parseFloat(weight.value / (heightMeter * heightMeter));  
    console.log(bmiCal);  

    bmiResult.value = bmiCal;

    if(bmiCal <= 18.5)
        result.innerText = "Under Weight";
    else if(bmiCal > 18.5 && bmiCal <= 24.9)
       result.innerText = "Normal";
    else if(bmiCal > 24.9 && bmiCal <= 29.9)
        result.innerText =  "Over Weight";
    else
        result.innerText =  "Obese";

});
