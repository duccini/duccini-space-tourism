import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

export default function Content({ children }: Props) {
  return (
    <main>
      <div className={styles.contentWrap}>{children}</div>
    </main>
  );
}
