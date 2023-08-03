import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface Props {
  onSelectedItem: (item: string) => void;
}

function ColorPicker({ onSelectedItem }: Props) {
  const [color, setColor] = useState("#FFFFFF");
  const handleColorChange = (selectedValue: string) => {
    setColor(selectedValue);
    onSelectedItem(selectedValue);
  };

  return (
    <>
      <HexColorPicker color={color} onChange={handleColorChange} />
    </>
  );
}

export default ColorPicker;
