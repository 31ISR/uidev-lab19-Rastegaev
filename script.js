const musicsContainer = document.querySelector(".tracks-list")

async function fetchmusic() {
    const music = await fetch("https://kitek.ktkv.dev/songs.json")
    const json = await music.json()
    
    for(let i = 0; i<json.length; i++){
        const musicContainer = document.createElement("li")
        musicContainer.classList.add("track-item")

        const tracknumber = document.createElement("div")
        tracknumber.classList.add("track-number")
        tracknumber.textContent = i

        const trackmain = document.createElement("div")
        trackmain.classList.add("track-main")

        const imgg = document.createElement("img")
        imgg.classList.add("album-art")
        imgg.src = json[i].track.album.images[1].url

        const infotrack = document.createElement("div")
        infotrack.classList.add("track-info")
    
        const name = document.createElement("div")
        name.classList.add("track-name")
        name.textContent = json[i].track.album.name

        musicsContainer.appendChild(musicContainer)
        musicContainer.appendChild(trackmain)
        musicContainer.appendChild(tracknumber)
        trackmain.appendChild(imgg)
        trackmain.appendChild(infotrack)
        infotrack.appendChild(name)
    }
    
}
fetchmusic()