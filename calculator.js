// Getting elements from the page
const bill = document.getElementById('bill');
const custom = document.getElementById('custom');
const buttonpc = document.getElementsByClassName('button__pc');
const people = document.getElementById('people');
const reset = document.getElementById('reset');

// New variables
let newBill = 0;
let percentage = 0;
let numPeople = 0;
let tipAmount = 0;
let total = 0;

// Event listener
bill.addEventListener('input', getBillCustom);
custom.addEventListener('input', getBillCustom);
people.addEventListener('input', amount);

// Functions 

function getBillCustom() {
    newBill = parseFloat(bill.value);
    percentage = newBill * (custom.value / 100);
};

function amount() {
    numPeople = people.value
    tipAmount = percentage / numPeople;
    total = (newBill + percentage) / numPeople;
    res__tip.innerHTML = `$${tipAmount.toFixed(2)}`;
    res__total.innerHTML = `$${total.toFixed(2)}`;
}

function resetBtn() {
    bill.value = "";
    custom.value = "";
    people.value = "";
    res__tip.innerHTML = `$0.00`;
    res__total.innerHTML = `$0.00`;
}