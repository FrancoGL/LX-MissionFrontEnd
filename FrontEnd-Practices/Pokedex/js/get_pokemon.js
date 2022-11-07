const $img = document.querySelector(".main-img");
const $input = document.getElementById("name");

const get_pokemon = async (pokemon) => {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let json = await response.json();
    return json;
  } catch (error) {}
};

document.addEventListener("submit", (e) => {
  e.preventDefault();
  get_pokemon($input.value).then((data) => {
    let url = data.sprites.front_default;
    $img.src = url;
  });
});
