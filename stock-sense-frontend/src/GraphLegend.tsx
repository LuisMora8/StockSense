import { useEffect, useState } from "react";

interface Props {
  apiEndpoint: string;
  onSelectedItem: (item: string) => void;
}

interface APIData {
  [key: string]: string;
}

function GraphLegend({ apiEndpoint, onSelectedItem }: Props) {
  const [selectedItem, setSelectedItem] = useState("- - -");
  const [items, setItems] = useState<APIData>({});

  const handleSelect = (selectedValue: string) => {
    setSelectedItem(selectedValue);
    onSelectedItem(selectedValue);
  };

  const fetchDataFromAPI = async () => {
    try {
      // Fetch data from API
      const response = await fetch("http://127.0.0.1:5000/" + apiEndpoint);
      const data = await response.json();
      // Set the state with retrieved data
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to fetch initial data when the component mounts
  useEffect(() => {
    fetchDataFromAPI();
  }, [apiEndpoint]); // empty dependency array so it runs on first render

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedItem}
      </button>
      <ul className="dropdown-menu">
        {Object.entries(items).map(([key, value]) => (
          <li key={key}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleSelect(key)}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GraphLegend;
