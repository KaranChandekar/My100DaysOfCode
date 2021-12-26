// BMI Calculator
function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}
bmiCalculator(45, 5.2)


// Leap year Calculator
function isLeap(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400) {
          return "This is a leap year"
        } else {
          return "This is not a leap year"
        }
      } else {
        return "This is a leap year"
      }
    } else {
      return "This is not a leap year"
    }
  }

  isLeap(2019)


  // Array 
  let guestList = ["Karan", "Vikrant", "Amit", "Amol", "Manish"]
  var guestName = prompt("Please enter your name!")
  if (guestList.includes(guestName)) {
    alert("Welcome!")
  } else {
    alert("Sorry! may be next time")
  }