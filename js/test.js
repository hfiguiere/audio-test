


var eventHandler = {

  audio:  document.querySelector("#audio-test audio"),

  handleEvent: function eh_handleEvent(evt) {
    switch (evt.type) {
    case 'durationchange':
    case 'timeupdate':
      document.getElementById("duration").textContent =
        'Duration: ' + this.audio.duration;
      break;
    }
  },

  clickHandler: function (audiofile) {
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
  }
};

var audiofile1 = "01 Cluster One.mp3";
var audiofile2 = "02 What Do You Want From Me.mp3"

var button1 = document.querySelector("#load-button1");
var button2 = document.querySelector("#load-button2");

eventHandler.audio.addEventListener('durationchange', eventHandler);
eventHandler.audio.addEventListener('timeupdate', eventHandler);

button1.onclick = eventHandler.clickHandler.bind(eventHandler, audiofile1);
button2.onclick = eventHandler.clickHandler.bind(eventHandler, audiofile2);
