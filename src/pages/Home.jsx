import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link to="/beers">Beer List</Link>
      <br />
      <Link to="/new-beer">Add Beer</Link>
    </div>
  );
}

export default Home;
