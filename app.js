const dynamicNumber = 50; 
const userNumber = parseFloat(prompt('Enter a number:'));

if (userNumber > dynamicNumber) {
  console.log('Your number is greater than the dynamic number.');
} else if (userNumber < dynamicNumber) {
  console.log('Your number is less than the dynamic number.');
} else {
  console.log('Your number is equal to the dynamic number.');
}
