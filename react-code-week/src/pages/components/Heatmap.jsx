import React from "react";
import { Source, Layer } from "react-map-gl";
import Legend from "./Legend";

const Heatmap = ({ speciesData, selectedSpecies }) => {
  const filteredSpeciesData = speciesData.filter(
    (species) => species.species === selectedSpecies
  );

  console.log("Filtered species data:", filteredSpeciesData);

  const features = filteredSpeciesData.map((species) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [species.decimalLongitude, species.decimalLatitude],
    },
    properties: {},
  }));

  const weights = filteredSpeciesData.map(
    (species) => species.individualCount || 1
  );

  const heatmapLayer = {
    id: "heatmap",
    type: "heatmap",
    paint: {
      "heatmap-weight": ["interpolate", ["linear"], ["get", "mag"], 0, 0, 6, 1],
      "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1],
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0,
        "rgba(33,102,172,0)",
        0.2,
        "rgb(103,169,207)",
        0.4,
        "rgb(209,229,240)",
        0.6,
        "rgb(253,219,199)",
        0.8,
        "rgb(239,138,98)",
        1,
        "rgb(255,201,101)",
      ],
      "heatmap-radius": 20,
      "heatmap-opacity": 1,
    },
  };

  return (
    <>
      <Source type="geojson" data={{ type: "FeatureCollection", features }}>
        <Layer {...heatmapLayer} />
      </Source>
      <Legend />
    </>
  );
};

export default Heatmap;
