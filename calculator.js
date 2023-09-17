window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
// Add a DOMContentLoaded event listener to initialize the calculator
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// Function to get the current input values from the UI
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
}

// Function to set default values in the inputs and calculate the initial monthly payment
function setupInitialValues() {
  // Set default values in the inputs (you can customize these)
  document.getElementById("loan-amount").value = "10000";
  document.getElementById("loan-years").value = "5";
  document.getElementById("loan-rate").value = "5";

  // Calculate and display the initial monthly payment
  update();
}

// Function to update the UI with the calculated monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Function to calculate the monthly payment based on input values
function calculateMonthlyPayment(values) {
  const { amount, years, rate } = values;
  const monthlyRate = rate / 12 / 100; // Convert annual rate to monthly and percentage to decimal
  const numberOfPayments = years * 12; // Convert years to months
  const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
  const monthlyPayment = (amount * monthlyRate) / denominator;
  return monthlyPayment.toFixed(2); // Round to two decimal places
}

// Function to update the UI with the calculated monthly payment
function updateMonthly(monthly) {
  const monthlyPaymentElement = document.getElementById("monthly-payment");
  monthlyPaymentElement.textContent = `$${monthly}`;
}
