let movie = 'Lord of Rings';
//var movie = 'Batman vs Superman';
function starWarsFan() {
    const movie = 'Star Wars';
    return movie;
}
function marvelFan() {
    movie = 'avengers';
    return movie;
}
function billzzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: ' + phrase);

    if (isFan) {
        let phrase = 'inital text';
        phrase = 'For the Horder';
        console.log('Inside if: ' + phrase);
    }
    phrase = 'For Alliance!';
    console.log('After if: ' + phrase);
}
console.log(movie);
console.log(starWarsFan());
console.log(marvelFan());
console.log(movie);
billzzardFan();