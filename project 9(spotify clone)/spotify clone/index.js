console.log("Welcome to Spotify");

// initialize the variable
let songindex = 0;
let audioelement = new Audio("songs/1.mp3")
let masterplay = document.getElementById('masterplay')
let myprogessbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let mastersongname = document.getElementById('mastersongname')
let songsitems = Array.from(document.getElementsByClassName('songitem'))


let songs = [
    { songsName: "warriyo - mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songsName: "Salam-ea-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songsName: "Salam-es-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songsName: "Salam-ed-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songsName: "Salam-ef-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songsName: "Salam-eg-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songsName: "Salam-eh-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songsName: "Salam-ek-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songsName: "Salam-ev-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songsName: "Salam-ec-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songsitems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songsName;
});

// audioelement.play()

// handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play()
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
    }
    else {
        audioelement.pause()
        masterplay.classList.add('fa-circle-play')
        masterplay.classList.remove('fa-circle-pause')
        gif.style.opacity = 0
    }
})

// listen to events
audioelement.addEventListener('timeupdate', () => {   // timeupdate is a event
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    // console.log(progress);
    myprogessbar.value = progress;
})

myprogessbar.addEventListener('change', () => {
    audioelement.currentTime = myprogessbar.value * audioelement.duration / 100;
})

const makeallplays = () => {
    // e.target.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target)
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioelement.src = `songs/${songindex + 1}.mp3`
        mastersongname.innerText = songs[songindex].songsName
        audioelement.currentTime = 0
        audioelement.play()
        gif.style.opacity = 1
        masterplay.classList.add('fa-circle-pause')
        masterplay.classList.remove('fa-circle-play')
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0
    }
    else {
        songindex += 1
    }
    audioelement.src = `songs/${songindex + 1}.mp3`
    mastersongname.innerText = songs[songindex].songsName
    audioelement.currentTime = 0
    audioelement.play()
    masterplay.classList.add('fa-circle-pause')
    masterplay.classList.remove('fa-circle-play')
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0
    }
    else {
        songindex -= 1
    }
    audioelement.src = `songs/${songindex + 1}.mp3`
    mastersongname.innerText = songs[songindex].songsName
    audioelement.currentTime = 0
    audioelement.play()
    masterplay.classList.add('fa-circle-pause')
    masterplay.classList.remove('fa-circle-play')
})