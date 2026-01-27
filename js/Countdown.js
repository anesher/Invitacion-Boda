class Countdown {
  constructor(elementId, targetDate) {
    this.element = document.getElementById(elementId);
    this.target = targetDate;
  }

  start() {
    this.update();
    setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date();
    const diff = this.target - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    this.element.textContent =
      `${this.pad(d)} · ${this.pad(h)} · ${this.pad(m)} · ${this.pad(s)}`;
  }

  pad(n) {
    return n < 10 ? "0" + n : n;
  }
}
