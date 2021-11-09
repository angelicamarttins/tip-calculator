// Getting elements from the page
const bill = document.getElementById('bill');
const custom = document.getElementById('custom');
const buttonpc = document.querySelectorAll('.button__pc');
const people = document.getElementById('people');
const reset = document.getElementById('reset');

// New variables
let newBill = 0;
let percentage = 0;
let buttonTips = 0;
let numPeople = 0;
let tipAmount = 0;
let total = 0;

// Event listener
bill.addEventListener('input', getBill);
buttonpc.forEach(element => element.addEventListener('click', getPercentage));
custom.addEventListener('input', getCustom);
people.addEventListener('input', amount);

// Functions 

// Verifing if user entries in Number of People and Custom are interger numbers

function intNums(num) {
    let numRgx =/^\d[^\.]$/gm;
    return num.match(numRgx);
}
// Setting the values of input 
function getBill() {
    newBill = parseFloat(bill.value);
};

function getCustom() {
    if (!intNums(custom.value)) {console.log('bla', custom.value)}
    percentage = newBill * custom.value / 100;
}

// Getting the percentages of tips
function getPercentage(event) {
    let percRgx = /\d*[^%]/g;

    buttonpc.forEach(e => {
    if (event.target.innerHTML == e.innerHTML) 
        percentage = newBill * parseFloat(e.innerHTML.match(percRgx)) / 100;
    });

    custom.value = "";
}

// Getting and calculating the values
function amount() {
    console.log(percentage)
    numPeople = people.value
    tipAmount = percentage / numPeople;
    total = (newBill + percentage) / numPeople;
    res__tip.innerHTML = `$${tipAmount.toFixed(2)}`;
    res__total.innerHTML = `$${total.toFixed(2)}`;
}

// Reset button
function resetBtn() {
    bill.value = "";
    custom.value = "";
    people.value = "";
    res__tip.innerHTML = `$0.00`;
    res__total.innerHTML = `$0.00`;
}

// Ajustar regex no intNums para pegar casos que não sejam de inteiros. Acho que, então, o regex deve buscar apenas números e desprezar ponto ou vírgula. Assim, se for falso, o número inserido será real. 
// Depois disso, pegar apenas os números iniciais e com ele fazer o cálculo. Talvez usando Math.ceil.
// Depois fazer a verificação se o número de pessoas está com número negativo ou real.