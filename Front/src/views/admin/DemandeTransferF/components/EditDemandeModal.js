import { useState } from "react";
import {
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  RadioGroup,
  Stack,
  Radio,
InputGroup,
InputLeftAddon,
IconButton,
InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
const roles = [
  { value: "admin", label: "Administrateur" },
  { value: "moderator", label: "Modérateur" },
  { value: "user", label: "Utilisateur" },
];
function EditDemandeModal({ isOpen, onClose, onSave, currentItem }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
  // const [itemName, setItemName] = useState("");
  // const [itemPrenom, setItemPrenom] = useState("");

  // const [itemEmail, setItemEmaiil] = useState("");
  // const [itemName, setItemName] = useState("");

  // const handleItemNameChange = (event) => {
  //   setItemName(event.target.value);
  // };
  // const handleItemPrenomChange = (event) => {
  //   setItemPrenom(event.target.value);
  // };
  // const handleItemEmailChange = (event) => {
  //   setItemEmaiil(event.target.value);
  // };


  const handleAddItem = () => {
    // onAddItem(itemName, itemPrenom, itemEmail,selectedRole.value);
    // setItemName("");
    // setItemPrenom("");
    // setItemEmaiil("");
    // onClose();
  };
  //role
  // const [selectedRole, setSelectedRole] = useState(roles[0]);
  // const handleRoleChange = (event) => {
  //   const selectedValue = event.target.value;
  //   const selectedRole = roles.find((role) => role.value === selectedValue);
  //   setSelectedRole(selectedRole);
  // };
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
     // onSave(true);
    };
  return (
    <>
      {/* <Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter demande de transfert
      </Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modifier un demande transfert</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          <form onSubmit={handleSubmit}>
                <Flex px={4}>
                    <Box w="50%" px={4}>
                        {/* <FormControl isRequired mt={4}>
                            <FormLabel >Réassureur</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={inputTextValue}
                                onChange={handleInputTextChange}
                            />
                        </FormControl> */}
                         <FormControl isRequired mt={4}>
                            <FormLabel>Réassureur</FormLabel>
                            <Select value={selectedOption} onChange={handleOptionChange}>
                                <option value="Reas1">Reass1</option>
                                <option value="Reas2">Reass2</option>
                               
                            </Select>
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Compte Réassureur</FormLabel>
                            <Select value={selectedOption} onChange={handleOptionChange}>
                                <option value="Reas1">Reass1</option>
                                <option value="Reas2">Reass2</option>
                               
                            </Select>
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
                            <Select value={selectedOption} onChange={handleOptionChange}>
                                <option value="Euro">Euro</option>
                                <option value="Dollar">Dollar</option>
                               
                            </Select>
                        </FormControl>
                    </Box>
                    <Box w="40%" px={4}>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Nature</FormLabel>
                            <RadioGroup value={selectedRadio} onChange={handleRadioChange}>
                                <Stack spacing={4} direction="row">
                                    <Radio value="radio1">FAC</Radio>
                                    <Radio value="radio2">CONV</Radio>

                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl isRequired mt={6}>
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
                    {/* <Box w="30%" px={4}>
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
                        </FormControl>
                    </Box> */}
                </Flex>

                {/* <Flex justifyContent="center" alignItems="center">
                    <Button mt={4} colorScheme="blue" onClick={handleSave}>
                        Suivant
                    </Button>
                </Flex> */}
            </form>






















            {/* <Button
              colorScheme="blue"
              onClick={handleAddItem}
              ml={3}
              disabled={!itemName}
            > */}

          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Annuler</Button>
            <Button
              colorScheme="blue"
             
              ml={3}
             
            >
              Modifier
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditDemandeModal;
