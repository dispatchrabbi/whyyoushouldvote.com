function init() {
  // add expando toggle event listeners
  document.querySelectorAll('article .expand button, article .collapse button')
    .forEach(button => button.addEventListener('click', function() { toggleEpisodeExpanded(this.closest('article')); }));

  document.querySelectorAll('.play-button')
    .forEach(button => button.addEventListener('click', function() { togglePlayButton(this); }));
}

function toggleEpisodeExpanded(episodeEl) {
  const expanded = episodeEl.classList.contains('expanded');
  episodeEl.classList[expanded ? 'remove' : 'add']('expanded');
}

const PLAY_ICON = 'fa-play';
const PAUSE_ICON = 'fa-pause';
function togglePlayButton(playButtonEl) {
  const isPlaying = playButtonEl.classList.contains(PAUSE_ICON);

  document.querySelectorAll(`.play-button.${PAUSE_ICON}`)
    .forEach(button => {
      button.classList.remove(PAUSE_ICON);
      button.classList.add(PLAY_ICON);
    });

  if(isPlaying) {
    AudioPlayer.pause();
  } else {
    AudioPlayer.play(playButtonEl.dataset.url);
    playButtonEl.classList.remove(PLAY_ICON);
    playButtonEl.classList.add(PAUSE_ICON);
  }
}

init();
