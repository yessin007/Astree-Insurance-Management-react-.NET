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
                        Lettre BT
                    </Text>

                </Box>
            </Flex>

            <Flex px={4} justifyContent="center" alignItems="center">
                <Box w="40%" px={4}>

                    <FormLabel mt={4}>N°IBAN: 11</FormLabel>

                    <FormLabel mt={4}>La somme de : **** </FormLabel>
                    <FormLabel mt={4}>Au profit de : ****</FormLabel>
                    <FormLabel mt={4}>Compte N° : ****</FormLabel>
                    <FormLabel mt={4}>Code SWIFT : ****</FormLabel>
                    <FormLabel mt={4}>Code BIC : ****</FormLabel>
                    <FormLabel mt={4}>Bank : ****</FormLabel>




                </Box>


                <Box w="40%" px={4}>
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
