const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

incrementEl.addEventListener('click', () => {
    const counterText = counterEl.innerText;
    let count = parseInt(counterText);
    count++;
    counterEl.innerText = count.toString();
});
decrementEl.addEventListener('click', () => {
    const counterText = counterEl.innerText;
    let count = parseInt(counterText);
    count--;
    counterEl.innerText = count.toString();
});