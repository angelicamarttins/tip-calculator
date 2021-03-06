// Getting elements from the page
const bill = document.querySelector('#bill');
const custom = document.querySelector('#custom');
const buttonpc = document.querySelectorAll('.button--grid');
const people = document.querySelector('#num-people');
const checkZero = document.querySelector('.check--zero');
const reset = document.querySelector('.button__reset');

// New variables
let newBill = 0;
let percentage;
let buttonTips = 0;
let numPeople = 0;
let tipAmount = 0;
let total = 0;

// Event listener
bill.addEventListener('input', getBill);
buttonpc.forEach(element => element.addEventListener('click', getPercentage));
custom.addEventListener('input', getCustom);
people.addEventListener('input', getPeople);
reset.addEventListener('click', resetBtn);

// Functions 

// Verifing if user entries in Number of People and Custom are interger numbers
function intNums(num) {
    const numRgx = /^[0-9]*$/gm;
    return num.match(numRgx);
};

// Setting the values of input 
function getBill() {
    newBill = parseFloat(bill.value);
    
    percentage = newBill * 0.15;

    amount();
};

// Getting the custom percentage
function getCustom() {
    if (!intNums(custom.value)) {
        custom.value = custom.value.substring(0, custom.value.length - 1);
    };

    buttonpc.forEach(e => e.classList.remove('btn-current'));

    percentage = newBill * custom.value / 100;
    
    if (custom.value != '') amount();
}

// Getting the percentages of tips
function getPercentage(event) {
    let percRgx = /\d*[^%]/g;

    buttonpc.forEach(e => {
        e.classList.remove('btn-current');
    
        if (event.target.innerHTML === e.innerHTML) {
            e.classList.add('btn-current');
            percentage = newBill * parseFloat(e.innerHTML.match(percRgx)) / 100;
        }
    });

    custom.value = "";

    amount();
}

// Getting the number of people
function getPeople() {
    if (people.value <= 0) {
        people.classList.remove('input__icon:focus');
        people.classList.add('show--check--zero--border');
        checkZero.classList.add('show--check--zero');

        setTimeout(function(){
            checkZero.classList.remove('show--check--zero');
            people.classList.remove('show--check--zero--border');
        }, 1200);

        people.value = "";
    };

    people.classList.add('input__icon:focus');

    if (!intNums(people.value)) {
        people.value = people.value.substring(0, people.value.length - 1);
    };

    numPeople = parseInt(people.value);

    if (numPeople >= 1) amount();
}

// Getting and calculating the values
function amount() {
    if (numPeople >= 1) {
        tipAmount = percentage / numPeople;
        total = (newBill + percentage) / numPeople;

        res__tip.innerHTML = `$${tipAmount.toFixed(2)}`;
        res__total.innerHTML = `$${total.toFixed(2)}`;

        console.log(percentage)
    }
}

// Reset button
function resetBtn() {
    bill.value = "";
    custom.value = "";
    people.value = "";

    res__tip.innerHTML = `$0.00`;
    res__total.innerHTML = `$0.00`;

    buttonpc.forEach(e => e.classList.remove('btn-current'));
    buttonpc[2].classList.add('btn-current');
};
