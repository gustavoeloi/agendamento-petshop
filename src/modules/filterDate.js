import dayjs from "dayjs";

const filterDateInput = document.querySelector(".filter-date");

filterDateInput.value = dayjs(new Date()).format("YYYY-MM-DD");

filterDateInput.addEventListener("change", () => {});
