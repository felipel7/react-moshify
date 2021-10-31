import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Domain from "../components/Domain/Domain";
import Plans from "../components/Plans/Plans";
import Features from "../components/Features/Features";
import Showcase from "../components/Showcase/Showcase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Domain />
      <Plans />
      <Features />
      <Showcase />
    </div>
  );
}
