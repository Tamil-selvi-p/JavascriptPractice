const days = document.querySelector(".days");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const seconds = document.querySelector(".seconds");

countDown = () => {
    const targetDate = new Date('2027-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now; // Difference in milliseconds

    const seconds1 = 1000;
    const minutes1 = seconds1 * 60;
    const hours1 = minutes1 * 60;
    const days1 = hours1 * 24;

    const d = Math.floor(difference / days1);
    const h = Math.floor((difference % days1) / hours1);
    const m = Math.floor((difference % hours1) / minutes1);
    const s = Math.floor((difference % minutes1) / seconds1);

    days.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    setTimeout(countDown, 1000);
}

countDown();