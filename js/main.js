// Dia da semana (0 = domingo) -> [abertura, fecho], em horas.
const HORARIO = { 0: null, 1: null, 2: [10, 20], 3: [10, 20], 4: [10, 20], 5: [10, 20], 6: [10, 20] };
const DIAS = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
const agora = new Date();
const partes = new Intl.DateTimeFormat("pt-PT", {
  timeZone: "Europe/Lisbon",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23"
}).formatToParts(agora);
const horaLocal = Number(partes.find(parte => parte.type === "hour").value);
const minutoLocal = Number(partes.find(parte => parte.type === "minute").value);
const dataLocal = [
  partes.find(parte => parte.type === "year").value,
  partes.find(parte => parte.type === "month").value,
  partes.find(parte => parte.type === "day").value
].join("-");
const dia = new Date(`${dataLocal}T00:00:00Z`).getUTCDay();
const horaDecimal = horaLocal + minutoLocal / 60;

const linhaHoje = document.querySelector(`tr[data-dia="${dia}"]`);
if (linhaHoje) linhaHoje.classList.add("hoje");

const estado = document.getElementById("estado");
if (estado) {
  const horarioHoje = HORARIO[dia];
  if (horarioHoje && horaDecimal >= horarioHoje[0] && horaDecimal < horarioHoje[1]) {
    estado.textContent = `Aberto agora. Fecha às ${horarioHoje[1]}h00.`;
    estado.classList.add("aberto");
  } else {
    let diasAteAbrir = 1;
    while (diasAteAbrir <= 7 && !HORARIO[(dia + diasAteAbrir) % 7]) diasAteAbrir++;
    const proximoDia = (dia + diasAteAbrir) % 7;
    const quando = horarioHoje && horaDecimal < horarioHoje[0]
      ? "hoje"
      : diasAteAbrir === 1
        ? "amanhã"
        : DIAS[proximoDia];
    estado.textContent = `Fechado agora. Abre ${quando} às ${HORARIO[proximoDia][0]}h00.`;
  }
}

const aviso = document.getElementById("aviso");
if (aviso && aviso.dataset.ate && dataLocal <= aviso.dataset.ate) aviso.hidden = false;

const ano = document.getElementById("ano");
if (ano) ano.textContent = String(agora.getFullYear());
