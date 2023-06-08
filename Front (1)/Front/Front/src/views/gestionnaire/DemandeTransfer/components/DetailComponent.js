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
{details.map((detail, index) => (
    <> 
          <ModalHeader key={index}>Libelle {detail.libelle} - {detail.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <Tbody>
              <Tr>
                  <Td>Libelle :</Td>
                  <Td>{detail.libelle}</Td>
                </Tr>
                <Tr>
                  <Td>Gestionnaire :</Td>
                  <Td>{detail.userName}</Td>
                </Tr>
                <Tr>
                  <Td>reassureur :</Td>
                  <Td>{detail.reassureurName}</Td>
                </Tr>
                <Tr>
                  <Td>Date :</Td>
                  <Td>{detail.date}</Td>
                </Tr>
                <Tr>
                  <Td>Nature :</Td>
                  <Td>{detail.nature}</Td>
                </Tr>
                <Tr>
                  <Td>Type :</Td>
                  <Td>{detail.type}</Td>
                </Tr>
                <Tr>
                  <Td>Type Montant :</Td>
                  <Td>{detail.typeMontant}</Td>
                </Tr>
                <Tr>
                  <Td>Montant :</Td>
                  <Td>{detail.montant}</Td>
                </Tr>
                <Tr>
                  <Td>Etat :</Td>
                  <Td>{detail.etat}</Td>
                </Tr>
              </Tbody>
            </Table>
          </ModalBody>
          </>
           ))}
        </ModalContent>

      </Modal>
    </>
  );
}