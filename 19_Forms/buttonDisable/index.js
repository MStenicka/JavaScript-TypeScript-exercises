// Get the radio buttons and buttons
const petRadios = document.querySelectorAll('input[name="pet"]');
const catFactsRadios = document.querySelectorAll('input[name="cat-facts"]');
const catButton = document.getElementById('cat-button');
const signUpButton = document.getElementById('sign-up-button');

// Add event listeners to the radio buttons
petRadios.forEach((radio) => radio.addEventListener('click', handlePetChange));
catFactsRadios.forEach((radio) =>
  radio.addEventListener('click', handleCatFactsChange),
);

// Function to handle changes to the pet radio buttons
function handlePetChange() {
  // If the selected pet is a dog or cat, enable the sign up button
  if (this.value === 'dog' || this.value === 'cat') {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
}

function handleCatFactsChange() {
  // If the selected pet is a dog or cat, enable the sign up button
  if (this.value === 'yes') {
    catButton.disabled = false;
  } else {
    catButton.disabled = true;
  }
}

signUpButton.addEventListener('click', () => {
  if (this.petRadios === 'cat' && this.catFactsRadios === 'yes') {
    alert("Thank you, you've successfully signed up for cat facts");
  }
  console.log(this.petRadios.value);
});
