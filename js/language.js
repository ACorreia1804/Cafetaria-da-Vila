const translations = new Map(Object.entries({
  "Saltar para o conteúdo": "Skip to content",
  "Prato de brunch com tostas, salmão, ovo e batata-doce": "Brunch plate with toast, salmon, egg and sweet potato",
  "Panquecas com doce de fruta, natas e frutos secos": "Pancakes with fruit preserve, cream and nuts",
  "Hambúrguer com queijo e batata-doce frita": "Burger with cheese and sweet potato fries",
  "Tosta com rúcula e batata-doce, servida com batatas fritas": "Toastie with rocket and sweet potato, served with fries",
  "Encerrada para remodelações até 2 de novembro. Reabre na terça, às 10h00.": "Closed for renovations until 2 November. We reopen on Tuesday at 10:00 am.",
  "Ementa": "Menu",
  "Bolos": "Cakes",
  "Visitar": "Visit",
  "Ligar": "Call",
  "Brunch tardio, tostas e bolos feitos à mão.": "Late brunch, toasties and handmade cakes.",
  "Brunch, croissants frescos, tostas e bolos por encomenda na Cafetaria da Vila, em Condeixa-a-Nova.": "Late brunch, fresh croissants, toasties and made-to-order cakes at Cafetaria da Vila in Condeixa-a-Nova.",
  "Horário: terça a sábado, 10h–20h": "Opening hours: Tuesday to Saturday, 10 am–8 pm",
  "Contacte-nos: 239 134 703": "Call us: 239 134 703",
  "Ver ementa": "View menu",
  "Da cozinha da casa": "From our kitchen",
  "O que pode encontrar": "What you can enjoy",
  "Bolos": "Cakes",
  "Red velvet com morangos, chocolate e laranja, frutos vermelhos ou baunilha com morangos. Também disponíveis por encomenda.": "Red velvet with strawberries, chocolate and orange, red berries, or vanilla with strawberries. Also available to order.",
  "Brunch e tostas": "Brunch and toasties",
  "Tostas em pão rústico com rúcula e batata frita, brunch e croissants frescos.": "Rustic bread toasties with rocket and chips, brunch and fresh croissants.",
  "Refeições e bebidas": "Meals and drinks",
  "Hambúrgueres, cafés e bebidas.": "Burgers, coffee and drinks.",
  "Críticas e Avaliações": "Reviews and ratings",
  "Opiniões de quem nos visita": "What our visitors say",
  "Deixe a sua opinião": "Leave a review",
  "Google": "Google",
  "Facebook": "Facebook",
  "(4,7/5)": "(4.7/5)",
  "(4,8/5)": "(4.8/5)",
  "Pesquisar opiniões": "Search reviews",
  "Pesquisar opiniões dos visitantes": "Search visitor reviews",
  "Filtrar opiniões por plataforma": "Filter reviews by platform",
  "Todas": "All",
  "Resumo das opiniões no Google": "Summary of Google reviews",
  "Síntese editorial · Restaurant Guru": "Editorial summary · Restaurant Guru",
  "As opiniões destacam o ambiente tranquilo, a qualidade do serviço e do café, e preços considerados razoáveis.": "Reviews highlight the peaceful atmosphere, quality service and coffee, and reasonable prices.",
  "Ver opiniões no Google": "Read Google reviews",
  "11 meses atrás · Facebook": "11 months ago · Facebook",
  "Descreve um ambiente sereno, pratos frescos com sabor caseiro e um atendimento que a fez sentir-se em casa.": "Describes a peaceful atmosphere, fresh food with homemade flavour, and service that made her feel at home.",
  "Ver opinião no Facebook": "Read review on Facebook",
  "Há um ano · Facebook": "A year ago · Facebook",
  "Destaca o ambiente agradável e a qualidade da comida.": "Highlights the pleasant atmosphere and quality of the food.",
  "Não foram encontradas opiniões.": "No reviews found.",
  "Os comentários do Facebook são sínteses das opiniões públicas visíveis. A opinião do Google é um resumo editorial do Restaurant Guru, não uma citação individual.": "Facebook comments are summaries of publicly visible reviews. The Google entry is an editorial summary from Restaurant Guru, not an individual quote.",
  "Feito e servido na Vila": "Made and served at the Vila",
  "Um gosto de Condeixa": "A taste of Condeixa",
  "Bolos, tostas e momentos à mesa na Cafetaria da Vila.": "Cakes, toasties and moments around the table at Cafetaria da Vila.",
  "Panquecas com doce e frutos secos": "Pancakes with preserve and nuts",
  "Hambúrguer com queijo e batata-doce": "Burger with cheese and sweet potato",
  "Tosta com rúcula e batata-doce": "Toastie with rocket and sweet potato",
  "Veja também o nosso Instagram": "Visit us on Instagram",
  "Encomendas": "Orders",
  "Bolos para momentos especiais": "Cakes for special moments",
  "Bolos feitos à mão por encomenda. Contacte-nos para saber mais.": "Handmade cakes available to order. Contact us to find out more.",
  "Contactar para encomendar": "Call to order",
  "Visite-nos": "Visit us",
  "Consulte o horário ou ligue-nos antes de vir.": "Check our opening hours or call before visiting.",
  "Morada": "Address",
  "Abrir no Google Maps": "Open in Google Maps",
  "Contactos": "Contact",
  "Esplanada · Acessível a cadeiras de rodas": "Outdoor seating · Wheelchair accessible",
  "Preço médio: 10 € a 15 € por pessoa": "Average price: €10–€15 per person",
  "Horário": "Opening hours",
  "Segunda": "Monday",
  "Terça": "Tuesday",
  "Quarta": "Wednesday",
  "Quinta": "Thursday",
  "Sexta": "Friday",
  "Sábado": "Saturday",
  "Domingo": "Sunday",
  "Fechado": "Closed",
  "10h00–20h00": "10:00 am–8:00 pm",
  "O horário pode mudar em feriados.": "Opening hours may change on public holidays.",
  "Voltar ao início ↑": "Back to top ↑"
}));

