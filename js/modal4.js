(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-franchise]"),
    closeModalBtn: document.querySelector("[data-modal-close-franchise]"),
    modal: document.querySelector("[data-modal-franchise]"),
    backdropEl: document.querySelector('.backdrop4'),

  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdropEl.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden4");
  }

    function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }
})();