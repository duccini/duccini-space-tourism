import styles from "./styles.module.scss";

type SelectAstroProps = {
  astro: string;
  handleCLick: (value: string) => void;
};

export function SelectAstro({ astro, handleCLick }: SelectAstroProps) {
  return (
    <div className={styles.selectAstro}>
      <ul>
        <li
          className={astro === "moon" ? `${styles.activeClass}` : ""}
          onClick={() => handleCLick("moon")}
        >
          MOON
        </li>
        <li
          className={astro === "mars" ? `${styles.activeClass}` : ""}
          onClick={() => handleCLick("mars")}
        >
          MARS
        </li>
        <li
          className={astro === "europa" ? `${styles.activeClass}` : ""}
          onClick={() => handleCLick("europa")}
        >
          EUROPA
        </li>
        <li
          className={astro === "titan" ? `${styles.activeClass}` : ""}
          onClick={() => handleCLick("titan")}
        >
          TITAN
        </li>
      </ul>
    </div>
  );
}
