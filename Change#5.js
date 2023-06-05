/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

const { log } = require("console");

var arr = ['tamires', 35, null, {a: 1}, function(){}]
console.log('quest1==', arr);
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function quest2 (arg) {
    return arg
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
quest2(arr)[1]
console.log('quest2==',quest2(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function ques3 (arr2, index ){
    return arr2[index]

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arr3 = ['tamires', 52.4, 30, [1, 2, 'escobar'], {b: 2}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(ques3(arr3, 0)); //tamires
console.log(ques3(arr3, 1));
console.log(ques3(arr3, 2));
console.log(ques3(arr3, 3));
console.log(ques3(arr3, 4));
//imprimindo no navegaor a questao 3 passando como argumento o arr3 e a posicao 0



/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book (bookName){
    var allBooks = {
        'o livro 1 - esse é o primeiro livro' : {
            quantidadedePaginas: 20,
            autor: 'fulano A',
            editora: 'editora A'
        },
        'livro 2 - esse é o segundo livro': {
            quantidadedePaginas: 30,
            autor: 'fulano B',
            editora: 'editora B'
        }, 
        'livro 3 - esse é o terceiro livro': {
            quantidadedePaginas: 40,
            autor: 'fulano C',
            editora: 'editora C'
        }
    }
       
        return  !bookName ? allBooks :  allBooks[bookName]

    }
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log('bookk sem param==', book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var bookName = 'o livro 1'
console.log('o livro', `${bookName} tem ${book(bookName).quantidadedePaginas} paginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('bokk2==', `o autor do livro ${bookName} é ${book(bookName).autor}. `);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}.`);