const attributeTranslations = [
  ['.salto-conteudo', "Skip to content", "Saltar para o conteúdo", "aria-label"],
  ['.marca', "Cafetaria da Vila — home", "Cafetaria da Vila — início", "aria-label"],
  ['.marca img', "Cafetaria da Vila logo", "Cafetaria da Vila", "alt"],
  ['.foto-pendente:nth-child(1) img', "Pancakes with fruit preserve, cream and nuts", "Panquecas com doce de fruta, natas e frutos secos", "alt"],
  ['.foto-pendente:nth-child(2) img', "Burger with cheese and sweet potato fries", "Hambúrguer com queijo e batata-doce frita", "alt"],
  ['.foto-pendente:nth-child(3) img', "Toastie with rocket and sweet potato, served with fries", "Tosta com rúcula e batata-doce, servida com batatas fritas", "alt"],
  ['.topo nav', "Main navigation", "Principal", "aria-label"],
  ['.idioma-cta', "Switch to Portuguese", "Mudar o site para inglês", "aria-label"],
  ['.avaliacao-plataforma[href*="reviews/google"]', "See Cafetaria da Vila reviews on Google", "Ver avaliações da Cafetaria da Vila no Google", "aria-label"],
  ['.avaliacao-plataforma[href*="reviews/facebook"]', "See Cafetaria da Vila reviews on Facebook", "Ver avaliações da Cafetaria da Vila no Facebook", "aria-label"],
  ['.estrelas-plataforma[aria-label^="4,7"], .estrelas-plataforma[aria-label^="4.7"]', "4.7 out of 5 stars", "4,7 em 5 estrelas", "aria-label"],
  ['.estrelas-plataforma[aria-label^="4,8"], .estrelas-plataforma[aria-label^="4.8"]', "4.8 out of 5 stars", "4,8 em 5 estrelas", "aria-label"],
  ['#pesquisa-opinioes', "Search visitor reviews", "Pesquisar opiniões dos visitantes", "placeholder"],
  ['.filtros-plataforma', "Filter reviews by platform", "Filtrar opiniões por plataforma", "aria-label"],
  ['.social-link[aria-label^="Instagram"]', "Cafetaria da Vila on Instagram", "Instagram da Cafetaria da Vila", "aria-label"],
  ['.social-link[aria-label^="Facebook"]', "Cafetaria da Vila on Facebook", "Facebook da Cafetaria da Vila", "aria-label"]
];

