## I have used the help of AI to create that calculator as I had experienced numeral errors, such as not correct calculation, unable to calculate return on the inputs.
const tradeForm = document.querySelector('#trade-form');
const result = document.querySelector('#result');
const currency = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});

tradeForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Calculate on this page without reloading it.

  const buyPrice = Number(document.querySelector('#buy-price').value);
  const sellPrice = Number(document.querySelector('#sell-price').value);
  const quantity = Number(document.querySelector('#quantity').value);

  // Native HTML validation handles most cases; this also checks the numbers.
  if (!tradeForm.checkValidity() || !Number.isFinite(buyPrice) ||
      !Number.isFinite(sellPrice) || !Number.isInteger(quantity) ||
      buyPrice <= 0 || sellPrice < 0 || quantity < 1) {
    result.className = 'result';
    result.textContent = 'Enter valid prices and a whole number of shares.';
    return;
  }

  const cost = buyPrice * quantity;
  const proceeds = sellPrice * quantity;
  const profitLoss = proceeds - cost;
  const percentage = (profitLoss / cost) * 100;
  const outcome = profitLoss > 0 ? 'Profit' : profitLoss < 0 ? 'Loss' : 'Break-even';

  result.className = 'result';
  if (profitLoss > 0) result.classList.add('profit');
  if (profitLoss < 0) result.classList.add('loss');

  // textContent updates the DOM safely; the live region announces the result.
  result.textContent = `${outcome}: ${currency.format(Math.abs(profitLoss))} ` +
    `(${percentage.toFixed(2)}%). Purchase cost: ${currency.format(cost)}. ` +
    `Sale value: ${currency.format(proceeds)}. Before fees and taxes.`;
});
