import { createSignal, For, type Component, type JSX } from 'solid-js';
import type { FavoritePokemon } from '../interfaces/pokemons-list.response.ts';

interface Props {
  children: JSX.Element;
}


const getLocalStoragePokemons = (): FavoritePokemon[] => {

  let favoritePokemons: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

  let valide = favoritePokemons.every(favoritePokemon => typeof favoritePokemon.name === 'string' && typeof favoritePokemon.id === 'string');
        //console.log(valide);

/*   favoritePokemons.forEach(function(favoritePokemon) {
      console.log(favoritePokemon.id, favoritePokemon.name);
  });  */

  return favoritePokemons;
};



export const FavoriteList = () => {
/* const [counter, setCounter] = createSignal(10);

     return (
    <>
      <h1 class="text-4xl">Counter</h1>
      <h3 class="text-xl">Value { counter() }</h3>
    
      <button
      onclick={() => setCounter((prev) => ++prev)}
      class="bg-blue-500 p-2 mr-2 rounded"
      > +1 </button>

       <button
      onclick={() => setCounter((prev) => --prev)}
      class="bg-blue-500 p-2 mr-2 rounded"
      > -1 </button>
    </>
  );  */
  
  

  /* interface favoritePokemon {
        id: string;
        name: string;   
    }

   
        let favoritePokemons: favoritePokemon[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
        let valide = favoritePokemons.every(favoritePokemon => typeof favoritePokemon.name === 'string' && typeof favoritePokemon.id === 'string');
        //console.log(valide);

        favoritePokemons.forEach(function(favoritePokemon) {
            console.log(favoritePokemon.id, favoritePokemon.name);
        }); */
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

   /* { favoritePokemons.map (( pokemon ) => {  */
      return ( 
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-5">

          <For each={ pokemons() }>
            {(pokemon) => 
            
            <a class="rounded flex flex-col justify-center items-center p-2 border" href={`/pokemons/${pokemon.name}`} >
            
               <img style={`view-transition-name: ${ pokemon.name }-image`} class="w-30 h-30" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
             
              <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
            </a>
            }
          </For>
        </div>
       /*  <PokemonCard name={pokemon.name} id={pokemon.id}/>  */
      );
  /* })  
 } */

};