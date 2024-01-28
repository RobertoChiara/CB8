import Chart from "react-google-charts";
import { useEffect } from "react";

const PokemonStatsChart = ({ pokemonData }) => {
  useEffect(() => {}, [pokemonData]);

  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Stat", "Value"],
        ...pokemonData.stats.map((stat) => [stat.stat.name, stat.base_stat]),
      ]}
      options={{
        width: 150,
        height: 300,
        title: "",
        vAxis: {
          minValue: 0,
          maxValue: 200,
          color: "red",
        },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default PokemonStatsChart;
