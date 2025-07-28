function vincularnota(buttonId) {
  const button = document.getElementById(buttonId);
  const audio = document.querySelector(`audio#${buttonId}`);

  console.log(button);
  if (button && audio) {
    button.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);
    });
  }
}
vincularnota("Do");
vincularnota("Do#");
vincularnota("Re");
vincularnota("Re");
vincularnota("Mi");




