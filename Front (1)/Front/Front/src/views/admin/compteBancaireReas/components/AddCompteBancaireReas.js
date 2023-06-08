import { useState } from "react";
import {
  Select,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import url from "../../../../store/api";
import AsyncSelect from 'react-select/async';
function AddCompteModal({ onAddItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemNumeroCompte, setItemNumeroCompte] = useState("");
  const [itemRib, setItemRib] = useState("");
  const [itemIban, setItemIban] = useState("");
  const [itemBanque, setItemBanque] = useState("");
  const [itemAgence, setItemAgence] = useState("");
  const [itemAdresse, setItemAdresse] = useState("");
  const [itemReasId, setItemReasId] = useState("");
  const [selectedValueAstree,setSelectedValueAstree] = useState("");
  const [erreurNum, setErreurNum] = useState("");
  const [erreurRib, setErreurRib] = useState("");
  const [erreurIban, setErreurIban] = useState("");
  const [erreurBanque, setErreurBanque] = useState("");
  const [erreurAgence, setErreurAgence] = useState("");
  const [erreurAdresse, setErreurAdresse] = useState("");
  const [erreurReas, setErreurReas] = useState("");

  // const [itemName, setItemName] = useState("");

  const handleItemNumeroCompteChange = (event) => {
    setItemNumeroCompte(event.target.value);
  };
  const handleItemRibChange = (event) => {
    setItemRib(event.target.value);
  };
  const handleItemIbanChange = (event) => {
    setItemIban(event.target.value);
  };
  const handleItemBanqueChange = (event) => {
    setItemBanque(event.target.value);
  };
  const handleItemAgenceChange = (event) => {
    setItemAgence(event.target.value);
  };
  const handleItemAdresseChange = (event) =>{
    setItemAdresse(event.target.value);
  }
  const handleReasIdChange = value => {
    setItemReasId(value);
  };
  const handleInputReasChange = value => {
    setSelectedValueAstree(value);
  };
  const fetchReas = () =>{
    return axios.get(url + 'Reassureur').then(result=>{
        const res = result.data;
        console.log(result.data)
        return res;
    });
};
const handelAnnuler = () =>{
  setItemNumeroCompte("");
  setItemRib("");
  setItemIban("");
  setItemBanque("");
  setItemAdresse("");
  setItemAgence("");
  setItemReasId("");
  setErreurAdresse("");
  setErreurAgence("");
  setErreurBanque("");
  setErreurIban("");
  setErreurNum("");
  setErreurRib("");
  setErreurNum("");
  setErreurReas("");
  onClose();
}
  const handleAddItem = () => {
    const RibRegex = /^[0-9]+$/;
    const isValidRib = RibRegex.test(itemRib) && itemRib.length >= 23;
    const isValidIban = RibRegex.test(itemIban) && itemIban.length === 27;
    if (!isValidIban || !isValidRib || itemReasId == ""|| itemAdresse == "" || itemAgence == "" || itemBanque =="" || itemNumeroCompte =="") {
      if(!isValidIban){
        setErreurIban("Veuillez saisir le numéro IBAN qui est composé de 27 chiffres!");
      }
      if(!isValidRib){
        setErreurRib("Veuillez saisir  le numéro RIB qui est composé de 23 chiffres!");
      }
      if(itemReasId == "" ){
        setErreurReas("Veuillez remplir le champ");
      }
      if(itemAdresse == "" ){
        setErreurAdresse("Veuillez remplir le champ");
      }
      if(itemAgence == ""){
        setErreurAgence("Veuillez remplir le champ");
      }if(itemBanque == ""){
        setErreurBanque("Veuillez remplir le champ");
      }
      if(itemNumeroCompte  == ""){
        setErreurNum("Veuillez remplir le champ");
      }
      
    } else {
    onAddItem(itemNumeroCompte,itemRib,itemIban,itemBanque, itemAgence, itemAdresse,itemReasId);
    setItemNumeroCompte("");
    setItemRib("");
    setItemIban("");
    setItemBanque("");
    setItemAdresse("");
    setItemAgence("");
    setItemReasId("");
    onClose();
  }};
  return (
    <>
      <Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter un Compte Bancaire Reassureur
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un Compte Bancaire</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Numero </FormLabel>
              <Input
                placeholder="Entrez le numero"
                value={itemNumeroCompte}
                onChange={handleItemNumeroCompteChange}
              />
               {erreurNum == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurNum}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Rib </FormLabel>
              <Input
                placeholder="Entrez le Rib"
                value={itemRib}
                onChange={handleItemRibChange}
              />
               {erreurRib == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurRib}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Iban </FormLabel>
              <Input
                placeholder="Entrez le Iban"
                value={itemIban}
                onChange={handleItemIbanChange}
              />
                {erreurIban == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurIban}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>banque </FormLabel>
              <Input
                placeholder="Entrez le banque"
                value={itemBanque}
                onChange={handleItemBanqueChange}
              />
                  {erreurBanque == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurBanque}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Agence </FormLabel>
              <Input
                placeholder="Entrez l'agence"
                value={itemAgence}
                onChange={handleItemAgenceChange}
              />
                  {erreurAgence == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurAgence}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Adresse </FormLabel>
              <Input
                placeholder="Entrez l'adresse"
                value={itemAdresse}
                onChange={handleItemAdresseChange}
              />
                {erreurAdresse == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurAdresse}
                </Text>
              )}
            </FormControl>
            <FormControl isRequired mt={4}>
                            <FormLabel >Reassureur</FormLabel>
                            <AsyncSelect
                              cacheOptions
                              defaultOptions
                              value={itemReasId}
                              getOptionLabel={e => e.nom}
                              getOptionValue={e => e.reassureurId}
                              loadOptions={fetchReas}
                              onInputChange={handleInputReasChange}
                              onChange={handleReasIdChange}
                              />
                                      {erreurReas == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurReas}
                </Text>
              )}        
                        </FormControl>
           
          </ModalBody>
          <ModalFooter>
            <Button onClick={handelAnnuler}>Annuler</Button>
            <Button
              colorScheme="blue"
              onClick={handleAddItem}
              ml={3}
              disabled={!itemNumeroCompte}
            >
              Ajouter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddCompteModal;
