import Menu from "./_components/Menu";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />

      <main>
        <h1>SPACE</h1>
        <p>Teste teste teste</p>
      </main>
    </div>
  );
}
