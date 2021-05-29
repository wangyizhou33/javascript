const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secsE1 = document.getElementById('secs');

const newYears = "1 Aug 2021"

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalInSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalInSeconds / 3600 / 24);
    const hours = Math.floor(totalInSeconds / 3600) % 24;
    const mins = Math.floor(totalInSeconds / 60) % 60;
    const secs = Math.floor(totalInSeconds % 60);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secsE1.innerHTML = formatTime(secs);

    console.log(days, hours, mins, secs);
}

function formatTime(time) {
    return (time < 10) ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000); // update every second