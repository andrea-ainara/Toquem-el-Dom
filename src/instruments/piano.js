function vincularnota(buttonId) {
  const button = document.getElementById(buttonId);
  const audio = document.querySelector(`audio#${buttonId}`);

  if (button && audio) {
    button.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);
    });
  }
}


const notas = [
  "DO", "DOS", "RE", "RES", "MI",
  "FA", "FAS", "SOL", "SOLS", "LA", "LAS", "SI"
];

notas.forEach(nota => vincularnota(nota));






