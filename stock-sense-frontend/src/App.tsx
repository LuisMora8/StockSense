import { useEffect, useState } from "react";
import TrendingGraph from "./TrendingGraph";
import GraphLegend from "./GraphLegend";
import data from "./data.ts";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState("Select Company");
  const handleSelectedSymbol = (symbol: string) => {
    setSelectedSymbol(symbol);
  };

  return (
    <>
      <TrendingGraph
        symbol={selectedSymbol}
        period="1y"
        color="black"
      ></TrendingGraph>
      <GraphLegend
        apiEndpoint="symbols"
        onSelectedItem={setSelectedSymbol}
      ></GraphLegend>
    </>
  );
}

export default App;
