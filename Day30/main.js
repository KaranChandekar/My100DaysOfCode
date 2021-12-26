// BMI Calculator

function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underweight.");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a normal weight.");
  } else {
    console.log("Your BMI is " + bmi + ", so you are overweight.");
  }
}
bmiCalculator(45, 5.2)
