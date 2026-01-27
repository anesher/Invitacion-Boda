document.addEventListener("DOMContentLoaded", () => {

  const invitation = new Invitation();
  const music = new MusicPlayer("music");
  const countdown = new Countdown("countdown", new Date("2026-04-11T12:30:00"));

  document.getElementById("openEnvelope").addEventListener("click", () => {
    invitation.open(() => {
      music.play();
      countdown.start();
    });
  });

});
