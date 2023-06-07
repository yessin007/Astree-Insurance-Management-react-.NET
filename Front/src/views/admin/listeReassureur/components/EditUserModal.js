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
} from "@chakra-ui/react";

export default function EditUserModal({ isOpen, onClose, onSave, currentItem }) {
  // const [itemName, setItemName] = useState(currentItem.name);
  // const [itemPrenom, setItemPrenom] = useState(currentItem.prenom);

  // const [itemEmail, setItemEmaiil] = useState(currentItem.email);
 

  // const handleItemNameChange = (event) => {
  //   setItemName(event.target.value);
  // };

  // const handleItemPrenomChange = (event) => {
  //   setItemPrenom(event.target.value);
  // };
  // const handleItemEmailChange = (event) => {
  //   setItemEmaiil(event.target.value);
  // };

  const [itemName, setItemName] = useState(currentItem.firstName);
  const [itemPrenom, setItemPrenom] = useState(currentItem.lastName);
  const [itemTelephone, setItemTelephone] = useState(currentItem.telephone);
  const [itemPassword, setItemPassword] = useState("");
  const [itemCpassword, setItemCpassword] = useState("");
  const [itemEmail, setItemEmail] = useState(currentItem.email);
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


  // const handleAddItem = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValidEmail = emailRegex.test(itemEmail);
  //   const hasUppercase = /[A-Z]/.test(itemPassword);
  //   const hasLowercase = /[a-z]/.test(itemPassword);
  //   const hasNumber = /\d/.test(itemPassword);
  //   const isValid = itemPassword.length >= 8 && hasUppercase && hasLowercase && hasNumber && (itemPassword==itemCpassword);
  //   if(isValid && isValidEmail){

    
  //   //  onAddItem(itemName, itemPrenom, itemEmail,selectedRole.value,itemTelephone,itemPassword);
  //    setItemName("");
  //    setItemTelephone("");
  //    setItemCpassword("");
  //    setItemPassword("");
  //    setItemPrenom("");
  //    setItemEmail("");
  //    onClose();
  // }
  // };
  

  const handleSave = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(itemEmail);
    const hasUppercase = /[A-Z]/.test(itemPassword);
    const hasLowercase = /[a-z]/.test(itemPassword);
    const hasNumber = /\d/.test(itemPassword);
  //  const isValid = itemPassword.length >= 8 && hasUppercase && hasLowercase && hasNumber && (itemPassword==itemCpassword);
    if( isValidEmail){
      onSave({ id: currentItem.id,telephone: itemTelephone, firstName: itemName, lastName: itemPrenom , email: itemEmail,role:currentItem.role});
    }
    
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier le réassureur</ModalHeader>
       
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
            {/* <FormControl isRequired>
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
            </FormControl> */}
          
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