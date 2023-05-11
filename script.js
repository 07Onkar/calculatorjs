document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
let resultInput = document.getElementById("result");

function addNumber(number) {
  resultInput.value += number;
}

function addOperator(operator) {
  resultInput.value += operator;
}

function calcResult() {
  let expression = resultInput.value;
  let numbers = expression.split(/[-+*/]/).map(Number);
  let operator = expression.split(/[0-9]+/).filter(Boolean);

  let sum = numbers[0];
  for(var i=0 ; i<operator.length ; i++){
    const operators = operator[i];
    const number = numbers[i+1];

    if(operators === '+'){
        sum += number;
    }
    else if(operators === '-'){
        sum -= number;
    }
    else if(operators === '*'){
        sum *= number;
    }
    else if(operators === '/'){
        sum /= number;
    }
  }
  resultInput.value = sum;
}
function addDecimal(decimal) {
  if(!resultInput.value.includes(decimal)){
    resultInput.value += decimal;
  }
}

function changeSign() {
  let result=0;
  result = -result;
  resultInput.value = result;
}

function clearResult() {
    resultInput.value = '';
}
