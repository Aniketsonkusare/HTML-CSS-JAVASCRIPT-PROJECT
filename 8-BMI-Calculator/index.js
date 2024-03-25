const form = document.querySelector('form')
const weightGuide = document.querySelector('.weight-guide')

form.addEventListener('click',(e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `<h1>Please Give a Valid Height ${height}</h1>`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `<h1>Please Give a Valid Weight ${weight}</h1>`
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<h1>Your BMI is ${bmi}</h1>`

        if (bmi < 18.6) {
            weightGuide.innerHTML = `<p>Under Weight = Less than 18.6</p>`
        }
        else if (bmi > 18.6 && bmi <= 24.9) {
            weightGuide.innerHTML = `<p>Normal Range = 18.6 and 24.9</p>`
        }
        else if (bmi > 24.9) {
            weightGuide.innerHTML = `<p>Overweight = greater Than 24.9</p>`
        }
    }
})