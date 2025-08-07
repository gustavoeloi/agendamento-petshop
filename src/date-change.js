import dayjs from "dayjs";
import { schedulesDay } from "./modules/schedules/load";

const inputDate = document.getElementById("date");

inputDate.value = dayjs(new Date()).format("YYYY-MM-DD");

inputDate.onchange = () => schedulesDay();
