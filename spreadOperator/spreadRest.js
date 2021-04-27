// apply() - transforma arrays em parametros.

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}
// a reticencias(...), é o operador de espelhamento;
let params = [3, 4, 5];
console.log(sum(...params));
console.log(sum(params));

// O código acima porém escrito em ES5, usando o aplly
console.log(sum.apply(undefined, params));

// - rest parameter nos permite representar um número indefinido de argumentos como array;
/* - se o último argumento nomeado de uma função tiver o prefixo ..., ele irá se tornar um array
em que os elementos de 0 (inclusive) até args.lenght(exclusivo), são disponibilizados pelos argumentos atuais e passados à função */
function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

function restParameterFunction(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log('aqui', restParameterFunction(1, 2, 'hello', true, 7));


// ## Uma pequena revisão sobre funções ##;
var square = function (numero) { return numero * numero };
var x = square(4);
console.log(x);

function map(f, a) {
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    result = console.log(result);
    return result;
}
map(function (x) { return x * x * x }, [0, 1, 2, 5, 10]);
console.log(square(5));

// Calcula o numero fatorial
function fatorial(n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * fatorial(n - 1));
}
console.log('O fatorial de 3 é: ', fatorial(3));
console.log('O fatorial de 4 é: ', fatorial(4));
console.log('O fatorial de 5 é: ', fatorial(5));
console.log('O fatorial de 9 é: ', fatorial(9));
console.log('O fatorial de 10 é: ', fatorial(10));

// - comportamento de uma pilha, contagem crescente e decrescente de um dado número;
function foo(i) {
    if (i < 0)
        return;
    console.log('begin:' + i);
    foo(i - 1);
    console.log('end:' + i);
}
console.log(foo(3));

// Função aninhada ou clousure; são funções que chamam outras funções de forma aninhada dentro delas mesmas;

/* Uma closure deve preservar os argumentos 
e variáveis em todos os escopos que ela referencia. */

//Uma closure é criada quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
console.log(addSquares(2, 3));
console.log(addSquares(5, 3));
console.log(addSquares(8, 13));

//Uma closure é criada quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa

var pet = function (nome) {          // A função externa define uma variável "nome"
    var getNome = function () {
        return nome;                // A função interna tem acesso à variável "nome"  da função externa
    }
    return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
},
    myPet = pet("Vivie");
console.log(myPet());

var criarPet = function (nome) {
    var sex;

    return {
        setNome: function (newNome) {
            nome = newNome;
        },

        getNome: function () {
            return nome;
        },

        getSex: function () {
            return sex;
        },

        setSex: function (newSex) {
            if (typeof newSex == "string" && (newSex.toLowerCase() == "macho" || newSex.toLowerCase() == "fêmea")) {
                sex = newSex;
            }
        }
    }
}

var pet = criarPet("Chulinho");
console.log(pet.getNome());

pet.setNome("Negão");
pet.setSex("macho");
console.log(pet.getSex());
console.log(pet.getNome());





