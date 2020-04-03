// Capture DOM elements
// currency one
const currencyEl_one = document.getElementById('currency-one');

// amount one
const amountEl_one = document.getElementById('amount-one');

// amount two
const amountEl_two = document.getElementById('amount-two');

// currency two
const currencyEl_two = document.getElementById('currency-two');

// rate
const rateEl = document.getElementById('rate');

// swap
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      //   console.log(data.rates);
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      console.log(rate);

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
  //   fetch('items.json')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  console.log(currency_one, currency_two);
  //   console.log(data);
  //   document.body.innerHTML = data[0].text;
  // });
}

// Event Listeners
// currency one - change event, call calculate
currencyEl_one.addEventListener('change', calculate);
// amount one - change event, call calculate
amountEl_one.addEventListener('input', calculate);
// currency two - change event, call calculate
currencyEl_two.addEventListener('change', calculate);

// amount two - change event, call calculate
amountEl_two.addEventListener('input', calculate);

// swap - click, call function
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
