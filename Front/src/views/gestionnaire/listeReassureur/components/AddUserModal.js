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
  const [itemName, setItemName] = useState("");
  //const [itemPrenom, setItemPrenom] = useState("");
  const [itemPassword, setItemPassword] = useState("");
  const [itemEmail, setItemEmaiil] = useState("");
  // const [itemName, setItemName] = useState("");


  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };
 // const handleItemPrenomChange = (event) => {
  //  setItemPrenom(event.target.value);
  //};
  const handleItemEmailChange = (event) => {
    setItemEmaiil(event.target.value);
  };


  const handleAddItem = () => {
    onAddItem(itemName, itemEmail,selectedRole.value,itemPassword);
    setItemName("");
    setItemEmaiil("");
    setItemPassword("");
    onClose();
  };
  //role
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedRole = roles.find((role) => role.value === selectedValue);
    setSelectedRole(selectedRole);
  };

  const handleItemPasswordChange = (event) => {
    setItemPassword(event.target.value);
  };

  return (
    <>
      <Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter un Réassureur
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un Réassureur</ModalHeader>
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
              <FormLabel>Email </FormLabel>
              <Input
                placeholder="Entrez l'email de l'utilisteur"
                value={itemEmail}
                onChange={handleItemEmailChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                  placeholder="Entrez le Password de l'utilisteur"
                  value={itemPassword}
                  onChange={handleItemPasswordChange}
                  type="password"
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
