export const getPokemon = async (pokemon) => {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(`Failed to fetch Pokemon: ${error.message}`);
  }
};
