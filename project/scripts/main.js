const destinations = [
    {
        id: 1,
        name: "Zanzibar Coast",
        country: "Tanzania",
        rating: 4.8,
        image: "images/zanzibar.jpg"
    },
    {
        id: 2,
        name: "Maldives Islands",
        country: "Maldives",
        rating: 4.9,
        image: "images/maldives.jpg"
    },
    {
        id: 3,
        name: "Cape Town Coast",
        country: "South Africa",
        rating: 4.7,
        image: "images/capetown.jpg"
    }
];

// THEME (LOCAL STORAGE)
function setupTheme() {
    const btn = document.querySelector("#themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const mode = document.body.classList.contains("dark")
            ? "dark"
            : "light";

        localStorage.setItem("theme", mode);
    });
}


function renderDestinations(list) {
    const container = document.querySelector("#destinations");

    if (!container) return;

    container.innerHTML = "";

    list.forEach((d) => {
        container.innerHTML += `
      <div class="card">
        <h3>${d.name}</h3>
        <p>${d.country}</p>
        <p>Rating: ${d.rating}</p>
        <button onclick="saveFavorite('${d.name}')">⭐ Save</button>
      </div>
    `;
    });
}

function showFeatured() {
    const container = document.querySelector("#featured");
    if (!container) return;

    const random = destinations[Math.floor(Math.random() * destinations.length)];

    container.innerHTML = `
    <div class="card">
      <h3>${random.name}</h3>
      <p>${random.country}</p>
      <p>Rating: ${random.rating}</p>
    </div>
  `;
}

function setupSearch() {
    const input = document.querySelector("#searchInput");

    if (!input) return;

    input.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        const filtered = destinations.filter((d) =>
            d.name.toLowerCase().includes(value) ||
            d.country.toLowerCase().includes(value)
        );

        renderDestinations(filtered);
    });
}


function setupRandomButton() {
    const btn = document.querySelector("#randomBtn");

    if (!btn) return;

    btn.addEventListener("click", () => {
        showFeatured();
    });
}


function saveFavorite(name) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(name)) {
        favorites.push(name);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(`Saved ${name} to favorites!`);
}

function showWelcome() {
    const message = document.createElement("p");

    const visit = localStorage.getItem("visited");

    if (visit) {
        message.textContent = `Welcome back to Coastal Travel Guide 🌊`;
    } else {
        message.textContent = `First visit! Enjoy exploring coastal destinations 🌴`;
        localStorage.setItem("visited", "true");
    }

    document.body.prepend(message);
}

renderDestinations(destinations);
showFeatured();
setupSearch();
setupRandomButton();
setupTheme();
showWelcome();