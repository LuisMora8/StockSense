import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//import data from "./data.ts";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Create Interface to pass data to the component
interface Props {
  symbol: string;
  period: string;
  color: string;
}

function TrendingGraph({ symbol, period, color }: Props) {
  const [chartData, setChartData] = useState({
    labels: [""],
    datasets: [
      {
        label: "Prices",
        data: [],
        borderColor: "black",
      },
    ],
  });

  const fetchDataFromAPI = async (
    symbol: string,
    period: string,
    color: string
  ) => {
    try {
      // Fetch data from API
      const response = await fetch(
        "http://127.0.0.1:5000/" + symbol + "/historical/" + period
      );
      const data = await response.json();

      // Create chart data from retreived history
      const fetched_data = {
        labels: data["label"],
        datasets: [
          {
            label: data["company"] + " (" + symbol + ")",
            data: data["prices"],
            borderColor: color,
          },
        ],
      };

      // Set the state with retrieved data
      setChartData(fetched_data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to fetch initial data when the component mounts
  useEffect(() => {
    fetchDataFromAPI(symbol, period, color);
  }, [symbol, period, color]); // trigger the effect whenever symbol or period changes

  return (
    <>
      <h2>Trending Data</h2>
      <Line data={chartData} />
    </>
  );
}

export default TrendingGraph;
