// Footer Date Information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static Values
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

// Wind Chill Calculation Function
function calculateWindChill(t, s) {
  return Math.round(
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)
  );
}

// Display Wind Chill
let windChillValue = "N/A";

if (temp <= 50 && speed > 3) {
  windChillValue = `${calculateWindChill(temp, speed)}°F`;
}

document.getElementById("windchill").textContent = windChillValue;
