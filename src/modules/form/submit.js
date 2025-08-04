import dayjs from "dayjs";

const inputDate = document.getElementById("input-date");
const inputTime = document.getElementById("input-time");

let currentDate = dayjs(new Date()).format("YYYY-MM-DD");
let currentTime = dayjs(new Date()).format("HH:mm");

inputDate.value = currentDate;
inputDate.min = currentDate;

inputTime.value = currentTime;
