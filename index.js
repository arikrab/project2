var mode;
var pageCount=0;

function byArtist() {
    mode="artist";
    console.log(mode);
    btnPressed();
}

function byAlbum() {
    mode="album";
    console.log(mode);
    btnPressed();
}
function byTrack() {
    mode="track";
    console.log(mode);
    btnPressed();
}

function btnPressed() {

    let artist = document.getElementById("artistBtn");
    let album = document.getElementById("albumBtn");
    let track = document.getElementById("tracknameBtn");
    let search = document.getElementById("searchText");

    switch (mode) {
        case "artist":
            if (artist.classList.contains("unclickedBtn")){
                artist.classList.remove("unclickedBtn");
                artist.classList.add("clickedBtn")
            }
            if (album.classList.contains("clickedBtn")){
                album.classList.remove("clickedBtn");
                album.classList.add("unclickedBtn");
            }
            if (track.classList.contains("clickedBtn")){
                track.classList.remove("clickedBtn");
                track.classList.add("unclickedBtn");
            }
            activateSearch(search);
            break;
        case  "album":

            if (artist.classList.contains("clickedBtn")){
                artist.classList.remove("clickedBtn");
                artist.classList.add("unclickedBtn")
            }
            if (album.classList.contains("unclickedBtn")){
                album.classList.remove("unclickedBtn");
                album.classList.add("clickedBtn");
                activateSearch(search);
            }
            if (track.classList.contains("clickedBtn")){
                track.classList.remove("clickedBtn");
                track.classList.add("unclickedBtn");
            }

            break;
        case "track":
            if (artist.classList.contains("clickedBtn")){
                artist.classList.remove("clickedBtn");
                artist.classList.add("unclickedBtn")
            }
            if (album.classList.contains("clickedBtn")){
                album.classList.remove("clickedBtn");
                album.classList.add("unclickedBtn");
            }
            if (track.classList.contains("unclickedBtn")){
                track.classList.remove("unclickedBtn");
                track.classList.add("clickedBtn");
            }
            activateSearch(search);
            break;
        default:

    }

    function activateSearch(element) {
        element.style.visibility = 'visible';
    }

}

function newSearch() {
    let type = mode;
    let search = document.getElementById("searchInput").value;
    pageCount=0;
    let page = pageCount;
    const URL=`http://localhost:3000/search?type=${type}&searchText=${search}&page=${page}`;
    pageCount++;
    console.log(URL);

    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(JSON.stringify(data)))


}

function continueSearch() {
        let type = mode;
        let search = document.getElementById("searchInput").value;
        let page = pageCount;
        const URL=`http://localhost:3000/search?type=${type}&searchText=${search}&page=${page}`;
        pageCount++;
        console.log(URL);

        fetch(URL)
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)))


}
