"use client";

import { useState } from "react";
import Container from "@/components/Container";

import styles from "./styles.module.scss";
import AstroCard from "./_components/AstroCard";

import { astros } from "@/data";
console.log();

export default function Destination() {
  const [astro, setAstro] = useState("moon");

  const handleSelectedAstro = (value: string) => {
    setAstro(value);
  };

  return (
    <Container backgroundImage="/destination-backround.jpg">
      <main>
        <div className={styles.contentWrap}>
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
        </div>
      </main>
    </Container>
  );
}
