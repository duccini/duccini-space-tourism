"use client";

import { useState } from "react";
import Container from "../_components/Container";
import Astro from "./_components/Astro";

import styles from "./styles.module.scss";
import { SelectAstro } from "./_components/SelectAstro";

export default function Destination() {
  const [astro, setAstro] = useState("moon");

  const handleSelectedAstro = (value: string) => {
    setAstro(value);
  };

  return (
    <Container>
      <main>
        <div className={styles.contentWrap}>
          <h2>
            <span>01</span> PICK YOUR DESTINATION
          </h2>

          {astro === "moon" && (
            <div key="moon" className={styles.content}>
              <div className={styles.contentImage}>
                <Astro alt="Moon" path="/moon.png" />
              </div>
              <div className={styles.contentInfo}>
                <SelectAstro astro={astro} handleCLick={handleSelectedAstro} />
                <h1>Moon</h1>
                <p>
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>

                <hr className={styles.divider} />
              </div>
            </div>
          )}

          {astro === "mars" && (
            <div key="mars" className={styles.content}>
              <div className={styles.contentImage}>
                <Astro alt="Mars" path="/mars.png" />
              </div>
              <div className={styles.contentInfo}>
                <SelectAstro astro={astro} handleCLick={handleSelectedAstro} />
                <h1>Mars</h1>
                <p>
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>

                <hr className={styles.divider} />
              </div>
            </div>
          )}

          {astro === "europa" && (
            <div key="europa" className={styles.content}>
              <div className={styles.contentImage}>
                <Astro alt="Europa" path="/europa.png" />
              </div>
              <div className={styles.contentInfo}>
                <SelectAstro astro={astro} handleCLick={handleSelectedAstro} />
                <h1>Europa</h1>
                <p>
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </p>

                <hr className={styles.divider} />
              </div>
            </div>
          )}

          {astro === "titan" && (
            <div key="titan" className={styles.content}>
              <div className={styles.contentImage}>
                <Astro alt="Titan" path="/titan.png" />
              </div>
              <div className={styles.contentInfo}>
                <SelectAstro astro={astro} handleCLick={handleSelectedAstro} />
                <h1>Titan</h1>
                <p>
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>

                <hr className={styles.divider} />
              </div>
            </div>
          )}
        </div>
      </main>
    </Container>
  );
}
