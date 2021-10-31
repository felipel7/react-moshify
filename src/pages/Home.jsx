import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Domain from "../components/Domain/Domain";
import Plans from "../components/Plans/Plans";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Domain />
      <Plans />
    </div>
  );
}
