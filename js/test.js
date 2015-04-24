


var eventHandler = {

  audio:  document.querySelector("#audio-test audio"),

  handleEvent: function pv_handleEvent(evt) {
    switch (evt.type) {
    case 'durationchange':
    case 'timeupdate':
      document.getElementById("duration").textContent =
        'Duration: ' + this.audio.duration;
      break;
    }
  }
};

var audiofile = "01 Cluster One.mp3";

var button = document.querySelector("#load-button");

eventHandler.audio.addEventListener('durationchange', eventHandler);
eventHandler.audio.addEventListener('timeupdate', eventHandler);

button.onclick = function() {
  var url = new URL(audiofile, window.location);
  // Reset src before we set a new source to the audio element
  this.audio.removeAttribute('src');
  this.audio.load();
  // Add mozAudioChannelType to the player
  this.audio.mozAudioChannelType = 'content';
  this.audio.src = url;
  this.audio.load();

  this.audio.play();
  this.audio.onloadeddata = function(evt) { URL.revokeObjectURL(url); };
}.bind(eventHandler);
