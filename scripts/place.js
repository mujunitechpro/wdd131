
const temperature = 20; // °C
const windSpeed = 5;    // km/h

function calculateWindChill(temp, speed) {
    return (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

function displayWindChill() {
    const windChillElement = document.querySelector(".wind-chill-value");

    let result = "N/A";

    
    if (temperature <= 10 && windSpeed > 4.8) {
        result = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    }

    windChillElement.textContent = result;
}

function setFooterDate() {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("lastModified").textContent =
        `${year} | Last Modified: ${lastModified}`;
}

document.addEventListener("DOMContentLoaded", () => {
    displayWindChill();
    setFooterDate();
});