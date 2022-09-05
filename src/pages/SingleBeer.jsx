import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function SingleBeer({ Beers }) {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();
  console.log(beerId);

  useEffect(() => {
    const filteredArr = Beers.find((beer) => beer._id === beerId);
    console.log(filteredArr);
    setBeer(filteredArr);
  }, [beerId, Beers]);

  return (
    <div className="AllBeersList">
      <Header />
      <Link to="/">🔙</Link>
      <h1>{beer.name}</h1>
      <img src={beer.image_url} alt="beer" className="beerSize"></img>
      <h2>{beer.tagline}</h2>
      <h3>First Brewed: {beer.first_brewed}</h3>
      <h4>Attenuation Level: {beer.attenuation_level}</h4>
      <p>{beer.description}</p>
      <p>Creator: {beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
