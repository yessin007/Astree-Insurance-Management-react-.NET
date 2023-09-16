import { useState } from "react";
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Select,
    Radio,
    RadioGroup,
    Stack,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputRightElement,
    IconButton,
    FormHelperText,
    Text
} from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
import { CalendarIcon } from "@chakra-ui/icons";

const AddForm = ({onSave}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedRadio, setSelectedRadio] = useState("");
    const [inputTextValue, setInputTextValue] = useState("");
    const [inputDateValue, setInputDateValue] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleRadioChange = (value) => {
        setSelectedRadio(value);
    };

    const handleInputTextChange = (event) => {
        setInputTextValue(event.target.value);
    };

    const handleInputDateChange = (event) => {
        setInputDateValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Do something with selectedOption, selectedRadio, inputTextValue, and inputDateValue
    };
    const handleSave = () => {
        onSave(true);
      };
    return (

        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Demande transfert
                    </Text>

                </Box>
            </Flex>
            <HSeparator />
            <form onSubmit={handleSubmit}>
                <Flex px={4}>
                    <Box w="30%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel >Réassureur</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Libelles</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Montant</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Devis</FormLabel>
                            <Select value={selectedOption} onChange={handleOptionChange}>
                                <option value="Euro">Euro</option>
                                <option value="Dollar">Dollar</option>
                               
                            </Select>
                        </FormControl>

                        <FormControl  isRequired mt={4}>
                            <FormLabel>Compte Astree</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>
                    </Box>
                    <Box w="30%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Nature</FormLabel>
                            <RadioGroup value={selectedRadio} onChange={handleRadioChange}>
                                <Stack spacing={4} direction="row">
                                    <Radio value="radio1">FAC</Radio>
                                    <Radio value="radio2">CONV</Radio>

                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>OBS</FormLabel>
                            <Select value={selectedOption} onChange={handleOptionChange}>
                                <option value="DAF">DAF</option>
                                <option value="DT">DT</option>
                                <option value="EN INSTANCE">EN INSTANCE</option>
                                <option value="NF">NF</option>
                                <option value="SMAILI">SMAILI</option>
                                <option value="MOLKA">MOLKA</option>
                                <option value="KOLSI">KOLSI</option>
                                <option value="ASMA">ASMA</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Virement</FormLabel>
                            <RadioGroup value={selectedRadio} onChange={handleRadioChange}>
                                <Stack spacing={4} direction="row">
                                    <Radio value="radio1">Liquide</Radio>
                                    <Radio value="radio2">Cheque</Radio>

                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box w="30%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Date</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children={<CalendarIcon />} />
                                <Input
                                    type="date"
                                    placeholder="Entrez une date"
                                    value={inputDateValue}
                                    onChange={handleInputDateChange}
                                />
                                <InputRightElement>
                                    <IconButton
                                        aria-label="Effacer la date"
                                        icon={<CalendarIcon />}
                                        onClick={() => setInputDateValue("")}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            {/* <FormHelperText>Sélectionnez une date dans le calendrier</FormHelperText> */}
                        </FormControl>
                    </Box>
                </Flex>

                <Flex justifyContent="center" alignItems="center">
                    <Button mt={4} colorScheme="blue" onClick={handleSave}>
                        Suivant
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddForm;
