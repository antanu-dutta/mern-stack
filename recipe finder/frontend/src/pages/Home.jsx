import React from "react";
import Banner from "../components/UI/Banner";
import Popular from "../components/UI/Popular";
import Trending from "../components/UI/Trending";

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      <Banner />
      <Popular />
      <Trending />
    </main>
  );
};

export default Home;
