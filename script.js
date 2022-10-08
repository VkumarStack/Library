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
    button.addEventListener('click', function click(event) {
        let inputs = document.querySelectorAll('input');
        let form = document.querySelector('form');
        let info = {};
        let invalid = false;
        inputs.forEach((input) => {
            if (input.matches(':invalid')) {
                invalid = true;
                return;
            }
            let name = input.getAttribute('name');
            if (name === 'read')
                info['read'] = input.checked;
            else
                info[input.getAttribute('name')] = input.value;
        })
        if (!invalid)
        {
            myLibrary.push(new Book(info['author'], info['title'], info['pages'], info['read']));
            let card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute("data-index", myLibrary.length - 1);
            
            let author = document.createElement('p');
            author.innerText = myLibrary[myLibrary.length-1].author;

            let title = document.createElement('h1');
            title.innerText = myLibrary[myLibrary.length-1].title;

            let pages = document.createElement('p');
            pages.innerText = myLibrary[myLibrary.length-1].pages + " Pages";

            if (info['read'])
                card.classList.add('read');
            
            card.appendChild(author);
            card.appendChild(title);
            card.appendChild(pages);

            document.querySelector('.library').appendChild(card);
            card.addEventListener('click', () => {
                card.classList.toggle('read');
                myLibrary[Number(card.getAttribute('data-index'))].toggleRead();
            })
        }
        form.reset();
    });
});


