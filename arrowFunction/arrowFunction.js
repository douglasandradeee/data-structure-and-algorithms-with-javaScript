// Função normal;
var cicleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log('Retorno com a função normal: ', cicleAreaES5(2));

//Função Seta;
const circleArea = r => {
    const PI = 3.14;
    var area = PI * r * r;
    return area;
}
console.log('Retorno com a função seta: ', circleArea(2));

// A prncipal diferença é que podemos omitir a palavara reservada FUNCTION usando a seta =>, a seta substituirá a palavara reservada.
// a mesma tbm respresenta uma função;

// - Se a função tiver apenas uma instrução podemos simplificar ainda mais omitindo a palavra reservada return;
const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));

// Caso a função não receba nenhuma argumento, usamos parenteses vazios.
const hello = () => console.log('hello!');
hello();

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}
console.log(sum(10, 2))


