import Link from "next/link";
import styles from "@/styles/Learn.module.scss";

export default function Learn() {
  return (
    <div className={styles.container}>
      <Link className={styles.homeButton} href="/">
        Go back to Homepage
      </Link>
      <h1 className={styles.title}>How It Works</h1>

      <p className={styles.text}>
        The application is a web-based platform designed to visualize the
        distribution of animal species in Sicily. Users can select different
        taxa categories such as birds, amphibians, reptiles, and mammals to
        explore their distribution across the region. Upon selecting a taxa
        category, the user can further narrow down their search by selecting a
        specific species from the available options. The app fetches data from
        the GBIF API (Global Biodiversity Information Facility) to display the
        distribution of selected species on a heatmap overlaid on an interactive
        map. Additionally, the app features a navigation bar for easy access to
        different sections, including the homepage, map visualization, learning
        resources, and contact information. A modern and minimalistic design
        aesthetic is implemented throughout the application, providing a
        user-friendly experience. Additionally, the app includes features such
        as dynamic updates based on user selections and integration with
        external APIs like Pexels for displaying images related to selected
        species.
      </p>
    </div>
  );
}
