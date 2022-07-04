const urlStarWarsQuotes =
  "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

const obtenerQuote = async () => {
  try {
    const resp = await fetch(urlStarWarsQuotes);
    if (!resp.ok) throw "No quote available";
    const { id, content } = await resp.json();
    return { id, content };
  } catch (err) {
    throw err;
  }
};

export { obtenerQuote };
