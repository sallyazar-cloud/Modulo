(function () {
  const pieces = ["🎉", "⭐", "🎃", "🍬", "✨", "🌟", "🍭"];

  // A short burst of falling emoji when a learner gets everything right.
  window.celebrate = function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    for (let i = 0; i < 36; i += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.setAttribute("aria-hidden", "true");
      piece.textContent = pieces[i % pieces.length];
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = `${-5 - Math.random() * 35}vh`;
      piece.style.animationDelay = `${Math.random() * 0.6}s`;
      piece.style.setProperty("--fall", `${2.2 + Math.random() * 1.4}s`);
      piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 30}vw`);
      piece.style.setProperty("--spin", `${(Math.random() - 0.5) * 720}deg`);
      piece.addEventListener("animationend", () => piece.remove());
      document.body.append(piece);
    }
  };
})();
