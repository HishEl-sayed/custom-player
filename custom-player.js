var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

var firstScriptTag = document.querySelector('script');
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player; 
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            loop: 1,
            rel: 0,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            vq: 'hd1080'
        },
        videoId: 'Ga7dKKle774',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });         
}

function onPlayerReady(e) {
    e.target.playVideo();
    player.mute();    
}

function onPlayerStateChange(e) {
    if (e.data === YT.PlayerState.ENDED) {
        player.playVideo(); 
    }
}

function stopVideo() {
    player.stopVideo();
}