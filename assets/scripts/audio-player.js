const AudioPlayer = {
  init: function() {
    document.getElementById('audio-close')
      .addEventListener('click', () => this.hidePlayer());
  },

  showPlayer: function() {
    const player = document.getElementById('audio-player');
    if(! player.classList.contains('display-flex')) {
      player.classList.remove('display-none');
      player.classList.add('display-flex');
    }
  },

  hidePlayer: function() {
    this.pause();

    const player = document.getElementById('audio-player');
    if(! player.classList.contains('display-none')) {
      player.classList.remove('display-flex');
      player.classList.add('display-none');
    }
  },

  play: function (src, title) {
    const audioEl = document.getElementById('audio-element');
    const titleEl = document.getElementById('audio-title');

    if(audioEl.src != src) {
      audioEl.src = src;
      titleEl.innerHTML = title;
    }

    this.showPlayer();
    audioEl.play();
  },

  pause: function () {
    const audioEl = document.getElementById('audio-element');
    audioEl.pause();
  },
};
