import { getPokemon } from "../operations/get.js";
import { checkInput } from "../utils/check_input.js";
import { setData } from "../utils/generate_elements.js";

const $img = document.querySelector(".card-img");
const $input = document.getElementById("name");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInput) {
    getPokemon($input.value.toLowerCase()).then((data) => {
      try {
        const url = data.sprites.front_default;
        $img.src = url;
        setData(
          $input.value.toLowerCase(),
          data.types[0].type.name,
          data.stats,
          data.moves
        );
      } catch (error) {
        location.replace("./not-found.html");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("data") !== null &&
    localStorage.getItem("state") === "true"
  ) {
    const data = JSON.parse(localStorage.getItem("data"));

    const url = data.sprites.front_default;
    $img.src = url;
    setData(
      $input.value.toLowerCase(),
      data.types[0].type.name,
      data.stats,
      data.moves
    );
    localStorage.clear("data");
    localStorage.clear("state");
  }
});
