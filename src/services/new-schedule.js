import { apiConfig } from "./api-config";

export async function newSchedule({
  id,
  name,
  petName,
  phoneNumber,
  description,
  when,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        petName,
        phoneNumber,
        description,
        when,
      }),
    });
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde!");
  }
}
