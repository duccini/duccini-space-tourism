import Astro from "../Astro";
import { SelectAstro } from "../SelectAstro";

import styles from "./styles.module.scss";

type AstroDataType = {
  name: string;
  text: string;
  distance: string;
  time: string;
  image: {
    alt: string;
    path: string;
  };
};

type SelectAstroProps = {
  astro: string;
  handleCLick: (value: string) => void;
  astroData: AstroDataType;
};

export default function AstroCard({
  astro,
  handleCLick,
  astroData,
}: SelectAstroProps) {
  return (
    <div className={styles.content}>
      <div className={styles.contentImage}>
        <Astro alt={astroData.image.alt} path={astroData.image.path} />
      </div>
      <div className={styles.contentInfo}>
        <SelectAstro astro={astro} handleCLick={handleCLick} />
        <h1>{astroData.name}</h1>
        <p>{astroData.text}</p>

        <hr className={styles.divider} />
      </div>
    </div>
  );
}
