
let audioList = [
        { 
            audioCoverPath: "covers/1.jpg",
            audioName: "Tera song...",
            audioPath: "songs/1.mp3"
        },
        { 
            audioCoverPath: "covers/2.jpg",
            audioName: "Mera song...",
            audioPath: "songs/2.mp3"
        },
        { 
            audioCoverPath: "covers/3.jpg",
            audioName: "Sabka song...",
            audioPath: "songs/3.mp3"
        },
        { 
            audioCoverPath: "covers/4.jpg",
            audioName: "Napasand song...",
            audioPath: "songs/4.mp3"
        },
        { 
            audioCoverPath: "covers/5.jpg",
            audioName: "Tera pasand song...",
            audioPath: "songs/5.mp3"
        },
        { 
            audioCoverPath: "covers/6.jpg",
            audioName: "Mera pasand song...",
            audioPath: "songs/6.mp3"
        },
        { 
            audioCoverPath: "covers/7.jpg",
            audioName: "Ye song...",
            audioPath: "songs/7.mp3"
        },
        { 
            audioCoverPath: "covers/8.jpg",
            audioName: "Wo song...",
            audioPath: "songs/8.mp3"
        },
        { 
            audioCoverPath: "covers/9.jpg",
            audioName: "Last song...",
            audioPath: "songs/9.mp3"
        },
    ];

    let id = 0;
    let playingSong = document.getElementById("playing-song");
    playingSong.innerHTML = audioList[id].audioName;


    let songName = document.querySelectorAll(".songs");
    songName.forEach((element, index)=>{
        element.querySelector(".song-name").innerHTML = audioList[index].audioName;
    })



    let audioElement = new Audio();
    audioElement.src = audioList[id].audioPath;
    // audioElement.src = "songs/1.mp3";
    // console.log(audioElement.src);
    
    console.log("Hello", audioElement);
    let currentTime = 0;
    let audioDuration = audioElement.duration;
    let rangeBar = document.getElementById("play-range");
    let range = 0;
    // songPlay(id);
    function myfunction(){
        // console.log(id);
        // function songPlay(id){
            if(audioElement.paused || audioElement.currentTime <= 0){
            // audioElement.src = audioList[id].audioPath;
            audioElement.play();
            playingSong.innerHTML = audioList[id].audioName;
            document.getElementById(id).classList.remove("fa-circle-play");
            document.getElementById(id).classList.add("fa-solid", "fa-play");
            document.getElementById("play-pause-btn").classList.remove("fa-circle-play");
            document.getElementById("play-pause-btn").classList.add("fa-solid", "fa-pause");
            document.getElementById("playing-effect").style.opacity = "1";
        }
        else{
            audioElement.pause();
            document.getElementById(id).classList.remove("fa-solid", "fa-play");
            document.getElementById(id).classList.add("fa-circle-play");
            document.getElementById("play-pause-btn").classList.remove("fa-solid", "fa-pause");
            document.getElementById("play-pause-btn").classList.add("fa-circle-play");
            document.getElementById("playing-effect").style.opacity = "0";
            allPlayBtn();
        }
    }

    audioElement.addEventListener("timeupdate", () =>{
        audioDuration = audioElement.duration;
        currentTime = audioElement.currentTime;
        range = currentTime/audioDuration * 100;
        let ct = (currentTime/60).toFixed(2);
        ct = ct.replace(".", ":");
        let ad = (audioDuration/60).toFixed(2);
        ad = ad.replace(".", ":");
        document.getElementById("play-range").value = range;
        document.getElementById("audio-current-time").innerHTML = ct;
        document.getElementById("audio-duration").innerHTML = ad;
        if(currentTime == audioDuration){
            nextSong();
            console.log(currentTime, audioDuration);
        }
    });

    rangeBar.addEventListener("change", ()=>{
        let  changePlayTime = parseInt(rangeBar.value);
        currentTime = audioDuration * changePlayTime / 100;
        audioElement.currentTime = currentTime;
    });




    let songs = document.querySelectorAll(".song-play-controls");

    function allPlayBtn(){
        songs.forEach((element) => {
            element.querySelector("i").classList.remove("fa-solid","fa-play");
            element.querySelector("i").classList.add("fa-circle-play");
        })
    }

    songs.forEach((element)=>{
        element.querySelector("i").addEventListener("click", function(e){
            console.log(e.target.id);
            allPlayBtn();
            audioElement.currentTime = 0;
            range = 0;
            id = e.target.id;
            audioElement.src = audioList[id].audioPath;
            myfunction();
        });
    });


    function previousSong(){
        console.log(id);
        if(id == 0){
            id = 8;
        }
        else{
            id = id - 1;
        }
        audioElement.currentTime = 0;
        allPlayBtn();
        audioElement.src = audioList[id].audioPath;
        myfunction();
    }


    function nextSong(){
        console.log(id);
        if(id == 8){
            id = 0;
        }
        else{
            id = parseInt(id) + 1;
        }
        // audioElement.currentTime = 0;
        allPlayBtn();
        console.log(id);
        audioElement.src = audioList[id].audioPath;
        myfunction();
    }