(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtnMain: document.querySelector("[data-modal-open-main]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdropEl: document.querySelector('.backdrop'),
    
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnMain.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdropEl.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

   function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }

})();