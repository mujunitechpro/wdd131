
const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor"
    },
    {
        id: "fc-2050",
        name: "Power Laces"
    },
    {
        id: "fs-1987",
        name: "Time Circuits"
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor"
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer"
    }
];


const productSelect = document.querySelector("#productName");

if (productSelect) {

    products.forEach(product => {

        const option = document.createElement("option");

        option.textContent = product.name;

        option.value = product.id;

        productSelect.appendChild(option);
    });
}

const year = document.querySelector("#year");
const modified = document.querySelector("#modified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (modified) {
    modified.textContent = `Last Modified: ${new Date().toLocaleString()}`;
}

const reviewCount = document.querySelector("#reviewCount");

if (reviewCount) {

    let count = Number(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);

    reviewCount.textContent = count;
}