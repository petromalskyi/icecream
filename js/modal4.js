(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-franchise]'),
    closeModalBtn: document.querySelector('[data-modal-close-franchise]'),
    modal: document.querySelector('[data-modal-franchise]'),
    backdropEl: document.querySelector('.backdrop4'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdropEl.addEventListener('click', onBackdropClick);
  // window.addEventListener('keydown', onEscapePress);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden4');
    document.body.classList.toggle('modal-open');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }

  // function onEscapePress(event) {
  //   if (event.code === 'Escape') {
  //     //     window.removeEventListener('keydown', onEscapePress);
  //     toggleModal();
  //   }
  // }
})();
