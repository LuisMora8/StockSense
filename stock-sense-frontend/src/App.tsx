import { useState } from "react";
import TrendingGraph from "./TrendingGraph";
import GraphLegend from "./GraphLegend";
import data from "./data.ts";

function onSelectedItem(selectedItem: string) {
  console.log(selectedItem);
}

function App() {
  return (
    <>
      <TrendingGraph></TrendingGraph>
      <GraphLegend
        items={data.labels}
        onSelectedItem={onSelectedItem}
      ></GraphLegend>
    </>
  );
}

export default App;
