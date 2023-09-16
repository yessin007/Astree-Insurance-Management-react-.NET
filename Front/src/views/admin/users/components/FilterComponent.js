import { useState } from "react";
import { Select } from "@chakra-ui/react";

function FilterComponent({ options, onSelectFilter }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectFilter(value);
  };

  return (
    <Select value={selectedOption} onChange={handleSelect}>
      <option value="">Sélectionner une role</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default FilterComponent;