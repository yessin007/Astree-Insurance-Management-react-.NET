import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export default function EditUserModal({ isOpen, onClose, onSave, currentItem }) {
  const [itemName, setItemName] = useState(currentItem.nom);
  const [itemTelephone, setItemTelephone] = useState(currentItem.telephone);
  const [itemPassord, setItemPassord] = useState(currentItem.password);
  const [itemCpassword, setItemCpassword] = useState(currentItem.password);
  const [itemCode, setItemCode] = useState(currentItem.code);
  const [itemNationalite, setItemNationalite] = useState(currentItem.nationalite);
  const [itemAdresse, setItemAdresse] = useState(currentItem.adresse);
  const [itemPaysTransfer, setItemPaysTransfer] = useState(currentItem.paysTransfer);
  const [itemCodeSwift, setItemCodeSwift] = useState(currentItem.codeSwift);
  const [itemCodeBic, setItemCodeBic] = useState(currentItem.codeBic);
  const [itemEmail, setItemEmaiil] = useState(currentItem.email);
  const [erreurNom, setErreurNom] = useState("");
  const [erreurTelephone, setErreurTelephone] = useState("");
  const [erreurPassord, setErreurPassord] = useState("");
  const [erreurCode, setErreurCode] = useState("");
  const [erreurNationalite, setErreurNationalite] = useState("");
  const [erreurAdresse, setErreurAdresse] = useState("");
  const [erreurPaysTransfer, setErreurPaysTransfer] = useState("");
  const [erreurCodeSwift, setErreurCodeSwift] = useState("");
  const [erreurCodeBic, setErreurCodeBic] = useState("");
  const [erreurEmail, setErreurEmaiil] = useState("");
  const handleItemCpasswordChange = (event) => {
    setItemCpassword(event.target.value);
  };
  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleItemEmailChange = (event) => {
    setItemEmaiil(event.target.value);
  };
  const handleItemPasswordChange = (event) => {
    setItemPassord(event.target.value);
  };
  const handleItemCodeChange = (event) => {
    setItemCode(event.target.value);
  };
  const handleItemNationaliteChange = (event) => {
    setItemNationalite(event.target.value);
  };
  const handleItemAdresseChange = (event) => {
    setItemAdresse(event.target.value);
  };
  const handleItemPaysTransferChange = (event) => {
    setItemPaysTransfer(event.target.value);
  };
  const handleItemCodeSwiftChange = (event) => {
    setItemCodeSwift(event.target.value);
  };
  const handleItemCodeBicChange = (event) => {
    setItemCodeBic(event.target.value);
  };
  const handleItemTelephoneChange = (event) => {
    setItemTelephone(event.target.value);
  };
  const handleSave = () => {
    setErreurAdresse("");
    setErreurCode("");
    setErreurCodeBic("");
    setErreurCodeSwift("");
    setErreurEmaiil("");
    setErreurNationalite("");
    setErreurNom("");
    setErreurPassord("");
    setErreurPaysTransfer("");
    setErreurTelephone("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomRegex = /^[A-Za-z]+$/;
    const codeRegex = /^[A-Za-z0-9]+$/;
    const isValidEmail = emailRegex.test(itemEmail);
    const hasUppercase = /[A-Z]/.test(itemPassord);
    const hasLowercase = /[a-z]/.test(itemPassord);
    const hasNumber = /\d/.test(itemPassord);
    const nomIsValid = itemName.length >=3 && nomRegex.test(itemName);
    const telIsValide = itemTelephone.length >=8 ;
    const codeBicIsValide = itemCodeBic.length >=8 &&  itemCodeBic.length <=11 &&  codeRegex.test(itemCodeBic);
    const codeSwiftIsValide = itemCodeSwift.length >=8 && itemCodeSwift.length<=11 && codeRegex.test(itemCodeSwift);
    const isValid = itemPassord.length >= 8 && hasUppercase && hasLowercase && hasNumber && (itemPassord==itemCpassword);
    if (!isValidEmail || !isValid || !nomIsValid || !telIsValide || !codeBicIsValide || !codeSwiftIsValide || itemAdresse =="" || itemCode =="" ||itemNationalite=="" ||itemPaysTransfer =="" ) {
      // setloggedIn("true");
      if(!nomIsValid){
        setErreurNom("Veuillez saisir uniquement des lettres. !");
      }
      if(!telIsValide){
        setErreurTelephone("Veuillez saisir au moins 8 lettres!");
      }
      if(!isValidEmail){
        setErreurEmaiil("E-mail non valide");
      }
      if(!isValid){
        setErreurPassord("mot de passe non valide");
      }
      if(!codeBicIsValide){
        setErreurCodeBic("Veuillez saisir entre 8 et 11 caractères!")
      }
      if(!codeSwiftIsValide){
        setErreurCodeSwift("Veuillez saisir entre 8 et 11 caractères!")
      }
      if(itemAdresse==""){
        setErreurAdresse("Veuillez remplir le champ!")
      }
      if(itemNationalite==""){
        setErreurNationalite("Veuillez remplir le champ!")
      }
      if(itemPaysTransfer==""){
        setErreurPaysTransfer("Veuillez remplir le champ!")
      }
      if(itemCode==""){
        setErreurCode("Veuillez remplir le champ!")
      }
    }
    else {
    onSave({ reassureurId: currentItem.reassureurId, email:itemEmail,telephone:itemTelephone,password:itemPassord,nom: itemName,code: itemCode,nationalite:itemNationalite,adresse:itemAdresse,paysTransfer:itemPaysTransfer,codeSwift:itemCodeSwift,codeBic:itemCodeBic});
  }};
  const handelAnnuler = ()=>{
    setItemName("");
    setItemTelephone("");
    setItemPassord("");
    setItemEmaiil("");
    setItemAdresse("");
    setItemCode("");
    setItemCodeBic("");
    setItemCodeSwift("");
    setItemNationalite("");
    setItemPaysTransfer("");
    setErreurAdresse("");
    setErreurCode("");
    setErreurCodeBic("");
    setErreurCodeSwift("");
    setErreurEmaiil("");
    setErreurNationalite("");
    setErreurNom("");
    setErreurPassord("");
    setErreurPaysTransfer("");
    setErreurTelephone("");
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier le réassureur</ModalHeader>
       
      <ModalBody>
            <FormControl>
              <FormLabel>Nom </FormLabel>
              <Input
                placeholder="Entrez le nom de l'utilisteur"
                value={itemName}
                onChange={handleItemNameChange}
              />
               {erreurNom == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurNom}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Telephone </FormLabel>
              <Input
                placeholder="Entrez le Tel de la Reassureur"
                value={itemTelephone}
                onChange={handleItemTelephoneChange}
              />
              {erreurTelephone == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurTelephone}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Password </FormLabel>
              <Input
                placeholder="Entrez le Password de la Reassureur"
                value={itemPassord}
                type="password"
                onChange={handleItemPasswordChange}
              />
              {erreurPassord== "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurPassord}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password * </FormLabel>
              <Input
                placeholder="Confirm Password"
                value={itemCpassword}
                type="password"
                onChange={handleItemCpasswordChange}
              />
              {erreurPassord== "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurPassord}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Email </FormLabel>
              <Input
                placeholder="Entrez l'email du Reassureur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              />
               {erreurEmail == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurEmail}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Code </FormLabel>
              <Input
                placeholder="Entrez le code du Reassureur"
                value={itemCode}
                onChange={handleItemCodeChange}
              />
               {erreurCode == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurCode}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Nationalite </FormLabel>
              <Input
                placeholder="Entrez la nationalite du Reassureur"
                value={itemNationalite}
                onChange={handleItemNationaliteChange}
              />
              {erreurNationalite == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurNationalite}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Adresse </FormLabel>
              <Input
                placeholder="Entrez l'adresse du Reassureur"
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
            <FormControl>
              <FormLabel>la pays de Transfer </FormLabel>
              <Input
                placeholder="Entrez la pay du Reassureur"
                value={itemPaysTransfer}
                onChange={handleItemPaysTransferChange}
              />
               {erreurPaysTransfer == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurPaysTransfer}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>codeSwift </FormLabel>
              <Input
                placeholder="Entrez le codeSwift du Reassureur"
                value={itemCodeSwift}
                onChange={handleItemCodeSwiftChange}
              />
               {erreurCodeSwift == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurCodeSwift}
                </Text>
              )}
            </FormControl>
            <FormControl>
            <FormLabel>codeBic </FormLabel>
              <Input
                placeholder="Entrez le codeBic du Reassureur"
                value={itemCodeBic}
                onChange={handleItemCodeBicChange}
              />
               {erreurCodeBic == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurCodeBic}
                </Text>
              )}
            </FormControl>
          </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={handelAnnuler}>
            Annuler
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Sauvegarder
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}