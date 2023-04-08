(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open1]'),
    openModalBtn1: document.querySelector('[data-modal-open1-1]'),
    openModalBtn2: document.querySelector('[data-modal-open1-2]'),

    closeModalBtn: document.querySelector('[data-modal-close1]'),
    modal: document.querySelector('[data-modal1]'),
    changeNameEl: document.querySelector('[data-change-name]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn.addEventListener('click', changeName);
    
  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', changeName);

    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', changeName);
 
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden1');
  }
 
  function changeName(event) {
    refs.changeNameEl.textContent = event.currentTarget.dataset.name; 
  }
})();
