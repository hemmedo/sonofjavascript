import React, { Component } from "react";
import { withAppContext } from "../store/withAppContext";

import FilterBar from "./FilterBar";
import PokeList from "./PokeList";
import SideDetail from "./SideDetail";

import "../styles/main.scss";

class App extends Component {
  state = {
    search: "",
    pokemonCategory: "all",
    filtered: [],
  };

  componentDidMount() {
    this.props.context.getPokemons();
  }

  onGetDetail = (name) => {
    document.body.style.overflow = "hidden";
    this.props.context.getPokemonDetail(name);
  };

  onNextPokemon = () => {
    const next = this.props.context.state.pokemonSelected.id + 1;
    this.props.context.onNextPrevPokemon(next, "next");
  };

  onPrevPokemon = () => {
    const pokemonSelected = this.props.context.state.pokemonSelected.id;
    const prev = pokemonSelected - 1;
    this.props.context.onNextPrevPokemon(prev, "prev");
  };

  onCloseDetail = () => {
    document.body.style.overflow = "initial";
    this.props.context.closePokemonDetail();
  };

  selectByType = (ev) => {
    this.setState({ pokemonCategory: ev.target.value });
    this.props.context.getPokemons();
  };

  searchHandleChange = (ev) => {
    this.setState({ search: ev.target.value });
  };

  render() {
    // console.log(this.props, 'test');
    const { context } = this.props;

    const filteredPokemons = context.state.pokemons.filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <div className="container">
        <div className="header">
          <h2 className="title-page">First Generation Pokemons</h2>
          <FilterBar
            search={this.state.search}
            searchHandle={this.searchHandleChange}
            pokemonCategory={this.state.pokemonCategory}
            selectByType={this.selectByType}
            onSearchSubmit={this.onSearchSubmit}
          />
        </div>
        {!context.state.pokemons.length ? (
          <div className="retrieve-data">Loading Pokemon...</div>
        ) : (
          <PokeList
            pokemons={filteredPokemons}
            clickDetail={this.onGetDetail}
            isLoading={context.state.isLoading}
            search={this.state.search}
            pokemonCategory={this.state.pokemonCategory}
          />
        )}
        <SideDetail
          isOpen={context.state.isOpen}
          pokemon={context.state.pokemonSelected}
          onCloseDetail={this.onCloseDetail}
          onNextPokemon={this.onNextPokemon}
          onPrevPokemon={this.onPrevPokemon}
          isLoading={context.state.isLoading}
        />
        <div className="overlay" onClick={this.onCloseDetail}></div>
      </div>
    );
  }
}

export default withAppContext(App);
