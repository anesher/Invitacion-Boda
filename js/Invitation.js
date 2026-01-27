class Invitation {
  constructor() {
    this.card = document.getElementById("openEnvelope");
    this.intro = document.getElementById("intro");
    this.invitation = document.getElementById("invitation");
  }

  open(callback) {
    this.card.classList.add("open");
    setTimeout(() => {
      this.intro.style.display = "none";
      this.invitation.classList.remove("hidden");
      callback();
    }, 900);
  }
}
