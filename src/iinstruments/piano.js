// 🎹 Mapa que relaciona el nombre de la nota latina con el archivo de sonido correspondiente
const noteMap = {
  "Do": "C4",
  "Do#": "C#4",
  "Re": "D4",
  "Re#": "D#4",
  "Mi": "E4",
  "Fa": "F4",
  "Fa#": "F#4",
  "Sol": "G4",
  "Sol#": "G#4",
  "La": "A4",
  "La#": "A#4",
  "Si": "B4",
  "Do↑": "C5" // Segunda octava (Do agudo)
};

// 🎹 Teclas del teclado físico → nombre de nota latina
const keyToNote = {
  "a": "Do",
  "w": "Do#",
  "s": "Re",
  "e": "Re#",
  "d": "Mi",
  "f": "Fa",
  "t": "Fa#",
  "g": "Sol",
  "y": "Sol#",
  "h": "La",
  "u": "La#",
  "j": "Si",
  "k": "Do↑"
};

// 🔊 Reproduce el sonido de la nota correspondiente
function playNote(note) {
  const noteFile = noteMap[note];
  if (!noteFile) return;

  // Asegúrate de tener archivos como C4.wav, D#4.wav, etc., en la carpeta "sounds/"
  const audio = new Audio(`sounds/${noteFile}.wav`);
  audio.play();
}

// 🖱️ Manejo del clic sobre una tecla del piano
document.querySelectorAll('.piano button').forEach(button => {
  button.addEventListener('click', () => {
    const note = button.dataset.note;
    playNote(note);
  });
});

// 🎹 Manejo del teclado físico
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const note = keyToNote[key];
  if (note) {
    playNote(note);

    // Resalta la tecla visualmente al presionarla
    const btn = document.querySelector(`[data-note="${note}"]`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 100);
    }
  }
});
