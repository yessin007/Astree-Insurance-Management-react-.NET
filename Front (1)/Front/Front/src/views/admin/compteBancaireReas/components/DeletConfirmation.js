import React from 'react'
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
  Text,
  background,
  color,
} from "@chakra-ui/react";
const DeleteConfirmation = ({ isOpenDelet, onCloseDelet, onSaveDelet, currentItemDelet }) => {
  const handleDeletItem = () => {
    onSaveDelet(currentItemDelet);
    onCloseDelet();
  }
    return (
      <Modal isOpen={isOpenDelet} onClose={onCloseDelet}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Supprimer la confirmation</ModalHeader>
        <ModalBody>
          <FormControl style={{borderRadius:'10px' }} >
            <FormLabel style={{borderRadius:'10px',color:'IndianRed' }}>Êtes-vous sûr de vouloir supprimer le compte bancaire de numero : <u>{currentItemDelet.numeroCompte}</u> </FormLabel>
            </FormControl>
            </ModalBody>
            <ModalFooter>
            <Button onClick={onCloseDelet}>Annuler</Button>
            <Button
              colorScheme="red"
              onClick={handleDeletItem}
              ml={3}
            >
              Supprimer
            </Button>
          </ModalFooter>
            </ModalContent>
      </Modal>
    )
}

export default DeleteConfirmation;