const dayNames = new Map([
  ["segunda-feira", "Monday"],
  ["terça-feira", "Tuesday"],
  ["quarta-feira", "Wednesday"],
  ["quinta-feira", "Thursday"],
  ["sexta-feira", "Friday"],
  ["sábado", "Saturday"],
  ["domingo", "Sunday"]
]);

const dayNamesPortuguese = new Map([...dayNames].map(([portuguese, english]) => [english.toLowerCase(), portuguese]));
const status = document.getElementById("estado");
const languageButton = document.getElementById("idioma");
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    return node.parentElement.closest("script, style, #estado")
      ? NodeFilter.FILTER_REJECT
      : NodeFilter.FILTER_ACCEPT;
  }
});
const textNodes = [];

while (textWalker.nextNode()) {
  textNodes.push({ node: textWalker.currentNode, original: textWalker.currentNode.nodeValue });
}

function translateStatus(text, from, to) {
  if (!text || from === to) return text;

  if (to === "en") {
    const opened = text.match(/^Aberto agora\. Fecha às (\d{1,2})h00\.$/);
    if (opened) {
      const hour = Number(opened[1]);
      return `Open now. Closes at ${hour % 12 || 12}:00 ${hour >= 12 ? "pm" : "am"}.`;
    }

    const closed = text.match(/^Fechado agora\. Abre (.+) às (\d{1,2})h00\.$/);
    if (closed) {
      const when = closed[1] === "hoje" ? "today" : closed[1] === "amanhã" ? "tomorrow" : dayNames.get(closed[1]) || closed[1];
      const hour = Number(closed[2]);
      return `Closed now. Opens ${when} at ${hour % 12 || 12}:00 ${hour >= 12 ? "pm" : "am"}.`;
    }
  } else {
    const opened = text.match(/^Open now\. Closes at (\d{1,2}):00 (am|pm)\.$/);
    if (opened) {
      let hour = Number(opened[1]) % 12;
      if (opened[2] === "pm") hour += 12;
      return `Aberto agora. Fecha às ${hour}h00.`;
    }

    const closed = text.match(/^Closed now\. Opens (.+) at (\d{1,2}):00 (am|pm)\.$/);
    if (closed) {
      const when = closed[1] === "today" ? "hoje" : closed[1] === "tomorrow" ? "amanhã" : dayNamesPortuguese.get(closed[1].toLowerCase()) || closed[1];
      let hour = Number(closed[2]) % 12;
      if (closed[3] === "pm") hour += 12;
      return `Fechado agora. Abre ${when} às ${hour}h00.`;
    }
  }

  return text;
}

let currentLanguage = "pt";

function setLanguage(language) {
  const previousStatus = status?.textContent;
  const nextLanguage = language === "en" ? "en" : "pt";

  for (const { node, original } of textNodes) {
    const trimmed = original.trim();
    const translated = nextLanguage === "en" ? translations.get(trimmed) : undefined;
    node.nodeValue = translated
      ? original.replace(trimmed, translated)
      : original;
  }

  for (const [selector, english, portuguese, attribute] of attributeTranslations) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, nextLanguage === "en" ? english : portuguese);
  }

  document.documentElement.lang = nextLanguage === "en" ? "en" : "pt-PT";
  document.title = nextLanguage === "en"
    ? "Cafetaria da Vila · Brunch and bakery in Condeixa-a-Nova"
    : "Cafetaria da Vila · Brunch e pastelaria em Condeixa-a-Nova";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    nextLanguage === "en"
      ? "Late brunch, toasties and handmade cakes at Cafetaria da Vila in Condeixa-a-Nova. Tuesday to Saturday, 10:00 am to 8:00 pm."
      : "Brunch tardio, tostas e bolos feitos à mão na Cafetaria da Vila, em Condeixa-a-Nova. De terça a sábado, das 10h00 às 20h00."
  );
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", nextLanguage === "en" ? "en_GB" : "pt_PT");
  languageButton.setAttribute("aria-label", nextLanguage === "en" ? "Switch to Portuguese" : "Mudar o site para inglês");
  languageButton.title = nextLanguage === "en" ? "Português" : "English";
  languageButton.setAttribute("aria-pressed", String(nextLanguage === "en"));

  if (status) status.textContent = translateStatus(previousStatus, currentLanguage, nextLanguage);
  currentLanguage = nextLanguage;
}

languageButton.addEventListener("click", () => {
  setLanguage(currentLanguage === "pt" ? "en" : "pt");
});
