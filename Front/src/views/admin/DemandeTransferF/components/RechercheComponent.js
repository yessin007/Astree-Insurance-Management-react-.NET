import { useState } from "react";
import { Input, Button, Stack } from "@chakra-ui/react";

function RechercheComponent({ onApplyFilter }) {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleApplyFilter = () => {
    onApplyFilter(filterValue);
  };

  return (
    <Stack spacing={3} direction="row">
      <Input placeholder="Filtrer par code" value={filterValue} onChange={handleFilterChange} />
      <Button colorScheme='blue' variant='outline' onClick={handleApplyFilter}>filtre</Button>
    </Stack>
  );
}

export default RechercheComponent;