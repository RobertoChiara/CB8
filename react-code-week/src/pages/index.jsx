import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";
import axios from "axios";
import Navbar from "./components/Navbar";
import MapComponent from "./components/MapComponent";
import ImagePopup from "./components/ImagePopup";

export default function Home() {
  const [selectedTaxa, setSelectedTaxa] = useState("");
  const [speciesData, setSpeciesData] = useState([]);
  const [uniqueSpeciesNames, setUniqueSpeciesNames] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("speciesData");
    if (storedData) {
      setSpeciesData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const uniqueNames = [
      ...new Set(speciesData.map((species) => species.species)),
    ];
    setUniqueSpeciesNames(uniqueNames.sort());
  }, [speciesData]);

  const taxaOptions = [
    { value: "Birds", label: "Birds" },
    { value: "Amphibia", label: "Amphibia" },
    { value: "Reptiles", label: "Reptiles" },
    { value: "Mammals", label: "Mammals" },
  ];

  const handleTaxaChange = (e) => {
    setSelectedTaxa(e.target.value);
    setSelectedSpecies("");
    fetchData(e.target.value);
  };

  const fetchData = async (taxa) => {
    try {
      let response;
      switch (taxa) {
        case "Birds":
          response = await axios.get(
            "https://api.gbif.org/v1/occurrence/search?taxon_key=212&occurrence_status=present&limit=1000&gadm_gid=ITA.15_1"
          );
          break;
        case "Amphibia":
          response = await axios.get(
            "https://api.gbif.org/v1/occurrence/search?taxon_key=131&occurrence_status=present&limit=1000&gadm_gid=ITA.15_1"
          );
          break;
        case "Reptiles":
          response = await axios.get(
            "https://api.gbif.org/v1/occurrence/search?basis_of_record=HUMAN_OBSERVATION&limit=1000&offset=2000&taxon_key=11592253&occurrence_status=present&gadm_gid=ITA.15_1"
          );
          break;
        case "Mammals":
          response = await axios.get(
            "https://api.gbif.org/v1/occurrence/search?taxon_key=359&limit=1000&occurrence_status=present&gadm_gid=ITA.15_1"
          );
          break;
        default:
          return;
      }
      setSpeciesData(response.data.results);
      localStorage.setItem(
        "speciesData",
        JSON.stringify(response.data.results)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSpeciesChange = (e) => {
    setSelectedSpecies(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Animals Map Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>Sicily Species Distribution</h1>
        <p className={styles.description}>
          On this page you can visualize a heatmap of the distribution of
          Sicilian animals
        </p>
        <div>
          <select
            className={styles.dropdown}
            value={selectedTaxa}
            onChange={handleTaxaChange}
          >
            <option value="">Select a taxa</option>
            {taxaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {selectedTaxa && (
          <div>
            <label htmlFor="speciesDropdown">Select a species:</label>
            <select
              id="speciesDropdown"
              className={styles.dropdown}
              value={selectedSpecies}
              onChange={handleSpeciesChange}
            >
              <option value="">Select a species</option>
              {uniqueSpeciesNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}
        <ImagePopup selectedSpecies={selectedSpecies} />
        <MapComponent
          speciesData={speciesData}
          selectedSpecies={selectedSpecies}
        />
      </main>
    </>
  );
}
