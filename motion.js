/* MoW — intro / outro motion controller
   Replays CSS keyframe states by toggling classes on .scene. */

const scene  = document.getElementById('scene');
const intro  = document.getElementById('play-intro');
const outro  = document.getElementById('play-outro');

/* Re-trigger an animation class by removing it, forcing reflow, re-adding. */
function play(state) {
  scene.classList.remove('is-intro', 'is-outro');
  // force reflow so the animation restarts even if same class
  void scene.offsetWidth;
  scene.classList.add(state);
}

intro.addEventListener('click', () => play('is-intro'));
outro.addEventListener('click', () => play('is-outro'));

/* After the outro finishes, leave the orb hidden state but allow replay.
   After intro finishes, settle into resting (finished) state. */
scene.addEventListener('animationend', (e) => {
  // when the last outro animation (orb pulse) ends, reset to a clean rest
  if (scene.classList.contains('is-outro') && e.animationName === 'orb-pulse-out') {
    // keep collapsed look until user replays
  }
});

/* Autoplay intro once on load (already has is-intro in markup, but ensure
   it runs after fonts settle for crisp letterforms). */
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => play('is-intro'));
}