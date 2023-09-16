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
  { value: "Admin", label: "Admin" },
  { value: "Gestionnaire", label: "Gestionnaire" },
  { value: "Financier", label: "Financier" },
  // { value: "Reassureur", label: "Reassureur" }
 
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
        Ajouter un utilisateur
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un utilisteur</ModalHeader>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Nom</FormLabel>
              <Input
                placeholder="Entrez le nom de l'utilisteur"
                value={itemName}
                onChange={handleItemNameChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Prénom</FormLabel>
              <Input
                placeholder="Entrez le prénom de l'utilisteur"
                value={itemPrenom}
                onChange={handleItemPrenomChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Entrez l'email de l'utilisteur"
                value={itemEmail}
                onChange={handleItemEmailChange}
                type="email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Télèphone</FormLabel>
              <Input
                placeholder="Entrez le télèphone de l'utilisteur"
                value={itemTelephone}
                type="number"
                onChange={handleItemTelephoneChange}
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
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                placeholder="Confirm Password"
                value={itemCpassword}
                onChange={handleItemCpasswordChange}
                type="password"
              />
            </FormControl>
            <FormControl isRequired>
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
