import React from 'react';
import * as api from '../api/pokemon';

export const RootContext = React.createContext();

export class Provider extends React.Component {
   state = {
      pokemons: [],
      isLoading: false,
      isOpen: false,
      pokemonSelected: null
   }

   async getPokemons() {
      try {
         const response = await api.getPokemons(0, 151);
         this.setState({ pokemons: response.data.results });   
      } catch (error) {
         console.log(`error load pokemon : ${error}`);
      }
   }


   async onGetPokemonDetail(name) {
      const response = await api.getPokemonDetail(name);
      this.setState({
         pokemonSelected: response.data,
         isOpen: true
      });
   }

   onClosePokemonDetail() {
      this.setState({ pokemonSelected: null, isOpen: false });
   }

   async onNextPrevPokemon(id, btn) {
      this.setState({ isLoading: true });
      let response;
      if(btn === 'prev') {
         response = await api.getPokemonDetail(id);
      } else if (btn === 'next') {
         response = await api.getPokemonDetail(id);
      }
      
      this.setState({ 
         pokemonSelected: response.data, 
         isLoading: false 
      });
   }

   render() {
      const reducer = {
         state: this.state,
         getPokemons: this.getPokemons.bind(this),
         getPokemonDetail: this.onGetPokemonDetail.bind(this),
         closePokemonDetail: this.onClosePokemonDetail.bind(this),
         onNextPrevPokemon: this.onNextPrevPokemon.bind(this),
      }

      return (
         <RootContext.Provider value={reducer}>
            {this.props.children}
         </RootContext.Provider>
      )
   }
}

// export const Consumer = RootContext.Consumer;
export default RootContext;