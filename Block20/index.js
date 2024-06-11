// TODO: this file! :)

const form = document.querySelector('form');



form.addEventListener('submit', (event) => {
    event.preventDefault()

    const addNumber = document.querySelector('.addNumber');
    const input = document.querySelector('input')

    console.log(input);
});

function odds(input) {
    let oddNumbers = input.filter( % 2 === 1);
    return oddNumbers

}

function evens(input) {
    let evenNumbers = input.filter( % 2 === 0);
    return evenNumbers
};