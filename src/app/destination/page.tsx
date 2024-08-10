"use client";

import { useState } from "react";
import Container from "@/components/Container";

import AstroCard from "./_components/AstroCard";

import { astros } from "@/data";
import Content from "@/components/Content";

export default function Destination() {
  const [astro, setAstro] = useState("moon");

  const handleSelectedAstro = (value: string) => {
    setAstro(value);
  };

  return (
    <Container backgroundImage="/destination-backround.jpg">
      <Content>
        <h2>
          <span>01</span> PICK YOUR DESTINATION
        </h2>

        {astro === "moon" && (
          <AstroCard
            key="moon"
            astro={astro}
            handleCLick={handleSelectedAstro}
            astroData={astros.moon}
          />
        )}

        {astro === "mars" && (
          <AstroCard
            key="mars"
            astro={astro}
            handleCLick={handleSelectedAstro}
            astroData={astros.mars}
          />
        )}

        {astro === "europa" && (
          <AstroCard
            key="europa"
            astro={astro}
            handleCLick={handleSelectedAstro}
            astroData={astros.europa}
          />
        )}

        {astro === "titan" && (
          <AstroCard
            key="titan"
            astro={astro}
            handleCLick={handleSelectedAstro}
            astroData={astros.titan}
          />
        )}
      </Content>
    </Container>
  );
}
