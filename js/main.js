// Horário: dia da semana (0 = domingo) -> [abertura, fecho] em horas
const HORARIO = {1:null, 2:[10,20], 3:[10,20], 4:[10,20], 5:[10,20], 6:[10,20], 0:null};
const DIAS = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"];

// Hora atual em Portugal, independentemente do fuso do visitante
const agora = new Date(new Date().toLocaleString("en-US", {timeZone:"Europe/Lisbon"}));
const dia = agora.getDay();
const h = agora.getHours() + agora.getMinutes()/60;

// Destacar o dia de hoje na tabela
document.querySelector(`tr[data-dia="${dia}"]`)?.classList.add("hoje");

// Estado: aberto / fechado
const estado = document.getElementById("estado");
const hoje = HORARIO[dia];
if (hoje && h >= hoje[0] && h < hoje[1]) {
  estado.textContent = `Aberto agora até às ${hoje[1]}h00`;
  estado.classList.add("aberto");
} else {
  let i = 1;
  while (!HORARIO[(dia + i) % 7]) i++;
  const prox = (dia + i) % 7;
  const quando = (hoje && h < hoje[0]) ? "hoje" : (i === 1 ? "amanhã" : DIAS[prox]);
  estado.textContent = `Fechado agora. Abre ${quando} às ${HORARIO[prox][0]}h00`;
}

// Aviso de remodelação: só aparece até à data indicada em data-ate
const aviso = document.getElementById("aviso");
if (aviso && agora <= new Date(aviso.dataset.ate + "T23:59:59")) aviso.hidden = false;

document.getElementById("ano").textContent = agora.getFullYear();
