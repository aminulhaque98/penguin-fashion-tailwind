console.log('i love js')

const getElement = document.getElementById('change-title');

const getElementValueString = getElement.innerText;
console.log(getElementValueString);

document.getElementById('btn-Buy').addEventListener('click', function () {

    const getElement = document.getElementById('change-title');

    const getElementValueString = getElement.innerText;
    getElement.innerText = 'I AM PENGUIN'

})