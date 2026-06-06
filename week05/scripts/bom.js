const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// Get saved chapters or create an empty array
let chaptersArray = getChapterList() || [];

// Display saved chapters when page loads
chaptersArray.forEach((chapter) => displayList(chapter));

buttonElement.addEventListener("click", function () {
    if (inputElement.value !== "") {

        displayList(inputElement.value);

        chaptersArray.push(inputElement.value);

        setChapterList();

        inputElement.value = "";
    }

    inputElement.focus();
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = item;
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function () {
        listElement.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });

    li.appendChild(deleteBtn);
    listElement.appendChild(li);
}

function setChapterList() {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    chaptersArray = chaptersArray.filter(
        (item) => item !== chapter
    );

    setChapterList();
}