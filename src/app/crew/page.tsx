"use client";

import Container from "@/components/Container";
import Content from "@/components/Content";
import { useState } from "react";

import { crew } from "@/data";
import Astronaut from "./_components/Astronaut";

import douglas from "/public/douglas.png";
import mark from "/public/mark.png";
import victor from "/public/victor.png";
import anousheh from "/public/anousheh.png";

import styles from "./styles.module.scss";

export default function Crew() {
  const [astronaut, setAstronaut] = useState("douglas");
  return (
    <Container backgroundImage="/crew-background.jpg">
      <Content>
        <h2>
          <span>02</span> MEET YOUR CREW
        </h2>

        {astronaut === "douglas" && (
          <Astronaut key="douglas" member={crew.douglas} image={douglas} />
        )}

        {astronaut === "mark" && (
          <Astronaut key="mark" member={crew.mark} image={mark} />
        )}

        {astronaut === "victor" && (
          <Astronaut key="victor" member={crew.victor} image={victor} />
        )}

        {astronaut === "anousheh" && (
          <Astronaut key="anousheh" member={crew.anousheh} image={anousheh} />
        )}

        <div className={styles.selectAstronaut}>
          <div className={styles.selectAstronautContainer}>
            <div
              className={
                astronaut === "douglas"
                  ? `${styles.activeAstronaut}`
                  : `${styles.inactiveAstronaut}`
              }
              onClick={() => setAstronaut("douglas")}
            ></div>
            <div
              className={
                astronaut === "mark"
                  ? `${styles.activeAstronaut}`
                  : `${styles.inactiveAstronaut}`
              }
              onClick={() => setAstronaut("mark")}
            ></div>
            <div
              className={
                astronaut === "victor"
                  ? `${styles.activeAstronaut}`
                  : `${styles.inactiveAstronaut}`
              }
              onClick={() => setAstronaut("victor")}
            ></div>
            <div
              className={
                astronaut === "anousheh"
                  ? `${styles.activeAstronaut}`
                  : `${styles.inactiveAstronaut}`
              }
              onClick={() => setAstronaut("anousheh")}
            ></div>
          </div>
        </div>
      </Content>
    </Container>
  );
}
