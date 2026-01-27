class MusicPlayer {
  constructor(audioId) {
    this.audio = document.getElementById(audioId);
  }

  play() {
    this.audio.volume = 0.5;
    this.audio.play().catch(() => {});
  }
}
