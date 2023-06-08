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
          <ModalHeader key={index}>Code {detail.code} - {detail.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <Tbody>
              <Tr>
                  <Td>Email :</Td>
                  <Td>{detail.email}</Td>
                </Tr>
                <Tr>
                  <Td>Nationalité :</Td>
                  <Td>{detail.nationalite}</Td>
                </Tr>
                <Tr>
                  <Td>Adresse :</Td>
                  <Td>{detail.adresse}</Td>
                </Tr>
                <Tr>
                  <Td>Pays transfer :</Td>
                  <Td>{detail.paysTransfer}</Td>
                </Tr>
                <Tr>
                  <Td>Code Swift :</Td>
                  <Td>{detail.codeSwift}</Td>
                </Tr>
                <Tr>
                  <Td>Code Bic :</Td>
                  <Td>{detail.codeBic}</Td>
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