const noteMap = {
  "Do": "do",
  "Do#": "do#",
  "Re": "re",
  "Re#": "re#",
  "Mi": "mi",
  "Fa": "fa",
  "Fa#": "fa#",
  "Sol": "sol",
  "Sol#": "sol#",
  "La": "la",
  "La#": "la#",
  "Si": "si",
};

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
};

function playNote(note) {
  const noteFile = noteMap[note];
  if (!noteFile) return;

  const audio = new Audio(`sounds/${noteFile}.wav`);
  audio.currentTime = 0;
  audio.play();
}

document.querySelectorAll('.piano button').forEach(button => {
  button.addEventListener('click', () => {
    const note = button.dataset.note;
    playNote(note);

    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 100);
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const note = keyToNote[key];
  if (note) {
    playNote(note);

    const btn = document.querySelector(`[data-note="${note}"]`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 100);
    }
  }
});
