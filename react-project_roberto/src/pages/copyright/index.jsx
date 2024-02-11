import Link from "next/link";
import styles from "@/styles/copyright.module.scss";

export default function Copyright() {
  return (
    <div className={styles.container}>
      <Link className={styles.homeButton} href="/">
        Go back to Homepage
      </Link>

      <h2>
        Agreements, policies and disclaimers relating to access and use of
        GBIF-mediated data and services
      </h2>
      <p className={styles.text}>
        GBIF is an international open data infrastructure, funded by
        governments. It is not a data provider, but it provides access to
        information about life on Earth. GBIF makes its data available via a
        variety of mechanisms, including an open API, a website, and
        downloadable files. GBIF also provides tools and training to help people
        use the data.
      </p>
    </div>
  );
}
