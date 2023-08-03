import { useEffect, useState } from "react";
import TrendingGraph from "./TrendingGraph";
import GraphLegend from "./GraphLegend";
import data from "./data.ts";
import ColorPicker from "./ColorPicker.tsx";
import { HexColorPicker } from "react-colorful";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState("Select Company");
  const handleSelectedSymbol = (symbol: string) => {
    setSelectedSymbol(symbol);
  };

  const [selectedPeriod, setSelectedPeriod] = useState("1D");
  const handleSelectedPeriod = (period: string) => {
    setSelectedPeriod(period);
  };

  const [selectedColor, setSelectedColor] = useState("black");
  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <TrendingGraph
        symbol={selectedSymbol}
        period={selectedPeriod}
        color={selectedColor}
      ></TrendingGraph>

      <GraphLegend
        apiEndpoint="symbols"
        onSelectedItem={setSelectedSymbol}
      ></GraphLegend>

      <GraphLegend
        apiEndpoint="periods"
        onSelectedItem={setSelectedPeriod}
      ></GraphLegend>

      <ColorPicker onSelectedItem={setSelectedColor}></ColorPicker>
    </>
  );
}

export default App;
