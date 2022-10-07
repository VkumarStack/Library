let myLibrary = [];

function Book(author, title, pages, read)
{
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}


const btn = document.querySelectorAll("form button");
btn.forEach((button) => {
    button.addEventListener('submit', function click(event) {
        let elm = document.createElement("p");
elm.textContent = "PLACEHOLDER";

document.querySelector(".library").appendChild(elm);
    });
});


