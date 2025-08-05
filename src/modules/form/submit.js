import dayjs from "dayjs";
import { newSchedule } from "../../services/new-schedule";

const form = document.querySelector("form");

const inputDate = document.getElementById("input-date");
const inputTime = document.getElementById("input-time");

const nameInput = document.getElementById("client");
const petNameInput = document.getElementById("pet");
const phoneInput = document.getElementById("phone");
const descriptionInput = document.getElementById("description");

let currentDate = dayjs(new Date()).format("YYYY-MM-DD");
let currentTime = dayjs(new Date()).format("HH:mm");

inputDate.value = currentDate;
inputDate.min = currentDate;

inputTime.value = currentTime;

form.onsubmit = async (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const petName = petNameInput.value;
  const phone = phoneInput.value;
  const description = descriptionInput.value;

  const when = dayjs(`${inputDate.value}T${inputTime.value}`).toDate();

  await newSchedule({
    name,
    petName,
    phone,
    description,
    when,
  });
};
