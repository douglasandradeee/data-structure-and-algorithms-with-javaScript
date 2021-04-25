var obj = new Object();

var obj2 = {};

obj3 = {
    name: {
        first: 'Douglas',
        last: 'Andrade',
    },
    address: 'South America'
};

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('NodeJs', '30', 'isbn');
console.log(book.title);
book.title = 'Algorithms JS';
console.log(book.title);
console.log(book.pages);
console.log(book.isbn);
console.log(book);

// Declaraçåo de um metódo.
Book.prototype.printTitle = function () {
    console.log(this.title);
};
book.printTitle();

// Declaração de função diretamente na definição da classe
function Book(title, pages, isbn) {
    isbn = '1675618648918';
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}
book.printIsbn();