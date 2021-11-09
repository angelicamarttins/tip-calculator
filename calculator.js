// Getting elements from the page
const bill = document.getElementById('bill');
const custom = document.getElementById('custom');
const people = document.getElementById('people');

// New variables
let newBill = 0;
let percentage = 0;
let numPeople = 0;
let tipAmount = 0;
let total = 0;

// Event listener
bill.addEventListener('input', setBill);
custom.addEventListener('input', getCustom);
people.addEventListener('input', amount);

// Functions 
function setBill() {
   return newBill = parseFloat(bill.value);
};

function getCustom() {
    percentage = newBill * (custom.value / 100);
    return percentage;
};

function amount() {
    numPeople = people.value
    tipAmount = percentage / numPeople;
    total = (newBill + percentage) / numPeople;
    res__tip.innerHTML = `$${tipAmount.toFixed(2)}`;
    res__total.innerHTML = `$${total.toFixed(2)}`;
}