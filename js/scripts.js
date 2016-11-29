  var addInput = document.querySelector('#add-input');
  var subtractInput = document.querySelector('#subtract-input');
  var divideInput = document.querySelector('#divide-input');
  var multiplyInput = document.querySelector('#multiply-input');
  var resultBox = document.querySelector('#result-box');

  var resetButton = document.querySelector('#reset-button');

  var addSlider = document.querySelector('#addSlider');
  var subtractSlider = document.querySelector('#subtractSlider');
  var divideSlider = document.querySelector('#divideSlider');
  var multiplySlider = document.querySelector('#multiplySlider');

  var result = 0;
  var addNumber = 0;
  var subtractNumber = 0;
  var divideNumber = 1;
  var multiplyNumber = 1;

  function updateAdd(input){
    addInput.value = input;
    addNumber = parseInt(input);
    updateResultBox(addNumber, subtractNumber, divideNumber, multiplyNumber);
  }

  function updateSubtract(input){
    subtractInput.value = input;
    subtractNumber = parseInt(input);
    updateResultBox(addNumber, subtractNumber, divideNumber, multiplyNumber);
  }

  function updateDivide(input){
    divideInput.value = input;
    divideNumber = parseFloat(input);
    updateResultBox(addNumber, subtractNumber, divideNumber, multiplyNumber)
  }

  function updateMultiply(input){
    multiplyInput.value = input;
    multiplyNumber = parseInt(input);
    updateResultBox(addNumber, subtractNumber, divideNumber, multiplyNumber)
  }

  function updateResultBox(addNumber, subtractNumber, divideNumber, multiplyNumber){
    result = ((0 + addNumber - subtractNumber)/divideNumber) * multiplyNumber;
    resultBox.value = result;
  }

  function clearInputs(input1, input2, input3, input4){
    Array.prototype.slice.call(arguments).forEach(function(el){
      el.value = '';
    })
  }

  function reset(){
    clearInputs(addInput, subtractInput, multiplyInput, divideInput);
    clearInputs(addSlider, subtractSlider, multiplySlider, divideSlider);
    resultBox.value = 0;
  }

  resetButton.addEventListener('click', function(evt){
    reset();
  })

  resultBox.value = 0;


