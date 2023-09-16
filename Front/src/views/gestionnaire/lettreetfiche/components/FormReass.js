import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Text,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Button,
  Flex,
  Box
} from "@chakra-ui/react";

// function FormBt() {
const FormBt = ({onSave}) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const handleSave = () => {
    onSave(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Gender:", gender);
    // Do something with the form data
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box  w="50%" px={4}>
      <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Lettre Reass
                    </Text>

                </Box>
            </Flex>
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Reass</FormLabel>
        <Input
          type="text"
          value={name}
          placeholder="Entrez une reass"
          onChange={(event) => setName(event.target.value)}
        />
      </FormControl>

      <FormControl isRequired mt={4}>
        {/* <FormLabel>Gender</FormLabel> */}
        <Flex justifyContent="center" alignItems="center">
        <RadioGroup value={gender} onChange={(value) => setGender(value)}>
          <Stack direction="row">
            {/* <Radio value="male">Male</Radio> */}
            <Radio value="DEV">DEV</Radio>
            <Radio value="DIN">DIN</Radio>
          </Stack>
        </RadioGroup>
        </Flex>
      </FormControl>
      <Flex justifyContent="center" alignItems="center">
      <Button mt={4} colorScheme="blue" onClick={handleSave}>
        Affiher
      </Button>
      </Flex>
    </form>
    </Box>
    </Flex>
  );
}
export default FormBt;