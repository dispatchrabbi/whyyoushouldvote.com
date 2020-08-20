function init() {
  // add expando toggle event listeners
  document.querySelectorAll('article .expand button, article .collapse button')
    .forEach(button => button.addEventListener('click', function() { toggleEpisodeExpanded(this.closest('article')); }));

  // add subscribe shroud event listeners
  document.querySelectorAll('.subscribe-button')
  .forEach(button => button.addEventListener('click', function() { SubscribeShroud.show(); }));

  document.getElementById('subscribe-shroud')
    .addEventListener('click', function(ev) {
      if(ev.target === this) { SubscribeShroud.hide(); }
    });

  document.getElementById('subscribe-close')
   .addEventListener('click', function(ev) { SubscribeShroud.hide(); });

  // add podcast player event listeners
  document.querySelectorAll('.play-button')
    .forEach(button => button.addEventListener('click', function() { togglePlayButton(this); }));


}

function toggleEpisodeExpanded(episodeEl) {
  const expanded = episodeEl.classList.contains('expanded');
  episodeEl.classList[expanded ? 'remove' : 'add']('expanded');
}

const PLAY_ICON = 'fa-play-circle';
const PAUSE_ICON = 'fa-pause-circle';
function togglePlayButton(playButton) {
  const playButtonIcon = playButton.querySelector('.play-button-icon');
  const isPlaying = playButtonIcon.classList.contains(PAUSE_ICON);

  document.querySelectorAll(`.play-button-icon.${PAUSE_ICON} + .play-button-text`)
    .forEach(span => span.innerHTML = 'Listen' );

  document.querySelectorAll(`.play-button-icon.${PAUSE_ICON}`)
    .forEach(button => {
      button.classList.remove(PAUSE_ICON);
      button.classList.add(PLAY_ICON);
    });

  if(isPlaying) {
    AudioPlayer.pause();
  } else {
    AudioPlayer.play(playButton.dataset.url);

    playButtonIcon.classList.remove(PLAY_ICON);
    playButtonIcon.classList.add(PAUSE_ICON);

    const playButtonText = playButton.querySelector('.play-button-text');
    playButtonText.innerHTML = 'Pause';
  }
}

init();
