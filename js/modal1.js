(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open1]'),
    openModalBtn1: document.querySelector('[data-modal-open1-1]'),
    openModalBtn2: document.querySelector('[data-modal-open1-2]'),

    closeModalBtn: document.querySelector('[data-modal-close1]'),
    modal: document.querySelector('[data-modal1]'),
    changeNameEl: document.querySelector('[data-change-name]'),
    changeImgEl: document.querySelector('[data-change-img]'),
    backdropEl: document.querySelector('.backdrop1'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', changeName);
  refs.openModalBtn.addEventListener('click', changeImg);

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn1.addEventListener('click', changeName);
  refs.openModalBtn1.addEventListener('click', changeImg2);

  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', changeName);
  refs.openModalBtn2.addEventListener('click', changeImg3);

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdropEl.addEventListener('click', onBackdropClick);

  //document.addEventListener('keydown', onEscapePress);

  function changeImg() {
    refs.changeImgEl.classList.remove('modal1__img--img1');
    refs.changeImgEl.classList.remove('modal1__img--img2');
    refs.changeImgEl.classList.remove('modal1__img--img3');
    refs.changeImgEl.classList.add('modal1__img--img1');
  }

  function changeImg2() {
    refs.changeImgEl.classList.remove('modal1__img--img1');
    refs.changeImgEl.classList.remove('modal1__img--img2');
    refs.changeImgEl.classList.remove('modal1__img--img3');
    refs.changeImgEl.classList.add('modal1__img--img2');
  }

  function changeImg3() {
    refs.changeImgEl.classList.remove('modal1__img--img1');
    refs.changeImgEl.classList.remove('modal1__img--img2');
    refs.changeImgEl.classList.remove('modal1__img--img3');
    refs.changeImgEl.classList.add('modal1__img--img3');
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden1');
    document.body.classList.toggle('modal-open');
  }

  function changeName(event) {
    refs.changeNameEl.textContent = event.currentTarget.dataset.name;
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }

  // function onEscapePress(event) {
  //   if (event.code === 'Escape') {
  //     // document.removeEventListener('keydown', onEscapePress);
  //     toggleModal();
  //   }
  // }
})();
