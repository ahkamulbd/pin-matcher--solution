//console.log('app.js File');

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        //console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    //console.log('Generate Pin')
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})