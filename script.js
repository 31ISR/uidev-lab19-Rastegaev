const stats = document.querySelector(".stats")
const musicsContainer = document.querySelector(".tracks-list")
const nameartist = []

async function fetchmusic() {
    const music = await fetch("https://kitek.ktkv.dev/songs.json")
    const json = await music.json()
    let durationf = 0

    for (let i = 0; i < json.length; i++) {
        const musicContainer = document.createElement("li")
        musicContainer.classList.add("track-item")

        const tracknumber = document.createElement("div")
        tracknumber.classList.add("track-number")
        tracknumber.textContent = i + 1

        const trackmain = document.createElement("div")
        trackmain.classList.add("track-main")

        const imgg = document.createElement("img")
        imgg.classList.add("album-art")
        imgg.src = json[i].track.album.images[1].url

        const infotrack = document.createElement("div")
        infotrack.classList.add("track-info")

        const name = document.createElement("div")
        name.classList.add("track-name")
        name.textContent = json[i].track.name
        // for(let i=0; i<json.length; i++){
        //     nameartist.push(json.track.album.artists.name)
        // }
        const nameartist = document.createElement("div")
        nameartist.classList.add("track-artist")
        // console.log(json[i].track.album.artists);

        nameartist.textContent = json[i].track.album.artists.map((el) => {
            return el.name
        }).join(", ")

        const namealb = document.createElement("div")
        namealb.classList.add("track-album")
        namealb.textContent = json[i].track.album.name

        const trackmeta = document.createElement("div")
        trackmeta.classList.add("track-meta")

        const trackduration = document.createElement("div")
        trackduration.classList.add("duration")
        const ms = json[i].track.duration_ms
        durationf += json[i].track.duration_ms
        const sc = Math.floor((ms / 1000) % 60);
        const min = Math.floor((ms / 1000 / 60) % 60);
        const formattedTime = [
            min.toString().padStart(2, "0"),
            sc.toString().padStart(2, "0")
        ].join(":");
        trackduration.textContent = formattedTime

        const popular = document.createElement("div")
        popular.classList.add("popularity")
        popular.textContent = `♪ ${json[i].track.popularity}`




        musicsContainer.appendChild(musicContainer)
        musicContainer.appendChild(tracknumber)
        musicContainer.appendChild(trackmain)
        trackmain.appendChild(imgg)
        trackmain.appendChild(infotrack)
        infotrack.appendChild(name)
        infotrack.appendChild(nameartist)
        infotrack.appendChild(namealb)
        musicContainer.appendChild(trackmeta)
        trackmeta.appendChild(trackduration)
        trackmeta.appendChild(popular)

    }
    const tracks = document.createElement("div")
    tracks.classList.add("total-duration")
    tracks.textContent = "Треков: " + json.length
    stats.appendChild(tracks)

    const totalduration = document.createElement("div")
    totalduration.classList.add("total-duration")
    const minute = Math.floor((durationf / 1000 / 60) % 60);
    const hour = Math.floor((durationf / 1000 / 60 / 60) );
    const formatteddurattion = [
        hour.toString().padStart(2, "0"),"ч",
        minute.toString().padStart(2, "0"),"мин",
    ].join(" ");
    totalduration.textContent = "Общая длительность: " + formatteddurattion
    stats.appendChild(totalduration)

}
fetchmusic()


// .total-tracks {
//     font-weight: 600;
//     color: rgba(255, 255, 255, 0.9);
// }

// .total-duration 