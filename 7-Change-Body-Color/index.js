const buttons = document.querySelectorAll('.color')
const body = document.querySelector('body')

buttons.forEach((ele) => {
    console.log(ele);
    ele.addEventListener('click',(e) => {
        console.log(e.target);
        if (e.target.id  === "gray") {
            body.style.backgroundColor = "gray"
        }
        else if (e.target.id === "red") {
            body.style.backgroundColor = "red"
        }
        else if (e.target.id === "yellow") {
            body.style.backgroundColor = "yellow"
        }
        else if (e.target.id === "aqua"){
            body.style.backgroundColor = "aqua"
        }
    })

})