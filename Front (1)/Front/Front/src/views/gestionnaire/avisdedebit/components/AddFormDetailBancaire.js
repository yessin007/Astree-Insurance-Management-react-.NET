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

const AddFormDetailBancaire = ({onSave,onRetour}) => {
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
      const  handleRetour = () => {
        onRetour(false);
      };
    return (

        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                    Avis de Debit
                    </Text>

                </Box>
            </Flex>
            <HSeparator />
            <form onSubmit={handleSubmit}>
                <Flex px={4} justifyContent="center" alignItems="center" >
                    <Box w="60%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Nom</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Adresse</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Comptes Bancaire</FormLabel>
                            <Select value={selectedOption} onChange={handleOptionChange}>
                                <option value="Euro">compte 1</option>
                                <option value="Dollar">compte 2</option>
                               
                            </Select>
                        </FormControl>

                      
                    </Box>
                   

                       
                </Flex>

                <Flex justifyContent="center" alignItems="center" >
                    <Button mt={4} mr={2} colorScheme="gray" onClick={handleRetour}>
                        Retour
                    </Button>
                    <Button mt={4} ml={2} colorScheme="blue" onClick={handleSave}>
                        Enregistrer
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddFormDetailBancaire;
