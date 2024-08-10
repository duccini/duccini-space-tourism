"use client";

import Container from "@/components/Container";
import Content from "@/components/Content";

import styles from "./styles.module.scss";
import { useState } from "react";
import Tech from "./_components/Tech";

export default function Technology() {
  const [tech, setTech] = useState("launch-vehiche");
  return (
    <Container backgroundImage="/technology-background.jpg">
      <Content>
        <h2>
          <span>03</span> SPACE LAUNCH 101
        </h2>
        <div className={styles.techControlAndComponent}>
          <div className={styles.selectTech}>
            <div
              className={
                tech === "launch-vehiche"
                  ? `${styles.activeTech}`
                  : `${styles.inactiveTech}`
              }
              onClick={() => setTech("launch-vehiche")}
            >
              1
            </div>
            <div
              className={
                tech === "spaceport"
                  ? `${styles.activeTech}`
                  : `${styles.inactiveTech}`
              }
              onClick={() => setTech("spaceport")}
            >
              2
            </div>
            <div
              className={
                tech === "space-capsule"
                  ? `${styles.activeTech}`
                  : `${styles.inactiveTech}`
              }
              onClick={() => setTech("space-capsule")}
            >
              3
            </div>
          </div>
          <Tech />
        </div>
      </Content>
    </Container>
  );
}
