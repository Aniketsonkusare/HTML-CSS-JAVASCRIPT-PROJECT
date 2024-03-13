let main = document.querySelector('#main')
let cursor = document.querySelector('.cursor')

main.addEventListener('mousemove',function (params) {
    cursor.style.left = params.x + "px"
    cursor.style.top = params.y + "px"
})