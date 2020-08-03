
// Generate Random value .
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//  Event Listener to generate button and creat random value .
document.getElementById("generate-pin").addEventListener("click", function () {
  var randomValue = Math.round(randomNumber(1000, 9999)); 
  document.getElementById("display-pin").value = randomValue;
  document.getElementById("notify-match").style.display = "none";
  document.getElementById("notify-dont-match").style.display = "none";
});

// Event Listener to all number button .
const len = document.querySelectorAll(".btn-control").length;
for (var i = 0; i < len; i++)
  document.querySelectorAll(".btn-control")[i].addEventListener("click", function () {
    const number = this.innerHTML; 
    const previousValue = document.getElementById("number-input").value;
    document.getElementById("number-input").value = previousValue + number;
  });

//set clear button .
document.getElementById("clear").addEventListener("click", function () {
  var innerValue = document.getElementById("number-input").value;
  document.getElementById("number-input").value = '';
});

// set Pin , Generate Pin to number button
document.getElementById("submit").addEventListener("click", function () {
  var submitChance = parseInt(document.getElementById("submit-chance").innerHTML);
  const randNumber = document.getElementById("display-pin").value;
  const inputedNumber = document.getElementById("number-input").value;

  if (randNumber.length == 0 || inputedNumber.length == 0) {
    alert("Doesn't Empty any Field");
  }
  else if (randNumber == inputedNumber) { 
    document.getElementById("notify-dont-match").style.display = "none";
    document.getElementById("notify-match").style.display = "block";
    document.getElementById("submit-chance").innerHTML = 3;
    document.getElementById("display-pin").value = '';
    document.getElementById("number-input").value = '';
  }
  else {
    document.getElementById("notify-dont-match").style.display = "block";
    submitChance--; 
    document.getElementById("submit-chance").innerHTML = submitChance;

    if (submitChance == 0) { 
      var submitButton = document.getElementById("submit");
      var pinGenaretorButton = document.getElementById("generate-pin");
      pinGenaretorButton.disabled = true;
      pinGenaretorButton.style.background = "red";
      pinGenaretorButton.style.transition = ".5s";

      submitButton.disabled = true;
      submitButton.style.background = "red";
      submitButton.style.transition = ".5s";
      document.getElementById("display-pin").value = '';
      document.getElementById("notify-dont-match").style.display = "none";
    }

  }
  document.getElementById("number-input").value = ''; 
});

// set backspace button " < " .
document.getElementById("backspace").addEventListener("click", function () {
  var presentValue = document.getElementById("number-input").value;
  if (presentValue != '') {
    presentValue = presentValue.slice(0, -1);
    document.getElementById("number-input").value = presentValue;
  }
});