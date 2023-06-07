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
  useDisclosure,
} from "@chakra-ui/react";
const roles = [
  { value: "Reassureur", label: "Réassureur" },
  
 
];
function AddUserModal({ onAddItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemName, setItemName] = useState("");
  const [itemPrenom, setItemPrenom] = useState("");
  const [itemTelephone, setItemTelephone] = useState("");
  const [itemPassword, setItemPassword] = useState("");
  const [itemCpassword, setItemCpassword] = useState("");
  const [itemEmail, setItemEmail] = useState("");
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


  const handleAddItem = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(itemEmail);
    const hasUppercase = /[A-Z]/.test(itemPassword);
    const hasLowercase = /[a-z]/.test(itemPassword);
    const hasNumber = /\d/.test(itemPassword);
    const isValid = itemPassword.length >= 8 && hasUppercase && hasLowercase && hasNumber && (itemPassword==itemCpassword);
    if(isValid && isValidEmail){

    
     onAddItem(itemName, itemPrenom, itemEmail,selectedRole.value,itemTelephone,itemPassword);
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
        Ajouter un réassureur
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un réassureur</ModalHeader>
          <ModalBody>
          <FormControl isRequired>
              <FormLabel>Email </FormLabel>
              <Input
                placeholder="Entrez l'email de la réassureur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Nationalité </FormLabel>
              <Input
                placeholder="Entrez nationalité de la réassureur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Adresse </FormLabel>
              <Input
                placeholder="Entrez l'adresse de la réassureur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Pays transfert </FormLabel>
              <Input
                placeholder="Entrez pays transfert de la réassureur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              />
            </FormControl>
           
            <FormControl isRequired>
              <FormLabel>Code swift</FormLabel>
              <Input
                placeholder="Entrez le code swift de la réassureur"
                value={itemTelephone}
                type="number"
                onChange={handleItemTelephoneChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Code bic</FormLabel>
              <Input
                placeholder="Entrez le code bic de la réassureur"
                value={itemTelephone}
                type="number"
                onChange={handleItemTelephoneChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password </FormLabel>
              <Input
                placeholder="Entrez le Password de la réassureur"
                value={itemPassword}
                onChange={handleItemPasswordChange}
                type="password"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm Password </FormLabel>
              <Input
                placeholder="Confirm Password"
                value={itemCpassword}
                onChange={handleItemCpasswordChange}
                type="password"
              />
            </FormControl>
          
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Annuler</Button>
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
