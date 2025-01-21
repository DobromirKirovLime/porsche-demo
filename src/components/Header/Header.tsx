import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.routes} href="/">
        LOGO
      </Link>
      <Link className={styles.routes} href="/about">
        About
      </Link>
    </header>
  );
};
