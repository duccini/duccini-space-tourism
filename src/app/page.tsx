import Link from "next/link";
import styles from "./page.module.scss";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container backgroundImage="/homepage-background.jpg">
      <main>
        <div className={styles.homehero}>
          <div className={styles.homeheroContent}>
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.homeheroAction}>
            <Link href="/destinations">
              <div className={styles.oval}>Explore</div>
            </Link>
          </div>
        </div>
      </main>
    </Container>
  );
}
