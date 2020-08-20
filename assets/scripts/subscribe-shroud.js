const SubscribeShroud = {
  show: function() {
    const shroud = document.getElementById('subscribe-shroud');
    shroud.classList.remove('display-none');
  },
  hide: function() {
    const shroud = document.getElementById('subscribe-shroud');
    shroud.classList.add('display-none');
  },
};
