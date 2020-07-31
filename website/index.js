const video = document.getElementById("movie");
const playButton = document.getElementById("playButton");
const muteButton = document.getElementById("muteButton");

function MediaPlayer(config) {
  this.media = config.el
}

MediaPlayer.prototype.play = function () {
  if(this.media.paused){
    this.media.play()
  } else {
    this.media.pause()
  }
}

MediaPlayer.prototype.mute = function () {
  this.media.muted = !this.media.muted;
}

const player = new MediaPlayer({ el: video });
playButton.onclick = () => player.play();
muteButton.onclick = () => player.mute();
