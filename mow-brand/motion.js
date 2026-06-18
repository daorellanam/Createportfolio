const scene  = document.getElementById('scene');
const intro  = document.getElementById('play-intro');
const outro  = document.getElementById('play-outro');

function play(state) {
  scene.classList.remove('is-intro', 'is-outro');
  void scene.offsetWidth;
  scene.classList.add(state);
}

intro.addEventListener('click', () => play('is-intro'));
outro.addEventListener('click', () => play('is-outro'));

scene.addEventListener('animationend', (e) => {
  if (scene.classList.contains('is-outro') && e.animationName === 'orb-pulse-out') {
  }
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => play('is-intro'));
}