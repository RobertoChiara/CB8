import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src="/triskelion.png"
        width={75}
        height={70}
        alt="Logo"
      />
      <Link className={styles.navText} href="/learn">
        Learn
      </Link>
      <Link className={styles.navText} href="/contacts">
        Contacts
      </Link>
      <Link className={styles.navText} href="/copyright">
        Copyright
      </Link>
    </nav>
  );
};

export default Navbar;
