document.addEventListener('DOMContentLoaded', () => {

  const keyMap = {
    KeyA: 'DO',
    KeyQ: 'DOS',
    KeyS: 'RE',
    KeyW: 'RES',
    KeyD: 'MI',
    KeyF: 'FA',
    KeyE: 'FAS',
    KeyG: 'SOL',
    KeyR: 'SOLS',
    KeyH: 'LA',
    KeyT: 'LAS',
    KeyJ: 'SI',
  };

  const activeTimeouts = new Map();

  function playNote(noteId) {
    const audio = document.getElementById(`${noteId}-audio`);
    const key = document.getElementById(noteId);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    if (key) {
      key.classList.add('active');

      if (activeTimeouts.has(key)) {
        clearTimeout(activeTimeouts.get(key));
      }

      const timeoutId = setTimeout(() => {
        key.classList.remove('active');
        activeTimeouts.delete(key);
      }, 150);

      activeTimeouts.set(key, timeoutId);
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    const noteId = keyMap[e.code];
    if (noteId) {
      e.preventDefault();
      playNote(noteId);
    }
  });

  document.querySelectorAll('.white-key, .black-key').forEach((btn) => {
    btn.addEventListener('click', () => playNote(btn.id));
  });
});
