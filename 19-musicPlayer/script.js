const data = [
    {name: "It's You", artist: "Ali Gatie", song: "./songs/Ali Gatie - It_s You (Lyrics)(MP3_160K).mp3", image: "https://i.scdn.co/image/ab67616d0000b27350a744f0ef5c3e260d9de720"},
    {name: "Positions", artist: "Ariana Grande", song: "./songs/Ariana%20Grande%20-%20positions%20(Lyrics)(MP3_160K).mp3", image: "https://static.independent.co.uk/2020/10/30/11/ariana-grande.jpg"},
    {name: "Black Catcher", artist: "Vickeblanka", song: "./songs/[YumeOST]_Vickeblanka_-_Black_Catcher.mp3", image: "https://i.scdn.co/image/ab67616d0000b273717c5c68f43a9fdca541281b"},
    {name: "Hurts So Good", artist: "Astrid S", song: "./songs/Astrid S - Hurts So Good(MP3_160K).mp3", image: "https://i.scdn.co/image/ab67616d0000b27331e760ae51990e7d9a32593a"},
    {name: "Dheere Dheere", artist: "Honey Singh", song: "./songs/Dheere Dheere.mp3", image: "https://upload.wikimedia.org/wikipedia/en/7/76/Dheere_Dheere_Single_Cover.jpg"},
    {name: "Bad Liar", artist: "Imagine_Dragons", song: "./songs/Imagine_Dragons_-_Bad_Liar.mp3", image: "https://upload.wikimedia.org/wikipedia/en/6/66/Imagine_Dragons_Bad_Liar.jpg"},
    {name: "Stereo Hearts", artist: "Gym Class Heroes", song: "./songs/Gym_Class_Heroes_Stereo_Hearts_ft_Adam_Levine_OFFICIAL_VIDEOMP3.mp3", image: "https://i.scdn.co/image/ab67616d0000b27318b8088fe0c3dbf78398b55a"},
    {name: "I Like Me Better", artist: "Lauv", song: "./songs/Lauv - I Like Me Better (Lyrics)(MP3_160K)_1.mp3", image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Lauv_-_I_Like_Me_Better.png"},
]

var audio = new Audio()
const allSongs = document.querySelector("#all-songs")
const playBtn = document.querySelector("#play")
const backwardBtn = document.querySelector("#backward")
const forwardBtn = document.querySelector("#forward")
let selectedSong = 0
let currentTime = 0
let poster = ''
let flag = 1

const loadSongs = () => {
    let clutter = ""
    data.forEach((obj, index) => {
        clutter += `<div id="song-card" data-index=${index} >
        <div id="part1">
            <img src="${obj.image}" alt="">
            <div id="details">
                <h2>${obj.name}</h2>
                <h3>${obj.artist}</h3>
            </div>
        </div>
        <div id="part2">
            <h4>3:36</h4>
        </div>
    </div>`
    })
    audio.src = data[selectedSong].song
    poster = data[selectedSong].image
    document.querySelector('#left').style.backgroundImage = `url(${poster})`
    allSongs.innerHTML = clutter
}

const playSong = (index) => {
    playBtn.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    selectedSong = index
    loadSongs()
    audio.currentTime = currentTime
    audio.play()
}

allSongs.addEventListener("click", (dets) => {
    playSong(dets.target.dataset.index)
})

playBtn.addEventListener("click", () => {
    if(flag == 0){
        playBtn.innerHTML = `<i class="ri-pause-fill"></i>`
        loadSongs()
        audio.currentTime = currentTime
        audio.play()
        flag = 1
    } else {
        playBtn.innerHTML = `<i class="ri-play-fill"></i>`
        loadSongs()
        audio.pause()
        currentTime = audio.currentTime
        flag = 0
    }
})

forwardBtn.addEventListener("click", () => {
    selectedSong++
    if(selectedSong > data.length - 1){
        selectedSong = 0
    }
    loadSongs()
    audio.play()
})

backwardBtn.addEventListener("click", () => {
    selectedSong--
    if(selectedSong < 0){
        selectedSong = data.length - 1
    }
    loadSongs()
    audio.play()
})

loadSongs()