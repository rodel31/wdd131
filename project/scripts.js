// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // Track page visits using localStorage
  const visitCounterKey = "visitCount";
  const countElement = document.getElementById("visit-count");

  if (countElement) {
    let count = localStorage.getItem(visitCounterKey);
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem(visitCounterKey, count);
    countElement.textContent = `You have visited this site ${count} time${count > 1 ? "s" : ""}.`;
  }

  // Example dynamic content injection
  const attractions = [
    { name: "Mt. Pinatubo Crater Lake", desc: "A stunning natural wonder you can hike to." },
    { name: "Monasterio de Tarlac", desc: "A peaceful religious site atop Mt. Resurrection." },
    { name: "Aquino Center Museum", desc: "Discover the legacy of Benigno and Cory Aquino." }
  ];

  const attractionsContainer = document.getElementById("attractions-list");
  if (attractionsContainer) {
    attractions.forEach((spot) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${spot.name}</h3>
        <p>${spot.desc}</p>
      `;
      attractionsContainer.appendChild(card);
    });
  }
});
