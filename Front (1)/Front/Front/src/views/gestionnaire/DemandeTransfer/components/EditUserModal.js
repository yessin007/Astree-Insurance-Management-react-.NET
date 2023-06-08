import { useState } from "react";
import {
  Box,
  Flex,
  Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalBody,
ModalFooter,
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
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import AsyncSelect from 'react-select/async';
import axios from "axios";
import url from "../../../../store/api";
export default function EditUserModal({ isOpen, onClose, onSave, currentItem }) {
    const [selectedOption, setSelectedOption] = useState("DT");
    const [selectedRadioNature, setSelectedRadioNature] = useState(currentItem.nature);
    const [selectedRadioType, setSelectedRadioType] = useState(currentItem.type);
    const [inputTextValue, setInputTextValue] = useState("");
    const [selectedValueReas, setSelectedValueReas] = useState("");
    const [libelle,setLibelle] = useState(currentItem.libelle);
    const [montant,setMontant] = useState(currentItem.montant);
    const[devis,steDevis] = useState(currentItem.devis);
    const [inputDateValue, setInputDateValue] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedValueCompte, setSelectedValueCompte] = useState(null);
    const [selectedValueCompteReas, setSelectedValueCompteReas] = useState(null);
    const [inputValue, setValue] = useState('');
    const [inputValueCompte, setValueCompte] = useState('');
    const [inputValueCompteReas, setValueCompteReas] = useState('');
    const [inputValueReas, setValueReas] = useState(currentItem.reassureurName);
    const [erreurReass, setErreur] = useState("");
    const [erreurCompteReas, setErreurCompteReas] = useState("");
    const [erreurReassCompteA, setErreurCompteA] = useState("");
    const [erreurLibelles, setErreurLibelles] = useState("");
    const [erreurMontant, setErreurMontant] = useState("");
    const [erreurDevis, setErreurDevis] = useState("");
    const [erreurNature, setErreurNature] = useState("");
    const [erreurObs, setErreurObs] = useState("");
    const [erreurVirement, setErreurVirement] = useState("");

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
  };
  const handleChange = value => {
      setSelectedValue(value);
    };
    const handleChangeCompte = value => {
      setSelectedValueCompte(value);
    };
    const handleChangeCompteReas = value => {
      setSelectedValueCompteReas(value);
    };
    const handleChangeReas = value => {
      setSelectedValueReas(value);
    };
      const handleInputChange = value => {
  setValue(value);
};
const handleInputCompteChange = value => {
  setValueCompte(value);
};
const handleInputCompteReasChange = value => {
  setValueCompteReas(value);
};
const handleInputReasChange = value => {
  setValueReas(value);
};
  const handleRadioChangeNature = (value) => {
      setSelectedRadioNature(value);
  };
  const handleRadioChangeType = (value) => {
      setSelectedRadioType(value);
  };

  const handleInputTextChange = (event) => {
      setInputTextValue(event.target.value);
  };
  const handleChangeLibelle = (event) => {
      setLibelle(event.target.value);
  };
  const handleChangeMontant = (event) => {
      setMontant(event.target.value);
  };
  const handleChangeDevis = (event) => {
      steDevis(event.target.value);
  };
  const handleInputDateChange = (event) => {
      setInputDateValue(event.target.value);
  };

  const handleSave = () => {
    setErreur("");
    setErreurCompteA("");
    setErreurCompteReas("");
    setErreurDevis("");
    setErreurLibelles("");
    setErreurMontant("");
    setErreurNature("");
    setErreurObs("");
    setErreurVirement("");
    if(selectedRadioNature ==""||selectedRadioType ==""||libelle==""||selectedOption==""||montant==""||selectedValue==""||selectedValueCompte ==""||selectedValueReas==""){
        if(selectedRadioNature==""){
            setErreurNature("Veuillez remplir le champ")
        } if(selectedRadioType==""){
            setErreurVirement("Veuillez remplir le champ")
        } if(libelle==""){
            setErreurLibelles("Veuillez remplir le champ")
        } if(selectedOption==""){
            setErreurDevis("Veuillez remplir le champ")
        } if(montant==""){
            setErreurMontant("Veuillez remplir le champ")
        } if(selectedValue==""){
            setErreurObs("Veuillez remplir le champ")
        } if(selectedValueCompte==""){
            setErreurCompteA("Veuillez remplir le champ")
        } if(selectedValueReas==""){
            setErreurCompteReas("Veuillez remplir le champ")
        }
    }else{
    onSave({ date: inputDateValue,
      nature:selectedRadioNature ,
      type:selectedRadioType,
      libelle:libelle,
      certificat: "test 7ata isahel rabi w na7eha jmla 5ater tal3et matest7a9hech",
      typeMontant:selectedOption,
      montant: montant,
      etat:"non payé",
      //userId:selectedValue.userId,
      compteBancaireId:selectedValueCompte.compteBancaireId ,
      reassureurId:selectedValueReas.reassureurId,});
  }};
  const fetchUsers = () => {
    return  axios.get(url + 'Users/Gestionnaire').then(result => {
      const res =  result.data;
      return res;
    });
  };
