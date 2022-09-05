import { Link } from "react-router-dom";

function Beers({ Beers }) {
  return (
    <div className="AllBeersList">
      <Link to="/">🔙</Link>
      <h1>All Beers</h1>
      {Beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt="beer" className="beerSize"></img>
            <br></br>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            <p>{beer.tagline}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
