import { obtenerQuote } from "./http-provider";

const body = document.body;
let btnQuote, olQuote;

const construirQuoteHtml = () => {
  const htmlDinamico = `<h1 class="mt-5">Star Wars Quote Generator</h1>
    <hr/>
    <button class="btn btn-primary">Give me a quote</button>
    <ol class="mt-3 list-group"></ol>`;

  const divQuote = document.createElement("div");
  divQuote.innerHTML = htmlDinamico;
  body.append(divQuote);
};

const eventos = () => {
  olQuote = document.querySelector("ol");
  btnQuote = document.querySelector("button");
  btnQuote.addEventListener("click", async () => {
    renderQuote(await obtenerQuote());
  });
};

const renderQuote = (quote) => {
  const itemQuote = document.createElement("li");
  itemQuote.innerHTML = `${quote.id}: "${quote.content}"`;
  itemQuote.classList.add("list-group-item");
  olQuote.append(itemQuote);
};

export const init = () => {
  construirQuoteHtml();
  eventos();
};
