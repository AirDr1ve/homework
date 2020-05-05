let video = document.querySelector('.work_video');
let progress = document.querySelector('.blue-juice');
let btn = document.getElementById('play-pause');


function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function () {
    togglePlayPause();
}
progress.onclick = videoRewind;


video.addEventListener('timeupdate', function () {
    let progressPosition = video.currentTime / video.duration;
    progress.style.width = progressPosition * 100 + "%";
});

video.ontimeupdate = progressUpdate;

function progressUpdate(){
    let d = video.duration;
    let c = video.currentTime;
    progressUpdate.value = (100 * c) / d;
};





function videoRewind(){
    let w = this.offsetWidth;
    console.log (w);
}
