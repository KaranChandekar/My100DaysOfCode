// BMI Calculator
// function bmiCalculator(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     return "Your BMI is " + bmi + ", so you are underweight.";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "Your BMI is " + bmi + ", so you have a normal weight.";
//   } else {
//     return "Your BMI is " + bmi + ", so you are overweight.";
//   }
// }
// bmiCalculator(45, 5.2)

// Leap year Calculator
// function isLeap(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400) {
//           return "This is a leap year"
//         } else {
//           return "This is not a leap year"
//         }
//       } else {
//         return "This is a leap year"
//       }
//     } else {
//       return "This is not a leap year"
//     }
//   }
//   isLeap(2019)


// Array
// let guestList = ["Karan", "Vikrant", "Amit", "Amol", "Manish"]
// var guestName = prompt("Please enter your name!")
// if (guestList.includes(guestName)) {
//   alert("Welcome!")
// } else {
//   alert("Sorry! may be next time")
// }

// FizzBuzz using JavaScript
// var output = []
// var count = 1

// function fizzBuzz() {
//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("FizzBuzz")
//   } else if (count % 3 === 0) {
//     output.push("Fizz")
//   } else if (count % 5 === 0) {
//     output.push("Buzz")
//   } else {
//     output.push(count)
//   }
//   count++
//   console.log(output)
// }

// Who's buying luch? Code challenge
// function whosPaying(names) {
//   var numberOfPeople = names.length
//   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople)
//   var randomPerson = names[randomPersonPosition]

//   return randomPerson + " is going to buy lunch today!"
//   }

// While Loop
// function beer() {
//   var bottlesOfBeer = 100
//   while (bottlesOfBeer >= 1) {
//     console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer.")
//     bottlesOfBeer--
//     console.log("Take one down and pass it around, " + bottlesOfBeer + " bottles of beer on the wall.")
//     if (bottlesOfBeer === 0) {
//       console.log("NO more bottles of beer on the wall, no more bottles of beer.")
//       console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
//     }
//   }
// }

// For loop
// FizzBuzz using For loop
var output = [];

function fizzBuzz() {
  for (let count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    console.log(output);
  }
}
