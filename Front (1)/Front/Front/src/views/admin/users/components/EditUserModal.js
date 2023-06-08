import { useState } from "react";
import {
  Select,
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
const roles = [
  { value: "Admin", label: "Admin" },
  { value: "Gestionnaire", label: "Gestionnaire" },
  { value: "Financier", label: "Financier" }
 
];
export default function EditUserModal({ isOpen, onClose, onSave, currentItem }) {
  const [itemName, setItemName] = useState(currentItem.firstName);
  const [itemPrenom, setItemPrenom] = useState(currentItem.lastName);
  const [itemTelephone, setItemTelephone] = useState(currentItem.telephone);
  const [itemEmail, setItemEmaiil] = useState(currentItem.email);
  const [erreurName, setErreurName] = useState("");
  const [erreurPrenom, setErreurPrenom] = useState("");
  const [erreurTel, setErreurTel] = useState("");
  const [erreurEmail, setErreurEmail] = useState("");
  const [erreur, setErreur] = useState("");
 
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedRole = roles.find((role) => role.value === selectedValue);
    setSelectedRole(selectedRole);
  };
  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemPrenomChange = (event) => {
    setItemPrenom(event.target.value);
  };
  const handleItemEmailChange = (event) => {
    setItemEmaiil(event.target.value);
  };
  const handleItemTelephoneChange = (event) => {
    setItemTelephone(event.target.value);
  };
  const handleSave = () => {
    setErreur("");
    setErreurEmail("");
    setErreurName("");
    setErreurPrenom("");
    setErreurTel("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomRegex = /^[A-Za-z]+$/;
    const isValidEmail = emailRegex.test(itemEmail);
    const nomIsValid = itemName.length >=3 && nomRegex.test(itemName);
    const prenomIsValid = itemPrenom.length >=3 &&nomRegex.test(itemPrenom);
    const telIsValide = itemTelephone.length >=8 ;
    if (!isValidEmail|| !nomIsValid || !prenomIsValid || !telIsValide) {
      // setloggedIn("true");
      if(!nomIsValid){
        setErreurName("Veuillez saisir uniquement des lettres. !");
      }
      if(!prenomIsValid){
        setErreurPrenom("Veuillez saisir uniquement des lettres. !");
      }
      if(!telIsValide){
        setErreurTel("Veuillez saisir au moins 8 lettres!");
      }
      if(!isValidEmail){
        setErreurEmail("E-mail non valide");
      }
      
    }
    else {
     
    onSave({ id: currentItem.id, name: itemName, prenom: itemPrenom , email: itemEmail,telephone:itemTelephone,role:currentItem.role});
  }};
  const handelAnnuler = () =>{
    setErreur("");
    setErreurEmail("");
    setErreurName("");
    setErreurPrenom("");
    setErreurTel("");
    setItemName("");
    setItemPrenom("");
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier l'utilisateur</ModalHeader>
       
        <ModalBody>
            <FormControl>
              <FormLabel>Nom *</FormLabel>
              <Input
                placeholder="Entrez le nom de l'utilisteur"
                value={itemName}
                onChange={handleItemNameChange}
              />
               {erreurName == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurName}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Prénom *</FormLabel>
              <Input
                placeholder="Entrez le prénom de l'utilisteur"
                value={itemPrenom}
                onChange={handleItemPrenomChange}
              />
               {erreurPrenom == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurPrenom}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Email *</FormLabel>
              <Input
                placeholder="Entrez l'email de l'utilisteur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              /> {erreurEmail == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurEmail}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Télèphone *</FormLabel>
              <Input
                placeholder="Entrez le télèphone de l'utilisteur"
                value={itemTelephone}
                type="number"
                onChange={handleItemTelephoneChange}
              />
               {erreurTel == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreurTel}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Select value={selectedRole.value} onChange={handleRoleChange}>
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </Select>
            </FormControl>
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
  );
}