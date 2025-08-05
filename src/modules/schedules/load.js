import { scheduleFetchByDay } from "../../services/fetch-schedule-by-day";
import { schedulesDisplay } from "./display-schedule";

export async function schedulesDay({ date }) {
  const dailySchedules = await scheduleFetchByDay(date);
  schedulesDisplay({ dailySchedules });
}
