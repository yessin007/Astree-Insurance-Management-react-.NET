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
          <ModalHeader>Detail Demande Transfert</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
       
          <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Réssureur</Th>
            <Th>Compte Réassureur</Th>
            <Th>Réference</Th>
            <Th>Effet</Th>
            <Th>Risque</Th>          
            <Th>Exercice</Th>
            <Th>Recours</Th>
            <Th>Commision</Th>
            <Th>Sinistre</Th>
            </Tr>
            <Tr>
             
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              </Tr> 
            <Tr>
            <Th>Pb</Th>
            <Th>Aed</Th>
            <Th>Date au début</Th>          
            <Th>Numpolice</Th>
            <Th>Bordereau</Th>
            <Th>Taux</Th>
            <Th>Monnaie</Th>
            <Th>RrcConstitue</Th>
            <Th>RssConstitue</Th>
            <Th>Devis</Th>
            </Tr> 
            <Tr>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              </Tr> <Tr>
            <Th>Libelle</Th>
            <Th>Etat</Th>          
            <Th>Type</Th>
            <Th>Assure</Th>
            <Th>Compte Astree</Th>
            <Th>Montant</Th>
            <Th>Obs</Th>
            <Th>Virrement</Th>
            <Th>Nature</Th>
            <Th>Actions</Th>
           
          </Tr>
          <Tr>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
              <Td>{currentItem.id}</Td>
          
              
              <Td>
                {localStorage.getItem('Role')=="financier"?<Button
              colorScheme="blue"
             
              ml={3}
          
            >
              Valider
            </Button>:<></>}
              
              </Td>
              </Tr>
        </Thead>
        <Tbody>
          
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