const fetchCompte = () =>{
    return axios.get(url + 'CompteBancaire').then(result=>{
        const res = result.data;
        return res;
    });
};
const fetchCompteReas = () =>{
    console.log("test"+selectedValueReas);
    return axios.get(url + `CompteBancaire`).then(result=>{
        const res = result.data;
        console.log("test"+selectedValueReas);
        return res;
    });
};
const fetchReas = () =>{
    return axios.get(url + 'Reassureur').then(result=>{
        const res = result.data;
        console.log(result.data)
        return res;
    });
};
const handelAnnuler = ()=>{
  setErreur("");
  setErreurCompteA("");
  setErreurCompteReas("");
  setErreurDevis("");
  setErreurLibelles("");
  setErreurMontant("");
  setErreurNature("");
  setErreurObs("");
  setErreurVirement("");
  setInputDateValue("");
  setSelectedRadioNature("");
  setSelectedRadioType("");
  setLibelle("");
  setSelectedOption("");
  setMontant("");
  setSelectedValue("");
  setSelectedValueCompte("");
  setSelectedValueReas("");
  onClose();
}
  return (
    <>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier Demande de Transfert</ModalHeader>
        <ModalBody>
        <Box w="100%" px={4}>
                    <FormControl isRequired mt={4}>
                        <FormLabel >Réassureur</FormLabel>
                        <AsyncSelect
                          cacheOptions
                          defaultOptions
                          value={selectedValueReas}
                          getOptionLabel={e => e.code}
                          getOptionValue={e => e.reassureurId}
                          loadOptions={fetchReas}
                          onInputChange={handleInputReasChange}
                          onChange={handleChangeReas}
                          />
                                {erreurReass == "" ? (
                                       <></>
                                     ) : (
                            <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                            {erreurReass}
                </Text>
              )}                
                    </FormControl>
                    <FormControl  isRequired mt={4}>
                        <FormLabel>Compte Reassureur</FormLabel>
                        <AsyncSelect
                          cacheOptions
                          defaultOptions
                          value={selectedValueCompteReas}
                          getOptionLabel={e => e.numeroCompte}
                          getOptionValue={e => e.compteBancaireId}
                          loadOptions={fetchCompteReas}
                          onInputChange={handleInputCompteReasChange}
                          onChange={handleChangeCompteReas}
                          />
                           {erreurCompteReas == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurCompteReas}
                </Text>
              )}
                    </FormControl>
                    <FormControl isRequired mt={4}>
                        <FormLabel>Libelles</FormLabel>
                        <Input
                            type="text"
                            placeholder="Entrez un texte"
                            value={libelle}
                            onChange={handleChangeLibelle}
                        />
                           {erreurLibelles == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurLibelles}
                </Text>
              )}
                    </FormControl>
                    <FormControl isRequired mt={4}>
                        <FormLabel>Montant</FormLabel>
                        <Input
                            type="text"
                            placeholder="Entrez un texte"
                            value={montant}
                            onChange={handleChangeMontant}
                        />
                          {erreurMontant== "" ? (
                            <></>
                            ) : (
                            <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                                {erreurMontant}
                                </Text>
                                )}
                        
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Devis</FormLabel>
                        <Select value={selectedOption} onChange={handleOptionChange}>
                            <option value="DT">DT</option>
                            <option value="Euro">Euro</option>
                            <option value="Dollar">Dollar</option>
                           
                        </Select>
                        {erreurDevis== "" ? (
                            <></>
                            ) : (
                            <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                                {erreurDevis}
                                </Text>
                                )}
                    </FormControl>

                    <FormControl  >
                        <FormLabel>Compte Astree</FormLabel>
                        <AsyncSelect
                          cacheOptions
                          defaultOptions
                          value={selectedValueCompte}
                          getOptionLabel={e => e.id}
                          getOptionValue={e => e.userId}
                          loadOptions={fetchCompte}
                          onInputChange={handleInputCompteChange}
                          onChange={handleChangeCompte}
                          />
                          {erreurReassCompteA== "" ? (
                            <></>
                            ) : (
                            <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                                {erreurReassCompteA}
                                </Text>
                                )}
                    </FormControl>
                </Box>
                <Box w="100%" px={4}>
                    <FormControl isRequired mt={4}>
                        <FormLabel>Nature</FormLabel>
                        <RadioGroup value={selectedRadioNature} onChange={handleRadioChangeNature}>
                            <Stack spacing={4} direction="row">
                                <Radio value="Facultative">FAC</Radio>
                                <Radio value="Conventionnel">CONV</Radio>
                            </Stack>
                        </RadioGroup>
                        {erreurNature== "" ? (
                            <></>
                            ) : (
                            <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                                {erreurNature}
                                </Text>
                                )}
                    </FormControl>

                    <FormControl isRequired mt={4}>
                        <FormLabel>Virement</FormLabel>
                        <RadioGroup value={selectedRadioType} onChange={handleRadioChangeType}>
                            <Stack spacing={4} direction="row">
                                <Radio value="Liquide">Liquide</Radio>
                                <Radio value="Cheque">Cheque</Radio>
                            </Stack>

                        </RadioGroup>
                        {erreurVirement== "" ? (
                            <></>
                            ) : (
                            <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                                {erreurVirement}
                                </Text>
                                )}
                    </FormControl>
                </Box>
                <Box w="100%" px={4}>
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
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Annuler
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Sauvegarder
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
}