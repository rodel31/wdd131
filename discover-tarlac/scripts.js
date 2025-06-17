// Sample tourist attractions array
const attractions = [
  {
    name: "Monasterio de Tarlac",
    img: "../images/monasterio.jpg",
    description: "A famous pilgrimage site with a stunning view."
  },
  {
    name: "Mt. Damas",
    img: "../images/mtdamas.jpg",
    description: "A great hiking destination for adventurers."
  },
  {
    name: "Aquino Center Museum",
    img: "../images/aquino.jpg",
    description: "Dedicated to Ninoy and Cory Aquino's legacy."
  }
];

// Populate attractions gallery
function displayAttractions() {
  const container = document.getElementById("attractions-list");
  if (!container) return;
  container.innerHTML = attractions.map(attr => `
    <div class="card">
      <img src="${attr.img}" alt="${attr.name}" loading="lazy">
      <h3>${attr.name}</h3>
      <p>${attr.description}</p>
    </div>`).join("");
}

// Feedback form submission handling
function handleForm() {
  const form = document.getElementById("cultureForm");
  if (!form) return;

  const counterDisplay = document.getElementById("submissionCount");
  const message = document.getElementById("formMessage");
  let count = parseInt(localStorage.getItem("feedbackCount")) || 0;
  counterDisplay.textContent = count;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("favorite");
    if (input.value.trim() !== "") {
      count++;
      localStorage.setItem("feedbackCount", count);
      counterDisplay.textContent = count;
      message.textContent = `Thank you for sharing: "${input.value}"`;
      input.value = "";
    }
  });
}

// Track visits on attractions.html
function trackVisit() {
  const visitSpot = document.getElementById("visit-count");
  if (!visitSpot) return;
  let count = parseInt(localStorage.getItem("visitAttractions")) || 0;
  count++;
  localStorage.setItem("visitAttractions", count);
  visitSpot.textContent = `You've visited this page ${count} time(s).`;
}

// Init all dynamic functions
window.addEventListener("DOMContentLoaded", () => {
  displayAttractions();
  handleForm();
  trackVisit();
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }
});
