import { scheduleFetchByDay } from "../../services/fetch-schedule-by-day";
import { schedulesDisplay } from "./display-schedule";

const selectedDate = document.querySelector(".filter-date");

export async function schedulesDay() {
  const date = selectedDate.value;
  const dailySchedules = await scheduleFetchByDay({ date });
  schedulesDisplay({ dailySchedules });
}
