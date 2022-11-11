const $dataContainer = document.getElementById("data");

const generateSpan = (text, name) => {
  let $span = document.createElement("span");
  $span.innerHTML = `<span class="title">${text}</span>: ${name}`;
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

const appendElements = (...args) => {
  for (const element of args) {
    $dataContainer.appendChild(element);
  }
};

export const setData = (name, type, stats, moves) => {
  const $spanName = generateSpan("Name", name);
  const $spanType = generateSpan("Type", type);
  const $ulStats = generateUl("Stats");
  generateLiStats(stats, $ulStats);
  const $ulMoves = generateUl("Moves");
  generateLiMoves(moves, $ulMoves);
  appendElements($spanName, $spanType, $ulStats, $ulMoves);
};
