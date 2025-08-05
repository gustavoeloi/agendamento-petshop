import { scheduleFetchByDay } from "../../services/fetch-schedule-by-day";

export async function schedulesDay({ date }) {
  const dailySchedules = await scheduleFetchByDay(date);
}
