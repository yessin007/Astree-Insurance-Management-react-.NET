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
// import { HSeparator } from "components/separator/Separator";
// import { CalendarIcon } from "@chakra-ui/icons";

const LettreReass = ({ onSave, onRetour }) => {
    const handleSave = () => {
        onSave(true);
    };
    const handleRetour = () => {
        onRetour(false);
    };
    return (

        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                    Fiche Information
                    </Text>

                </Box>
            </Flex>

            <Flex px={4} justifyContent="center" alignItems="center">
                {/* <Box w="40%" px={4}>

                  

                    <FormLabel mt={4}>Affaire suivre par : **** </FormLabel>
                    <FormLabel mt={4}>Poste : ****</FormLabel>
                    <FormLabel mt={4}>Reassurance N° : ****</FormLabel>
                  




                </Box> */}


                <Box w="80%" px={4}>
                    <Text fontSize="2xl" fontWeight="bold">
                        Affiher
                    </Text>

                </Box>
            </Flex>

            <Flex justifyContent="center" alignItems="center" >

                <Button mt={4} ml={2} colorScheme="blue" >
                    Imprimer
                </Button>
            </Flex>

        </Box>
    );
};

export default LettreReass;
