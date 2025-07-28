document.addEventListener('DOMContentLoaded', () => {
  const keyCodes = ['KeyA', 'KeyQ', 'KeyS', 'KeyW', 'KeyD', 'KeyF', 'KeyE', 'KeyG', 'KeyR', 'KeyH', 'KeyT', 'KeyJ'];
  const noteIds = ['DO', 'DOS', 'RE', 'RES', 'MI', 'FA', 'FAS', 'SOL', 'SOLS', 'LA', 'LAS', 'SI'];

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

    const index = keyCodes.indexOf(e.code);
    if (index !== -1) {
      e.preventDefault();
      const noteId = noteIds[index];
      playNote(noteId);
    }
  });

  document.querySelectorAll('.white-key, .black-key').forEach((btn) => {
    btn.addEventListener('click', () => playNote(btn.id));
  });
});
