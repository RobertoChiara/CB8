import Chart from "react-google-charts";
import { useEffect } from "react";

const PokemonStatsChart = ({ pokemonData }) => {
  useEffect(() => {
    // Carica la libreria Google Charts
    google.charts.load("current", { packages: ["corechart"] });
    // Imposta la callback per disegnare il grafico
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Crea l'array di dati per il grafico
      const statsData = [
        ["Stat", "Value"],
        ...(pokemonData.stats || []).map((stat) => [
          stat.stat.name,
          stat.base_stat,
        ]),
      ];

      // Converte l'array di dati in un oggetto DataTable
      const data = google.visualization.arrayToDataTable(statsData);

      // Opzioni del grafico
      const options = {
        title: "Pokemon Stats",
        legend: { position: "none" },
        vAxis: { minValue: 0, maxValue: 200 },
      };

      // Crea un'istanza del grafico a barre e lo disegna
      const chart = new google.visualization.BarChart(
        document.getElementById("pokemonStatsChart")
      );

      chart.draw(data, options);
    }
  }, [pokemonData]);

  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Stat", "Value"],
        ...(pokemonData.stats || []).map((stat) => [
          stat.stat.name,
          stat.base_stat,
        ]),
      ]}
      options={{
        title: "Pokemon Stats",
        legend: { position: "none" },
        vAxis: { minValue: 0, maxValue: 200 },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default PokemonStatsChart;
