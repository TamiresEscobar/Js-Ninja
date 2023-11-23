(function(){
    /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/


/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Tamires',
    lastname: 'Escobar',
    age: 35
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log(Object.keys(person));


/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push(
    {
         name: 'livro 1',
         pages: 200
    },
    {
        name: 'livro 2',
        pages: 150
    },
    {
        name: 'livro 3',
        pages: 100
    }
)


/*
Mostre no console todos os livros.
*/
console.log(books);


/*
Remova o último livro, e mostre-o no console.
*/
var lastBook = books.pop()
console.log('removendo ultimo elemento', lastBook);

/*
Mostre no console os livros restantes.
*/
console.log('mostrar books atualizado', books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log( books );


/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente: \n' , books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var i = 0; i < books.length; i++){
    for(var prop in books[i]){
        console.log(`${prop}: ${books[i][prop]}`);
    }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['t', 'a', 'm', 'i', 'r', 'e', 's'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log('juntar itens do array', myName.join(''));


/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log('invertendo itens', myName.reverse().join(''));

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log('ordenando em ordem alfabética', myName.sort().join(''));
}())