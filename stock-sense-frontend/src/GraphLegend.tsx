import { useState } from "react";

interface Props {
  items: string[];
  onSelectedItem: (item: string) => void;
}

function GraphLegend({ items, onSelectedItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const handleSelect = (selectedValue: string) => {
    setSelectedItem(selectedValue);
    onSelectedItem(selectedValue);
  };

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
        {items.map((item, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleSelect(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GraphLegend;
