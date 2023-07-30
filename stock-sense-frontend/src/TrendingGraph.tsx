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
interface Props {}

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Price',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'red',
//     },
//     {
//       label: 'Sentiment',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'orange',
//     },
//   ],
// };

function TrendingGraph() {
  // // symbol hook
  // const [selectedSymbol, setSelectedSymbol] = useState("AAPL");
  // const handleSymbol = (selectedSymbol: string) => {
  //   setSelectedSymbol(selectedSymbol);
  //   onSelectedSymbol(selectedSymbol); // Create function
  // };

  // // horizontal scale hook
  // const [selectedHorizontal, setSelectedHorizontal] = useState("1D");
  // const handleHorizontalScale = (selectedHorizontal: string) => {
  //   setSelectedHorizontal(selectedHorizontal);
  //   onSelectedHorizontal(selectedHorizontal); // Create function
  // };

  // // vertical scale hook
  // const [selectedVertical, setSelectedVertical] = useState("auto");
  // const handleVerticalScale = (selectedVertical: string) => {
  //   setSelectedVertical(selectedVertical);
  //   onSelectedVertical(selectedVertical); // Create function
  // };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const fetchDataFromAPI = async () => {
    try {
      // Fetch data from API
      const response = await fetch("your-api-url");
      const data = await response.json();

      // Set the state with retrieved data
      setChartData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to fetch initial data when the component mounts
  useEffect(() => {
    fetchDataFromAPI();
  }, []); // empty dependency array so it runs on first render

  return (
    <>
      <h2>Trending Data</h2>
      <Line data={chartData} />
    </>
  );
}

export default TrendingGraph;
