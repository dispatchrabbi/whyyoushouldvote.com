function play(player, src) {
  if(player.src !== src) {
    player.src = src;
  }
  player.play();
}

function pause(player) {
  player.pause();
}

const SRC = 'https://d3ctxlq1ktw2nl.cloudfront.net/staging/2020-7-1/94792762-44100-2-5e37f808f951c.m4a';
const SRC2 = 'https://dovetail-cdn.prxu.org/66/6gzeFm-oxvh927nIc-e7PlPo0PeY9ZCdrnpB0fB_MZU/TCL_July_2020_PART_1.mp3?le=pQ7NxX2LTzaN5Nhix19Ku6aKDza_AKPAVmEfO0LPqFY';
const playButton = document.getElementById('play-button');
const player = document.getElementById('player');

playButton.addEventListener('click', function() {
  const paused = player.paused;
  paused ? play(player, SRC) : pause(player);
  this.className = 'fas fa-' + (paused ? 'pause' : 'play');
});

function init() {
  // add expando toggle event listeners
  document.querySelectorAll('article .expand button, article .collapse button')
    .forEach(button => button.addEventListener('click', function() { toggleEpisodeExpanded(this.closest('article')); }));
}

function toggleEpisodeExpanded(episodeEl) {
  const expanded = episodeEl.classList.contains('expanded');
  episodeEl.classList[expanded ? 'remove' : 'add']('expanded');
}

init();
