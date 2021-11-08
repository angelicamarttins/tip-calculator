let bill = document.getElementById('bill');
let custom = document.getElementById('custom');
let newBill = 0;
let percentage = 0;
let result = 0;

bill.addEventListener('input', setBill);
custom.addEventListener('input', getCustom);

function setBill() {
    newBill = bill.value;
};

function getCustom() {
    result = newBill * (custom.value / 100);
    res__tip.innerHTML = `$${result}`
};
