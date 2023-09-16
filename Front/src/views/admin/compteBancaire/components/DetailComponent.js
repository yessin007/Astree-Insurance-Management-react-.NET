import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Td,
  Table,
  Tbody,
  Tr,
  IconButton
} from "@chakra-ui/react";
import { ViewIcon  } from "@chakra-ui/icons";

export default function DetailComponent({ details }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      {/* <Button onClick={handleOpenModal}>Afficher les détails</Button> */}
      <IconButton
                  icon={<ViewIcon  />}
                  color="blue"
                  aria-label="Voir"
                 
                  onClick={handleOpenModal}
                  mr={2}
                />
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
    
<ModalContent>

  
          <ModalHeader >Compte Bancaire : </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>Numéro compte :</Td>
                  <Td>{details.numeroCompte}</Td>
                </Tr>
                <Tr>
                  <Td>Rib :</Td>
                  <Td>{details.rib}</Td>
                </Tr>
                <Tr>
                  <Td>Iban :</Td>
                  <Td>{details.iban}</Td>
                </Tr>
                <Tr>
                  <Td>Banque :</Td>
                  <Td>{details.banque}</Td>
                </Tr>
                <Tr>
                  <Td>Agence :</Td>
                  <Td>{details.agence}</Td>
                </Tr>
                <Tr>
                  <Td>Adresse :</Td>
                  <Td>{details.adresse}</Td>
                </Tr>
               
              </Tbody>
            </Table>
          </ModalBody>
        
        
        </ModalContent>

      </Modal>
    </>
  );
}