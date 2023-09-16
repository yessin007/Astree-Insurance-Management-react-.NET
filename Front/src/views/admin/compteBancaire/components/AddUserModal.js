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
  { value: "admin", label: "Administrateur" },
  { value: "moderator", label: "Modérateur" },
  { value: "user", label: "Utilisateur" },
];
function AddUserModal({ onAddItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  const [itemNumero, setItemNumero] = useState("");
  const [itemRib, setItemRib] = useState("");
  const [itemIban, setItemIban] = useState("");
  const [itemAdresse, setItemAdresse] = useState("");  
  const [itemBanque, setItemBanque] = useState("");
  const [itemAgence, setItemAgence] = useState("");
  
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


  const handleAddItem = () => {
    onAddItem(itemNumero, itemRib, itemIban,itemAdresse,itemBanque,itemAgence);
    setItemNumero("");
    setItemRib("");
    setItemIban("");
    setItemAdresse("");
    setItemBanque("");
    setItemAgence("");
    onClose();
  };
 
  return (
    <>
      <Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter un compte bancaire
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un compte bancaire</ModalHeader>
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
            <Button onClick={onClose}>Annuler</Button>
            <Button
              colorScheme="blue"
              onClick={handleAddItem}
              ml={3}
              disabled={!itemNumero}
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
