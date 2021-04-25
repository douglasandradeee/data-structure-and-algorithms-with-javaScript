console.log('Douglas é verdadeiro? ', 'Douglas' ? true : false);
console.log('Douglas é igual é verdadeiro? ', 'Douglas' == true);
// retorna false pq, primeiro o boleano é convertido para number (1) e depois a string pra number se tornando um NaN, ficando: NaN == 1 que é false. 
console.log('Douglas é igual é verdadeiro? ', 'Douglas' == false);
// retorna false pq, primeiro o boleano é convertido para number (1) e depois a string pra number se tornando um NaN, ficando: NaN == 0 que é false.

console.log('Douglas' === true);
console.log('Douglas' === 'Douglas');
var person1 = { name: 'Douglas' };
var person2 = { name: 'John' };
console.log(person1 === person2);
