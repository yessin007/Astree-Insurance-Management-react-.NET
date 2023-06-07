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
function AddDemandeModal({ onAddItem }) {


  const { isOpen, onOpen, onClose } = useDisclosure();

  const [Reassureur, setReassureur] = useState("");
  const handleReassureur = (event) => {
    setReassureur(event.target.value);
};
  const [CompteReassureur, setCompteReassureur] = useState("");
  const handleCompteReassureur = (event) => {
    setCompteReassureur(event.target.value);
};
  const [Libelle, setLibelle] = useState("");
  const handleLibelle = (event) => {
    setLibelle(event.target.value);
};
  const [Reference, setReference] = useState("");
  const handleReference = (event) => {
    setReference(event.target.value);
};
  const [Effet, setEffet] = useState("");
  const handleEffet = (event) => {
    setEffet(event.target.value);
};
  const [Risque, setRisque] = useState("");
  const handleRisque = (event) => {
    setRisque(event.target.value);
};
  const [Montant, setMontant] = useState("");
  const handleMontant = (event) => {
    setMontant(event.target.value);
};
  const [Devis, setDevis] = useState("");
  const handleDevis = (value) => {
    setDevis(value);
};
  const [CompteAstree, setCompteAstree] = useState("");
  const handleCompteAstree = (event) => {
    setCompteAstree(event.target.value);
};
  const [Exercice, setExercice] = useState("");
  const handleExercice = (event) => {
    setExercice(event.target.value);
};
  const [Recours, setRecours] = useState("");
  const handleRecours = (event) => {
    setRecours(event.target.value);
};
  const [Commision, setCommision] = useState("");
  const handleCommision = (event) => {
    setCommision(event.target.value);
};
  const [Sinstre, setSinstre] = useState("");
  const handleSinstre = (event) => {
    setSinstre(event.target.value);
};
  const [Pb, setPb] = useState("");
  const handlePb = (event) => {
    setPb(event.target.value);
};
  const [Aed, setAed] = useState("");
  const handleAed = (event) => {
    setAed(event.target.value);
};
  const [DateAu, setDateAu] = useState("");
  const handleDateAu = (event) => {
    setDateAu(event.target.value);
};
  const [Numpolice, setNumpolice] = useState("");
  const handleNumpolice = (event) => {
    setNumpolice(event.target.value);
};
  const [Bordereau, setBordereau] = useState("");
  const handleBordereau = (event) => {
    setBordereau(event.target.value);
};
  const [Taux, setTaux] = useState("");
  const handleTaux = (event) => {
    setTaux(event.target.value);
};
  const [Monnaie, setMonnaie] = useState("");
  const handleMonnaie = (value) => {
    setMonnaie(value);
};
  const [RrcConstitue, setRrcConstitue] = useState("");
  const handleRrcConstitue = (event) => {
    setRrcConstitue(event.target.value);
};
  const [RssConstitue, setRssConstitue] = useState("");
  const handleRssConstitue = (event) => {
    setRssConstitue(event.target.value);
};
  const [Asure, setAsure] = useState("");
  const handleAsure = (event) => {
    setAsure(event.target.value);
};
  const [Nature, setNature] = useState("");
  const handleNature = (value) => {
    setNature(value);
};
  const [Obs, setObs] = useState("");
  const handleObs = (value) => {
    setObs(value);
};
  const [Virement, setVirement] = useState("");
  const handleVirement = (value) => {
    setVirement(value);
};
  const [Date, setDate] = useState("");
  const handleDate = (event) => {
    setDate(event.target.value);
};
// conv
  const [Rsslib, setRsslib] = useState("");
  const handleRsslib = (event) => {
    setRsslib(event.target.value);
};
  const [Rrcli, setRrcli] = useState("");
  const handleRrcli = (event) => {
    setRrcli(event.target.value);
};
  const [Prime, setPrime] = useState("");
  const handlePrime = (event) => {
    setPrime(event.target.value);
};
//faculta
  const [Bcfv, setBcfv] = useState("");
  const handleBcfv = (event) => {
    setBcfv(event.target.value);
};
  const [Refregt, setRefregt] = useState("");
  const handleRefregt = (event) => {
    setRefregt(event.target.value);
};



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
    {localStorage.getItem('Role')!="financier"?<Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter  demande de transfert
      </Button>:<></>}
      

      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>  Ajouter  demande de transfert</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          <form onSubmit={handleSubmit}>
                <Flex px={4}>
                <Box w="30%" px={2}>
                       
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
                                placeholder="Entrez un Libelle"
                                value={Libelle}
                                onChange={handleLibelle}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Reference</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Reference"
                                value={Reference}
                                onChange={handleReference}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Effet</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Effet"
                                value={Effet}
                                onChange={handleEffet}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Risque</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Risque"
                                value={Risque}
                                onChange={handleRisque}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Montant</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Montant"
                                value={Montant}
                                onChange={handleMontant}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Devis</FormLabel>
                            <Select value={Devis} onChange={Devis}>
                                <option value="Euro">Euro</option>
                                <option value="Dollar">Dollar</option>
                               
                            </Select>
                        </FormControl>

                        
                    </Box>
                    
                    <Box w="30%" px={2}>
                        <FormControl  isRequired mt={4}>
                                <FormLabel>Compte Astree</FormLabel>
                                <Select value={selectedOption} onChange={handleOptionChange}>
                                    <option value="Euro">Euro</option>
                                    <option value="Dollar">Dollar</option>
                                
                                </Select>
                            </FormControl>
                        
                        <FormControl isRequired mt={4}>
                            <FormLabel>Exercice</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Exercice"
                                value={Exercice}
                                onChange={handleExercice}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Recours</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Recours"
                                value={Recours}
                                onChange={handleRecours}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Commision</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Commision"
                                value={Commision}
                                onChange={handleCommision}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Sinistre</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Sinistre"
                                value={Sinstre}
                                onChange={handleSinstre}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Pb</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Pb"
                                value={Pb}
                                onChange={handlePb}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Aed</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Aed"
                                value={Aed}
                                onChange={handleAed}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Date au debut</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children={<CalendarIcon />} />
                                <Input
                                    type="date"
                                    placeholder="Entrez une date"
                                    value={DateAu}
                                    onChange={handleDateAu}
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

                    <Box w="30%" px={2}>
                       <FormControl isRequired mt={4}>
                            <FormLabel>Numpolice</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Numpolice"
                                value={Numpolice}
                                onChange={handleNumpolice}
                            />
                        </FormControl>
                        
                        <FormControl isRequired mt={4}>
                            <FormLabel>Bordereau</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Bordereau"
                                value={Bordereau}
                                onChange={handleBordereau}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Taux</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Taux"
                                value={Taux}
                                onChange={handleTaux}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Monnaie</FormLabel>
                            <Select value={Monnaie} onChange={handleMonnaie}>
                                <option value="DT">DT</option>
                                <option value="EURO">EURO</option>
                                <option value="DOLLAR">DOLLAR</option>
                                <option value="CHF">CHF</option>
                               
                            </Select>
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>RrcConstitue</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un RrcConstitue"
                                value={RrcConstitue}
                                onChange={handleRrcConstitue}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>RssConstitue</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un RssConstitue"
                                value={RssConstitue}
                                onChange={handleRssConstitue}
                            />
                        </FormControl>
                      
                        <FormControl isRequired mt={4}>
                            <FormLabel>Asurre</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Asurre"
                                value={Asure}
                                onChange={handleAsure}
                            />
                        </FormControl>

                       
                    </Box>
                    <Box w="40%" px={4}>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Nature</FormLabel>
                            <RadioGroup value={Nature} onChange={handleNature}>
                                <Stack spacing={4} direction="row">
                                    <Radio value="FAC">FAC</Radio>
                                    <Radio value="CONV">CONV</Radio>

                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        {Nature=="FAC"?<>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Bcfv</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Bcfv"
                                value={Bcfv}
                                onChange={handleBcfv}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Refregt</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Refregt"
                                value={Refregt}
                                onChange={handleRefregt}
                            />
                        </FormControl>

                        </>:<></>}
                        {Nature=="CONV"?<>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Rsslib</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Rsslib"
                                value={Rsslib}
                                onChange={handleRsslib}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Rrcli</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Rrcli"
                                value={Rrcli}
                                onChange={handleRrcli}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Prime</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un Prime"
                                value={Prime}
                                onChange={handlePrime}
                            />
                        </FormControl>

                        </>:<></>}
                       


                        <FormControl isRequired mt={6}>
                            <FormLabel>OBS</FormLabel>
                            <Select value={Obs} onChange={handleObs}>
                                <option value="DAF">DAF</option>
                                <option value="NF">NF</option>
                                <option value="En cours">En cours</option>
                                <option value="EN Attente">EN Attente</option>
                                
                                <option value="Annuler">Annuler</option>
                               
                            </Select>
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Virement</FormLabel>
                            <RadioGroup value={Virement} onChange={handleVirement}>
                                <Stack spacing={4} direction="row">
                                    <Radio value="Liquide">Liquide</Radio>
                                    <Radio value="Cheque">Cheque</Radio>

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
                                    value={Date}
                                    onChange={handleDate}
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
              Ajouter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddDemandeModal;
