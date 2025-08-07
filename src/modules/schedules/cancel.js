import { scheduleCancel } from "../../services/cancel-schedule";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".schedule-list");

periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("list-remove")) {
      const item = e.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("Deseja remover o agendamento?");

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
