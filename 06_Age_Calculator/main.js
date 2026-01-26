const dob = document.getElementById("date");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    const birthdayYear = new Date(dob.value);

    if(dob.value === "") {
        alert("Enter Valid Date of Birth");
    } else {
        const age = getAge(birthdayYear);
        result.innerText = `Youe are ${age} years old`;
    }

});

getAge = (year) => {

    const currentDate = new Date();

    const diffenceYear = currentDate.getFullYear() - year.getFullYear();

    const differenceMonth = currentDate.getMonth() - year.getMonth();

    let age = diffenceYear;

    if(differenceMonth < 0 || (differenceMonth === 0 && currentDate.getDate() < year.getDate())){
        age--;
    }

    return age;
}
