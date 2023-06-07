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



  

  const handleSave = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(itemEmail);
    const hasUppercase = /[A-Z]/.test(itemPassword);
    const hasLowercase = /[a-z]/.test(itemPassword);
    const hasNumber = /\d/.test(itemPassword);
    if( isValidEmail){
      onSave({ id: currentItem.id,telephone: itemTelephone, firstName: itemName, lastName: itemPrenom , email: itemEmail,role:currentItem.role});
    }
    
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier l'utilisateur</ModalHeader>
       
      <ModalBody>
         

            <FormControl isRequired>
              <FormLabel>Nom </FormLabel>
              <Input
                placeholder="Entrez le nom de l'utilisteur"
                value={itemName}
                onChange={handleItemNameChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Prénom </FormLabel>
              <Input
                placeholder="Entrez le prénom de l'utilisteur"
                value={itemPrenom}
                onChange={handleItemPrenomChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email </FormLabel>
              <Input
                placeholder="Entrez l'email de l'utilisteur"
                value={itemEmail}
                onChange={handleItemEmailChange}
                type="email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Télèphone </FormLabel>
              <Input
                placeholder="Entrez le télèphone de l'utilisteur"
                value={itemTelephone}
                type="number"
                onChange={handleItemTelephoneChange}
              />
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