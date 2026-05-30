const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Birmingham Alabama",
        location: "Alabama, United States",
        dedicated: "2000, September, 3",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-alabama-temple/birmingham-alabama-temple-21774-main.jpg"
    },
    {
        templeName: "Antananarivo Madagascar",
        location: "Antehiroka, Madagascar",
        dedicated: "2025, March, 15",
        area: 10000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/antananarivo-madagascar-temple/antananarivo-madagascar-temple-57245-main.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Tempelstrasse, Switzerland",
        dedicated: "1995, September, 11",
        area: 35546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    }
];

const container = document.querySelector("#temple-container");

function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("figure");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        const location = document.createElement("p");
        location.textContent = temple.location;

        const dedicated = document.createElement("p");
        dedicated.textContent = temple.dedicated;

        const area = document.createElement("p");
        area.textContent = `${temple.area} sq ft`;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        container.appendChild(card);
    });
}

// Showby default
displayTemples(temples);

//nav
const homeBtn = document.querySelector("#home");
const oldBtn = document.querySelector("#old");
const newBtn = document.querySelector("#new");
const largeBtn = document.querySelector("#large");
const smallBtn = document.querySelector("#small");

//filter
homeBtn.addEventListener("click", () => {
    displayTemples(temples);
});

oldBtn.addEventListener("click", () => {
    const filtered = temples.filter(
        (t) => new Date(t.dedicated).getFullYear() < 1900
    );
    displayTemples(filtered);
});

newBtn.addEventListener("click", () => {
    const filtered = temples.filter(
        (t) => new Date(t.dedicated).getFullYear() > 2000
    );
    displayTemples(filtered);
});

largeBtn.addEventListener("click", () => {
    const filtered = temples.filter((t) => t.area > 90000);
    displayTemples(filtered);
});

smallBtn.addEventListener("click", () => {
    const filtered = temples.filter((t) => t.area < 10000);
    displayTemples(filtered);
});


document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector(
    "#lastModified"
).textContent = `Last Modified: ${document.lastModified}`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});