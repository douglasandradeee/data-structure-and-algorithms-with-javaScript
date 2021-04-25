var num = 3;

if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num)
}

if (num === 3) {
    num--;
    console.log(num)
} else {
    num++;
    console.log(num);
}

// Representação de condicional com operador ternário
var numN = 3;
(numN === 3) ? numN-- + console.log(numN) : numN++ + console.log(numN);

var month = 2;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month == 3) {
    console.log('March');
} else {
    console.log('its not the first three months of the year');
}
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default: console.log('its not the first three months of the year');
}
