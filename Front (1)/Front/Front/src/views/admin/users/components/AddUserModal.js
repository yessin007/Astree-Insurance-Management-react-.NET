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
const roles = [
  { value: "Admin", label: "Admin" },
  { value: "Gestionnaire", label: "Gestionnaire" },
  { value: "Financier", label: "Financier" }
 
];
function AddUserModal({ onAddItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemName, setItemName] = useState("");
  const [itemPrenom, setItemPrenom] = useState("");
  const [itemTelephone, setItemTelephone] = useState("");
  const [itemPassword, setItemPassword] = useState("");
  const [itemCpassword, setItemCpassword] = useState("");
  const [itemEmail, setItemEmail] = useState("");
  const [erreurName, setErreurName] = useState("");
  const [erreurPrenom, setErreurPrenom] = useState("");
  const [erreurTel, setErreurTel] = useState("");
  const [erreurEmail, setErreurEmail] = useState("");
  const [erreur, setErreur] = useState("");

  // const [itemName, setItemName] = useState("");
  
  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };


  const handleItemPrenomChange = (event) => {
    setItemPrenom(event.target.value);
  };
  const handleItemEmailChange = (event) => {
    setItemEmail(event.target.value);
  };
  const handleItemTelephoneChange = (event) => {
    setItemTelephone(event.target.value);
  };
  const handleItemPasswordChange = (event) => {
    setItemPassword(event.target.value);
  };
  const handleItemCpasswordChange = (event) => {
    setItemCpassword(event.target.value);
  };
  const handelAnnuler = () =>{
    setErreur("");
    setErreurEmail("");
    setErreurName("");
    setErreurPrenom("");
    setErreurTel("");
    setItemName("");
    setItemTelephone("");
    setItemCpassword("");
    setItemPassword("");
    setItemPrenom("");
    setItemEmail("");
    onClose();
  }


  const handleAddItem = () => {
    setErreur("");
    setErreurEmail("");
    setErreurName("");
    setErreurPrenom("");
    setErreurTel("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomRegex = /^[A-Za-z]+$/;
    const isValidEmail = emailRegex.test(itemEmail);
    const hasUppercase = /[A-Z]/.test(itemPassword);
    const hasLowercase = /[a-z]/.test(itemPassword);
    const hasNumber = /\d/.test(itemPassword);
    const nomIsValid = itemName.length >=3 && nomRegex.test(itemName);
    const prenomIsValid = itemPrenom.length >=3 &&nomRegex.test(itemPrenom);
    const telIsValide = itemTelephone.length >=8 ;
    const isValid = itemPassword.length >= 8 && hasUppercase && hasLowercase && hasNumber && (itemPassword==itemCpassword);
    if (!isValidEmail || !isValid || !nomIsValid || !prenomIsValid || !telIsValide) {
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
      if(!isValid){
        setErreur("mot de passe non valide");
      }
      
    }
    else {
     
     onAddItem(itemName, itemPrenom, itemEmail,selectedRole.value,itemTelephone,itemPassword,itemCpassword);
     setItemName("");
     setItemTelephone("");
     setItemCpassword("");
     setItemPassword("");
     setItemPrenom("");
     setItemEmail("");
     onClose();
  }
  };
  //role
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedRole = roles.find((role) => role.value === selectedValue);
    setSelectedRole(selectedRole);
  };
  return (
    <>
      <Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter un utilisateur
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un utilisteur</ModalHeader>
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
              <FormLabel>Password *</FormLabel>
              <Input
                placeholder="Entrez le Password de l'utilisteur"
                type="password"
                value={itemPassword}
                onChange={handleItemPasswordChange}
              />
               {erreur == "" ? (
                <></>
              ) : (
                <Text mb="36px" ms="4px" color="red" fontWeight="400" fontSize="md">
                  {erreur}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password *</FormLabel>
              <Input
                placeholder="Confirm Password"
                value={itemCpassword}
                type="password"
                onChange={handleItemCpasswordChange}
              />
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
            <Button onClick={handelAnnuler}>Annuler</Button>
            <Button
              colorScheme="blue"
              onClick={handleAddItem}
              ml={3}
              disabled={!itemName}
            >
              Ajouter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddUserModal;
