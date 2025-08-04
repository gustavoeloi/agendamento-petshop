import { schedulesDay } from "./modules/schedules/load.js";

const selectedDate = document.querySelector(".filter-date");
document.addEventListener("DOMContentLoaded", () => {
  const date = selectedDate.value;

  schedulesDay({ date });
});
