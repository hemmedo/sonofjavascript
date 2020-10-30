import React from 'react';
import { setIdFromURL } from '../utils';

const PokeItem = ({ pokemon, clickDetail }) => {
   const imgURL = 'https://img.pokemondb.net/sprites/black-white/anim/normal/';
   return (
      <div className="columns lg-3 sm-6">
         <div className="poke-item" onClick={() => clickDetail(setIdFromURL(pokemon.url))} >
            <div className="image">
               <img src={`${imgURL + pokemon.name}.gif`} alt={`${pokemon.name}`} />
            </div>
            <div className="content">
               <h2 className="name">{pokemon.name}</h2>
            </div>
         </div>
      </div>
   );
}

const PokeList = (props) => {
   const { pokemons, clickDetail} = props;
   // console.log(pokemons);
   return (
      <div className="row" style={{ paddingTop: '15rem' }}>
         {pokemons.map((pokemon, idx) => (
            <PokeItem
               key={idx}
               pokemon={pokemon}
               clickDetail={clickDetail}
            />
         ))}
         

      </div>
   );
}
export default PokeList;