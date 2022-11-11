import { getPokemon } from "../operations/get.js";
import { checkInput } from "../utils/check_input.js";

const $input = document.getElementById("name");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkInput) {
    getPokemon($input.value.toLowerCase()).then((data) => {
      if (data !== undefined) {
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.setItem("state", "true");
        location.replace("./index.html");
      }
      if (data === undefined) {
        location.replace("./not-found.html");
      }
    });
  }
});
