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
          <ModalHeader key={index}>Reference {detail.reference}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant="simple">
              <Tbody>
              <Tr>
                  <Td>Reference :</Td>
                  <Td>{detail.reference}</Td>
                </Tr>
                <Tr>
                  <Td>Code :</Td>
                  <Td>{detail.code}</Td>
                </Tr>
                <Tr>
                  <Td>Effet :</Td>
                  <Td>{detail.effet}</Td>
                </Tr>
                <Tr>
                  <Td>Risque :</Td>
                  <Td>{detail.risque}</Td>
                </Tr>
                <Tr>
                  <Td>Exercice :</Td>
                  <Td>{detail.exercice}</Td>
                </Tr>
                <Tr>
                  <Td>Recours :</Td>
                  <Td>{detail.recours}</Td>
                </Tr>
                <Tr>
                  <Td>Commission :</Td>
                  <Td>{detail.commission}</Td>
                </Tr>
                <Tr>
                  <Td>Sinistre :</Td>
                  <Td>{detail.sinistre}</Td>
                </Tr>
                <Tr>
                  <Td>RrcConstitue :</Td>
                  <Td>{detail.rrcConstitue}</Td>
                </Tr>
                <Tr>
                  <Td>RssConstitue :</Td>
                  <Td>{detail.rssConstitue}</Td>
                </Tr>
                <Tr>
                  <Td>Pb :</Td>
                  <Td>{detail.pb}</Td>
                </Tr>
                <Tr>
                  <Td>Aed :</Td>
                  <Td>{detail.aed}</Td>
                </Tr>
                <Tr>
                  <Td>Solde :</Td>
                  <Td>{detail.solde}</Td>
                </Tr>
                <Tr>
                  <Td>Date Au Debit :</Td>
                  <Td>{detail.dateAuDebit}</Td>
                </Tr>
                <Tr>
                  <Td>Numero :</Td>
                  <Td>{detail.num}</Td>
                </Tr>
                <Tr>
                  <Td>Taux :</Td>
                  <Td>{detail.taux}</Td>
                </Tr>
                <Tr>
                  <Td>monnay :</Td>
                  <Td>{detail.monnay}</Td>
                </Tr>
                <Tr>
                  <Td>referance Transfert :</Td>
                  <Td>{detail.refTransfert}</Td>
                </Tr>
                <Tr>
                  <Td>Devise :</Td>
                  <Td>{detail.devise}</Td>
                </Tr>
                <Tr>
                  <Td>Assure :</Td>
                  <Td>{detail.assure}</Td>
                </Tr>
                <Tr>
                  <Td>Bordereau :</Td>
                  <Td>{detail.bordereau}</Td>
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