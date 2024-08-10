import TechImage from "../TechImage";
import TechInfo from "../TechInfo";
import styles from "./styles.module.scss";

export default function Tech() {
  return (
    <div className={styles.techContainer}>
      <div className={styles.techInfo}>
        <TechInfo />
      </div>
      <div className={styles.techImage}>
        <TechImage />
      </div>
    </div>
  );
}
