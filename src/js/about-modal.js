const span = document.querySelector('.modal-open');
const backdrop = document.querySelector('.backdrop');
const closeBackdrop = document.querySelector('.close-modal');
const backdropBg = document.querySelector('.backdrop-bg');

span.addEventListener('click', () => {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', function mdClose(e) {
    if (e.keyCode !== 27) return;
    modalClose();
    this.removeEventListener('keydown', mdClose);
  });
});

closeBackdrop.addEventListener('click', modalClose);
backdropBg.addEventListener('click', modalClose);

function modalClose() {
  backdrop.classList.add('is-hidden');
}
