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
  const [itemName, setItemName] = useState(currentItem.name);
  const [itemPrenom, setItemPrenom] = useState(currentItem.prenom);

  const [itemEmail, setItemEmaiil] = useState(currentItem.email);
 

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemPrenomChange = (event) => {
    setItemPrenom(event.target.value);
  };
  const handleItemEmailChange = (event) => {
    setItemEmaiil(event.target.value);
  };

  const handleSave = () => {
    onSave({ id: currentItem.id, name: itemName, prenom: itemPrenom , email: itemEmail,role:currentItem.role});
  };

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
            </FormControl>
            <FormControl>
              <FormLabel>Prénom </FormLabel>
              <Input
                placeholder="Entrez le prénom de l'utilisteur"
                value={itemPrenom}
                onChange={handleItemPrenomChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email </FormLabel>
              <Input
                placeholder="Entrez l'email de l'utilisteur"
                value={itemEmail}
                onChange={handleItemEmailChange}
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