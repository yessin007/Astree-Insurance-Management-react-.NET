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
  const [itemNumero, setItemNumero] = useState(currentItem.numeroCompte);
  const [itemRib, setItemRib] = useState(currentItem.rib);
  const [itemIban, setItemIban] = useState(currentItem.iban);
  const [itemAdresse, setItemAdresse] = useState(currentItem.adresse);  
  const [itemBanque, setItemBanque] = useState(currentItem.banque);
  const [itemAgence, setItemAgence] = useState(currentItem.agence);
  
  // const [itemNumero, setItemNumero] = useState("");

  const handleItemNumeroChange = (event) => {
    setItemNumero(event.target.value);
  };
  const handleItemRibChange = (event) => {
    setItemRib(event.target.value);
  };
  const handleItemIbanChange = (event) => {
    setItemIban(event.target.value);
  };
  const handleItemAdresseChange = (event) => {
    setItemAdresse(event.target.value);
  };
  const handleItemBanqueChange = (event) => {
    setItemBanque(event.target.value);
  };
  const handleItemAgenceChange = (event) => {
    setItemAgence(event.target.value);
  };



  const handleSave = () => {
    onSave({
      id: currentItem.id,
      numeroCompte: itemNumero,
      rib:itemRib,
      iban: itemIban,
      banque: itemBanque,
      agence: itemAgence,
      adresse: itemAdresse,
      isDeleted: null,
      idReassureur: null,
      idReassureurNavigation: null
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier le compte bancaire</ModalHeader>
       
        <ModalBody>
            <FormControl isRequired>
              <FormLabel>Numéro compte </FormLabel>
              <Input
                placeholder="Entrez le numéro du compte"
                value={itemNumero}
                onChange={handleItemNumeroChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Rib </FormLabel>
              <Input
                placeholder="Entrez le rib"
                value={itemRib}
                onChange={handleItemRibChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Iban </FormLabel>
              <Input
                placeholder="Entrez l'iban"
                value={itemIban}
                onChange={handleItemIbanChange}

              />
            </FormControl>


            <FormControl isRequired>
              <FormLabel>Banque </FormLabel>
              <Input
                placeholder="Entrez la banque"
                value={itemBanque}
                onChange={handleItemBanqueChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Agence </FormLabel>
              <Input
                placeholder="Entrez l'agence"
                value={itemAgence}
                onChange={handleItemAgenceChange}
              />
            </FormControl>
            <FormControl  isRequired>
              <FormLabel>Adresse </FormLabel>
              <Input
                placeholder="Entrez l'adresse"
                value={itemAdresse}
                onChange={handleItemAdresseChange}
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel>Role</FormLabel>
              <Select value={selectedRole.value} onChange={handleRoleChange}>
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </Select>
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