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
  AudioPlayer.init();
  document.querySelectorAll('.play-button')
    .forEach(button => button.addEventListener('click', function() { AudioPlayer.play(this.dataset.src, this.dataset.title); }));
}

function toggleEpisodeExpanded(episodeEl) {
  const expanded = episodeEl.classList.contains('expanded');
  episodeEl.classList[expanded ? 'remove' : 'add']('expanded');
}

init();
