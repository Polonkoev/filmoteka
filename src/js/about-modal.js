(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-open'),
    closeModalBtn: document.querySelector('.close-modal'),
    modal: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
