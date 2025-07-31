const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelector("#btn-modal");

btnOpenModal.addEventListener("click", () => {
  modal.classList.toggle("hidde-modal");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.toggle("hidde-modal");
  }
});
