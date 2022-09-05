import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeerPage from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";
import NewBeer from "./pages/NewBeer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      //console.log(response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<Header />}> */}
        <Route path="/beers" element={<Beers Beers={beers} />} />
        <Route path="/beers/:beerId" element={<SingleBeer Beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeer />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
