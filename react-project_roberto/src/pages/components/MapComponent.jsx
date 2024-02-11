import React from "react";
import MapGL from "react-map-gl";
import Heatmap from "./Heatmap";
import styles from "@/styles/MapComponent.module.scss";

const MapComponent = ({ speciesData, selectedSpecies }) => {
  return (
    <div className={styles.mapContainer}>
      <MapGL
        className={styles.map}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        width="100vw"
        height="50vh"
        initialViewState={{
          longitude: 14.1,
          latitude: 37.1,
          zoom: 6,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        {speciesData.length > 0 && (
          <Heatmap
            speciesData={speciesData}
            selectedSpecies={selectedSpecies}
          />
        )}
      </MapGL>
    </div>
  );
};

export default MapComponent;
