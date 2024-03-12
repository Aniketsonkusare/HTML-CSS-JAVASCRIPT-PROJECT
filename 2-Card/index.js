const isStatus = document.querySelector('h5')
const addFriend = document.querySelector('#Add')
const removeFriend = document.querySelector('#remove')

addFriend.addEventListener('click',function () {
    isStatus.innerHTML = "HD Wallpaper"
    isStatus.style.color = "green" 
})

removeFriend.addEventListener('click',function () {
    isStatus.innerHTML = "Beutiful Nature"
    isStatus.style.color = "red"
})