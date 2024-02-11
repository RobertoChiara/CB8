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
      <p className={styles.text}>
        Data licensing In 2014, following a community-wide consultation, the
        GBIF Governing Board established a general policy to ensure that all
        species occurrence datasets within the network are associated with
        digital licenses equivalent to one of…three choices supplied by Creative
        Commons: CC0, under which data are made available for any use without
        restriction or particular requirements on the part of users CC BY, under
        which data are made available for any use provided that attribution is
        appropriately given for the sources of data used, in the manner
        specified by the owner CC BY-NC, under which data are made available for
        any use provided that attribution is appropriately given and provided
        the use is not for commercial purposes As of August 2016, all
        open-access species occurrence datasets on GBIF.org carry standardized,
        machine-readable licences. These changes improve transparency and
        reproducibility and support GBIF mission to promote free and open access
        to biodiversity data. GBIF provides its open-access infrastructure to
        support scientific understanding and improve biodiversity and
        conservation outcomes. We will continue to promote attribution (CC BY)
        as the standard practice for citing GBIF-mediated data, believing that
        it reflects an established norm that the communities we serve use to
        cite original work.
      </p>
    </div>
  );
}
