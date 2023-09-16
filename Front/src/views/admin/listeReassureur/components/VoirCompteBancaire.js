import { useState } from "react";
import {
  Tbody,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  RadioGroup,
  Stack,
  Radio,
InputGroup,
InputLeftAddon,
IconButton,
InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
const roles = [
  { value: "admin", label: "Administrateur" },
  { value: "moderator", label: "Modérateur" },
  { value: "user", label: "Utilisateur" },
];
function VoirCompteBancaire({ isOpen, onClose, currentItem }) {

   
  return (
    <>
      {/* <Button colorScheme="blue" variant="outline" onClick={onOpen}>
        Ajouter  demande de transfert
      </Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Liste compte bancaire</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
       
          <Table>
        <Thead>
          <Tr>
          <Th>ID</Th>
            <Th>NumeroCompte</Th>
            <Th>Rib</Th>
            <Th>Iban</Th>
            <Th>Banque</Th>
            <Th>Agence</Th>
           
            <Th>Adresse</Th>
            <Th>User</Th>
           
          </Tr>
        </Thead>
        <Tbody>
          {/* {currentItem.map((item,index) => ( */}
            <Tr key={currentItem.id}>
             
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              
              <Td>
              {/* <DetailComponent details={[items[0]]} />
             
                <IconButton
                  icon={<EditIcon />}
                  color="blue"
                  aria-label="Modifier"
                  onClick={() => handleEditClick(item)}
                  mr={2}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Supprimer"
                  color="red"
                  onClick={() => handleDelete(item.id)}
                /> */}
              </Td>
            </Tr>
          {/* ))} */}
        </Tbody>
      </Table>






















          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Annuler</Button>
            {/* <Button
              colorScheme="blue"
             
              ml={3}
             
            >
              Ajouter
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default VoirCompteBancaire;
