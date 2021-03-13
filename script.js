const output = document.querySelector('.output');
const form = document.querySelector('form');
const maxAmount = document.querySelector('.max-amount');
const minAmount = document.querySelector('.min-amount');

let numbers = [];

reset = () => {
  numbers = [];
  output.innerHTML = ``;
}

find = (e) => {
  e.preventDefault();
  reset();

  let min = minAmount.value;
  let max = maxAmount.value;

  for(let x = min; x <= max; x++) {
    numbers.push(
      {
        number: x,
        dividings: [],
      },
    );
  }

  numbers.forEach((number) => {
    for(let x = 0; x <= number.number; x++) {
      if(number.number % x == 0) {
        number.dividings.push(x);
      }

      if(number.dividings[1] == number.number) {
        let li = document.createElement('li');
        li.innerHTML = `<span class="number">${number.number}</span>`;

        output.appendChild(li);
      }
    }
  });

}

form.addEventListener('submit', find);

// search

const searcher = document.querySelector('.search');

search = () => {
  word = searcher.value;

  let $numbers = document.querySelectorAll('li');
  Array.from($numbers).forEach((number) => {
    if(number.textContent.indexOf(word) != -1) {
      number.style.display = 'block';
      number.style.listStyleType = "decimal";
    } else {
      number.style.display = 'none';
      number.style.listStyleType = "decimal";
    }
  })
}

searcher.addEventListener('keyup', search);
