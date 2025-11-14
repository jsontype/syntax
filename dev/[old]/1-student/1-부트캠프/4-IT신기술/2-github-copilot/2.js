function login() {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  if (username === "admin" && password === "admin") {
    alert("Login successful")
  } else {
    alert("Login failed")
  }
}

function calculateBMI() {
  const weight = document.getElementById("weight").value
  const height = document.getElementById("height").value
  const bmi = weight / (height * height)
  alert("Your BMI is " + bmi)
}

function calculateBMR() {
  const weight = document.getElementById("weight").value
  const height = document.getElementById("height").value
  const age = document.getElementById("age").value
  const bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age
  alert("Your BMR is " + bmr)
}

function calculateCalories() {
  const bmr = document.getElementById("bmr").value
  const activityLevel = document.getElementById("activityLevel").value
  const calories = bmr * activityLevel
  alert("You need " + calories + " calories per day")
}

function calculate() {
  calculateBMI()
  calculateBMR()
  calculateCalories()
}
