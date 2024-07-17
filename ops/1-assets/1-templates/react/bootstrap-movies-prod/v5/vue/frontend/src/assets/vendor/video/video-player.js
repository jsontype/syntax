var player = videojs('videoPlayer', {
  autoplay: muted,
  controls: true,
  poster: 'images/slider/slider1.jpg',
  loop: true,
  plugins: {
    hotkeys: {
      enableModifiersForNumbers: false,
    },
  },
});
