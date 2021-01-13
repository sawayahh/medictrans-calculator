// var ambulatoryInput = document.getElementById('#ambulatory-textbox').value;
// console.log(ambulatoryInput);

document.getElementById('ambulatory-button').addEventListener('click', function() {

  setFocusToTextBox();

  var tripMiles = document.getElementById('ambulatory-textbox').value;
  var billingOutput = document.getElementById('ambulatory-output');
  var bill;

  if (tripMiles <= 3) {
    bill = 9.80;
  } else if (tripMiles >= 4 && tripMiles <= 6) {
    bill = 12.25;
  } else if (tripMiles >= 7 && tripMiles <= 10) {
    bill = 15.85;
  } else if (tripMiles > 10) {
    bill = (tripMiles - 10) * 1.30 + 15.85;
    bill = bill.toFixed(2);
  }




  billingOutput.innerHTML = "$" + bill;
  billingOutput.classList.add('output-effect');
});


document.getElementById('wheelchair-button').addEventListener('click', function() {
  var tripMiles = document.getElementById('wheelchair-textbox').value;
  var billingOutput = document.getElementById('wheelchair-output');
  var bill;

  if (tripMiles <= 3) {
    bill = 17.95;
  } else if (tripMiles >= 4 && tripMiles <= 6) {
    bill = 21.95;
  } else if (tripMiles >= 7 && tripMiles <= 10) {
    bill = 24.95;
  } else if (tripMiles > 10) {
    bill = (tripMiles - 10) * 1.55 + 24.95;
    bill = bill.toFixed(2);
  }




  billingOutput.innerHTML = "$" + bill;
  billingOutput.classList.add('output-effect');
});


document.getElementById('stretcher-button').addEventListener('click', function() {
  var tripMiles = document.getElementById('stretcher-textbox').value;
  var billingOutput = document.getElementById('stretcher-output');
  var bill;

  if (tripMiles <= 3) {
    bill = 150;
  } else if (tripMiles > 3) {
    bill = (tripMiles - 3) * 2.5 + 150;
    bill = bill.toFixed(2);
  }




  billingOutput.innerHTML = "$" + bill;
  billingOutput.classList.add('output-effect');
});



function setFocusToTextBox() {
  var currentTextBox = document.getElementById('ambulatory-textbox')
  currentTextBox.focus();
  currentTextBox.scrollIntoView();
}
