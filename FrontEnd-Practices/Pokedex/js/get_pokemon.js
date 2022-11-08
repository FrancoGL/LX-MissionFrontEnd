const $img = document.querySelector(".main-img");
const $input = document.getElementById("name");
const $dataContainer = document.getElementById("data");

const getPokemon = async (pokemon) => {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let json = await response.json();
    return json;
  } catch (error) {}
};

const createData = (name, type, stats, moves) => {
  let $spanName = document.createElement("span");
  $spanName.innerHTML = `<span class="title">Name</span>: ${name}`;
  $dataContainer.appendChild($spanName);

  let $spanType = document.createElement("span");
  $spanType.innerHTML = `<span class="title">Type</span>: ${type}`;
  $dataContainer.appendChild($spanType);

  let $ulStats = document.createElement("ul");
  let $spanTitle = document.createElement("span");
  $spanTitle.innerHTML = `<span class="title">Stats</span>`;
  $ulStats.appendChild($spanTitle);

  for (const element of stats) {
    let $li = document.createElement("li");
    $li.innerHTML = `<span class="stat">${element.stat.name}</span> : ${element.base_stat}`;
    $ulStats.appendChild($li);
  }

  $dataContainer.appendChild($ulStats)

  let $ulMoves = document.createElement("ul");
  $spanTitle.innerHTML = `<span class="title">Moves</span>`;
  $ulStats.appendChild($spanTitle);

  for (let i = 0; i < 3; i++) {
    let $li = document.createElement("li");
    $li.innerHTML = `<span class="move">${moves[i].move.name}</span>`;
    $ulStats.appendChild($li);
  }
};

document.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemon($input.value).then((data) => {
    let url = data.sprites.front_default;
    $img.src = url;
    createData($input.value, data.types[0].type.name, data.stats, data.moves);
  });
});
