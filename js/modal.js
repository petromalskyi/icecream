(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnMain: document.querySelector('[data-modal-open-main]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdropEl: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMain.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdropEl.addEventListener('click', onBackdropClick);
  //document.addEventListener('keydown', onEscapePress);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }
  // function onEscapePress(event) {
  //   if (event.code === 'Escape') {
  //     //  window.removeEventListener('keydown', onEscapePress);
  //     toggleModal();
  //   }
  // }
})();
