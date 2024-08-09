import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Menu from "../Menu";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className={styles.container}>
      <Menu />
      {children}
    </div>
  );
}
