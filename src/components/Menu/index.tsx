"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "/public/space-tourism-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const currentRoute = usePathname();

  return (
    <header className={styles.container}>
      <div className={styles.menuContent}>
        <Image
          src={logo}
          alt="Duccini Space Tourism"
          quality={100}
          height={48}
          width={48}
        />
        <div className={styles.navbarBackground}></div>
        <div className={styles.navmenu}>
          <nav>
            <li className={currentRoute === "/" ? `${styles.activeClass}` : ""}>
              <Link href="/">
                <span>01</span> HOME
              </Link>
            </li>
            <li
              className={
                currentRoute === "/destination" ? `${styles.activeClass}` : ""
              }
            >
              <Link href="/destination">
                <span>02</span> DESTINATION
              </Link>
            </li>
            <li
              className={
                currentRoute === "/crew" ? `${styles.activeClass}` : ""
              }
            >
              <Link href="/crew">
                <span>03</span> CREW
              </Link>
            </li>
            <li
              className={
                currentRoute === "/technology" ? `${styles.activeClass}` : ""
              }
            >
              <Link href="/technology">
                <span>04</span> TECHNOLOGY
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}
