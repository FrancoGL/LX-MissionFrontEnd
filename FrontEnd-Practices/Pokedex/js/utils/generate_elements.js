const $general = document.getElementById("general");
const $stats = document.getElementById("stats");
const $moves = document.getElementById("moves");

const generateSpan = (text, name) => {
  let $span = document.createElement("span");
  $span.innerHTML =
    name != null
      ? `<span class="title">${text}</span>: ${name}`
      : `<span class="title">${text}</span>`;
  return $span;
};

const generateUl = (text) => {
  let $ulStats = document.createElement("ul");
  const $spanTitle = generateSpan(`${text}`);
  $ulStats.appendChild($spanTitle);
  return $ulStats;
};

const generateLiStats = (stats, $ulContainer) => {
  for (const element of stats) {
    let $li = document.createElement("li");
    $li.innerHTML = `<span class="stat">${element.stat.name}</span> : ${element.base_stat}`;
    $ulContainer.appendChild($li);
  }
};

const generateLiMoves = (moves, $ulContainer) => {
  for (let i = 0; i < 3; i++) {
    let $li = document.createElement("li");
    $li.innerHTML = `<span class="move">${moves[i].move.name}</span>`;
    $ulContainer.appendChild($li);
  }
};


export const setData = (name, type, stats, moves) => {
  const $spanName = generateSpan("Name", name);
  const $spanType = generateSpan("Type", type);
  const $ulStats = generateUl("Stats");
  generateLiStats(stats, $ulStats);
  const $ulMoves = generateUl("Moves");
  generateLiMoves(moves, $ulMoves);
  
  $general.appendChild($spanName);
  $general.appendChild($spanType);
  $general.classList.add("border-style");
  $stats.appendChild($ulStats);
  $stats.classList.add("border-style");
  $moves.appendChild($ulMoves)
  $moves.classList.add("border-style");
};
