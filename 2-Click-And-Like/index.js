let cont = document.querySelector('.container')
let like = document.querySelector('i')

document.addEventListener('dblclick',function () {
    like.style.transform = 'translate(-50%,-50%) scale(1)'
    like.style.opacity = 0.8

    setTimeout(() => {
        like.style.opacity = 0
    }, 1000);

    setTimeout(() => {
        like.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 2000);
})