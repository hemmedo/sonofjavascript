import React from "react";
import PokeDetail from "./PokeDetail";

const Loading = () => {
  return (
    <div style={loading}>
      <h1>Loading...</h1>
    </div>
  );
};

const SideDetail = ({
  isOpen,
  pokemon,
  onCloseDetail,
  onNextPokemon,
  onPrevPokemon,
  isLoading,
}) => {
  console.log("CURRENT POKEMON: " + JSON.stringify(pokemon));
  return (
    <div className={`side-up${isOpen ? " is-active" : ""}`}>
      {pokemon && pokemon.id > 1 ? (
        <button className="btn btn-left" onClick={() => onPrevPokemon()}>
          &larr;
        </button>
      ) : null}
      {pokemon && pokemon.id < 151 ? (
        <button className="btn btn-right" onClick={() => onNextPokemon()}>
          &rarr;
        </button>
      ) : null}
      <PokeDetail pokemon={pokemon} onCloseDetail={onCloseDetail} />
      {isLoading ? Loading() : null}
    </div>
  );
};

const loading = {
  position: "absolute",
  top: 0,
  backgroundColor: "#ffffffb0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default SideDetail;
