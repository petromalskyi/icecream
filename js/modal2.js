(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open2]'),
    closeModalBtn: document.querySelector('[data-modal-close2]'),
    modal: document.querySelector('[data-modal2]'),
    backdropEl: document.querySelector('.backdrop2'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdropEl.addEventListener('click', onBackdropClick);
  //window.addEventListener('keydown', onEscapePress);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden2');
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
