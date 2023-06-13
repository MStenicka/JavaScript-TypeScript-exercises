import { Pokemon } from './Pokemon';

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Bulbasaur', 'grass', 'water'),
    new Pokemon('Pikachu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'grass'),
    new Pokemon('Pidgeot', 'flying', 'fighting'),
    new Pokemon('Kingler', 'water', 'fire'),
  ];
}

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
let pokemonOfAsh: Pokemon[] = initializePokemon();

// A wild pokemon appeared!
let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
function chooseEffective(pokemonOfAsh: Pokemon[], wildPokemon: Pokemon) {
  for (let i: number = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
      return pokemonOfAsh[i];
    }
  }
}

console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

export { chooseEffective };
