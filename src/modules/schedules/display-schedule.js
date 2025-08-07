import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodEvening = document.getElementById("period-evening");

export function schedulesDisplay({ dailySchedules }) {
  periodMorning.innerHTML = "";
  periodAfternoon.innerHTML = "";
  periodEvening.innerHTML = "";

  dailySchedules.forEach((schedule) => {
    const parsed = dayjs(schedule.when);
    const day = parsed.format("YYYY-MM-DD");
    const time = parsed.format("HH:mm");

    const li = document.createElement("li");
    li.classList.add("schedule-list-item");

    const pTime = document.createElement("p");
    pTime.classList.add("list-time");
    pTime.textContent = time;

    const pName = document.createElement("p");
    const spanName = document.createElement("span");
    pName.classList.add("list-name");
    spanName.classList.add("list-petname");
    spanName.textContent = schedule.petName;
    pName.append(spanName, " / ", schedule.name);

    const pType = document.createElement("p");
    pType.classList.add("list-type");
    pType.innerHTML = schedule.description;

    const pRemove = document.createElement("p");
    pRemove.classList.add("list-remove");
    pRemove.textContent = "Remover agendamento";

    li.append(pTime, pName, pType, pRemove);

    const hour = dayjs(schedule.when).hour();

    if (hour <= 12) {
      periodMorning.appendChild(li);
    } else if (hour >= 12 && hour <= 18) {
      periodAfternoon.appendChild(li);
    } else {
      periodEvening.appendChild(li);
    }
  });
}

/*
              <li class="schedule-list-item">
                <p class="list-time">09:00</p>
                <p class="list-name">
                  <span class="list-petname">Thor / </span>Fernanda Costa
                </p>
                <p class="list-type">Vacinação</p>
                <p class="list-remove">Remover agendamento</p>
              </li>
*/
