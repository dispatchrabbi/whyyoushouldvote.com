const AudioPlayer = {
  getPlayer: function () {
    let player;
    player = document.getElementById('podcast-player');
    if(!player) {
      player = document.createElement('audio');
      player.id = 'podcast-player';
      document.body.append(player);
    }

    return player;
  },
  play: function (src) {
    const player = this.getPlayer();
    if(player.src != src) {
      player.src = src;
    }

    player.play();
  },
  pause: function () {
    const player = this.getPlayer();
    player.pause();
  },
};
