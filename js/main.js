let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");


elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;
    inputValue = inputValue * 1

    if (inputValue === 0) {
        elResult.textContent = `${inputValue}`;
    }  else if (inputValue % 3 === 0 && inputValue % 5 === 0)  {
        elResult.textContent = "FizzBuzz";
    } else if (inputValue % 3 === 0) {
        elResult.textContent = "Fizz";
    } else if (inputValue % 5 === 0) {
        elResult.textContent = "Buzz";
    } else {
        elResult.textContent = `${inputValue}`;
    }

})