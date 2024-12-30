(() => {
  const appoint = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (appoint.openModalBtn && appoint.closeModalBtn && appoint.modal) {
    appoint.openModalBtn.addEventListener("click", toggleModal);
    appoint.closeModalBtn.addEventListener("click", toggleModal);

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        !appoint.modal.classList.contains("is-hidden")
      ) {
        toggleModal();
      }
    });

    function toggleModal() {
      appoint.modal.classList.toggle("is-hidden");
    }
  } else {
    console.error("Some elements were not found");
  }
})();
