import './App.css';
import { useFetchCharacters } from './hooks/useFetchCharacters';
import { CharacterCard } from "./components/CharacterCard";

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const {characters:pokemon} =useFetchCharacters(urlPokemon);
  const {characters:rick} =useFetchCharacters(urlRick);

  return (

    <div className="character-card">
        <CharacterCard title="Personaje Pokemon" name={pokemon?.name} image={pokemon?.sprites?.front_default}
        />

    <CharacterCard title="Personaje de Rick and Morty" name={rick?.name} image={rick?.image} /> 
    </div>
);
}


export default App;
