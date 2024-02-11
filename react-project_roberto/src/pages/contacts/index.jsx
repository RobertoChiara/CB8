import Link from "next/link";
import styles from "@/styles/Contacts.module.scss";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <Link href="/" className={styles.homeButton}>
        Go back to Homepage
      </Link>
      <h1 className={styles.title}>Contacts</h1>
      <p className={styles.email}>Email: roberto.chiara90@gmail.com</p>
      <a className={styles.link} href="https://github.com/RobertoChiara/">
        GitHub
      </a>
      <br />
      <a className={styles.link} href="https://edgemony.com/">
        Edgemony
      </a>
    </div>
  );
}
