import { useState ,useEffect} from "react";
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
  Flex,
  IconButton,
  Box,
  FormControl,
  FormLabel,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  FormHelperText,
  
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ViewIcon  } from "@chakra-ui/icons";
import {
    MdFilter1,
    MdFilter2,
    MdFilter3
  } from "react-icons/md";
  

import axios from "axios";
import url from "../../../../store/api";
import SignatureCanvas from 'react-signature-canvas'
export default function ConsulterOrdreVirement({ onSave,onRetour,handleAdd,onData}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const [detail,setDetail] = useState("");
  const  handleRetour = () => {
    onRetour(false);
  };
  

const handleSave = () => {
    const etat ="Valide";
    axios.put(url + `DemandeTransfert/UpdateByetat/${onData.demandeTransfert.id}/${etat}`,).then(res=>{
        console.log("etat Valide"+res.data);
       }).catch(erreur=>{
        console.log(erreur);
      });
    onSave(true);
  };
  const hrStyle = {
    after : {
        background: "#800000",
        content: '§',
        padding: "0 4px",
        position: "relative",
        top: "-13px",
    }
   
} 

  return (
    <>
      <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Libelle {onData.demandeTransfert.libelle}
                    </Text>
 
                </Box>
            </Flex>
    <Flex  px={4} justifyContent="center">
   <Box>
    <div>
      

      {/* 👇️ horizontal line with text */}
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <Icon as={MdFilter1} style={{color: (onData.demandeTransfert.etat != "FN"  && onData.demandeTransfert.etat != "Valide" )? 'blue' : 'black'}} width='50px' height='50px' textAlign= 'center'/>
        <div style={{flex: 1, width: '100px'}}></div>
     {/* <div   style={{ width: '100px',fontWeight: 'bold',fontSize: '1rem'}} >demande de transfert</div> */}   

        <div style={{flex: 1, width: '100px',height: '1px', backgroundColor: 'black'}} />
        <div style={{flex: 1, width: '100px'}}></div>
        <div>
          <Icon as={MdFilter2}  width='50px' style={{color: onData.demandeTransfert.etat == "FN" ? 'blue' : 'black'}} height='50px' color='gris' textAlign= 'center'/>
        </div>
        <div style={{flex: 1, width: '100px'}}></div>
        <div style={{flex: 1, width: '100px', height: '1px', backgroundColor: 'black'}} />
        <div style={{flex: 1, width: '100px'}}></div>
        <div>
          <Icon as={MdFilter3} width='50px' style={{color: onData.demandeTransfert.etat == "Valide" ? 'blue' : 'black'}} height='50px' color='gris' textAlign= 'center'/>
        </div>
      </div>
    </div>
                </Box>
            </Flex>

            <Flex px={4} justifyContent="center">
               
                <Box w="100%" px={4}  id="content">
                <FormLabel  mt={4}>Gestionnaire : {onData.demandeTransfert.userName}</FormLabel>
                <FormLabel  mt={4}>reassureur :{onData.demandeTransfert.reassureurName}</FormLabel>
                <FormLabel   mt={4}>Date :{onData.demandeTransfert.date}</FormLabel>
                    <FormLabel mt={4}>Nature :{onData.demandeTransfert.nature}</FormLabel>
                    <FormLabel mt={4}> Type :{onData.demandeTransfert.type}</FormLabel>
                    <FormLabel mt={4}>Type Montant :{onData.demandeTransfert.typeMontant} </FormLabel>
                    <FormLabel>
                 </FormLabel>
                    <FormLabel mt={4}>Montant :{onData.demandeTransfert.montant}</FormLabel>
                    <FormLabel mt={4}>Etat :{onData.demandeTransfert.etat} </FormLabel>
                </Box>
                <Box w="100%" px={4}  id="content">
                <FormLabel  mt={4}>Reference : {onData.reference}</FormLabel>
                <FormLabel  mt={4}>code :{onData.code}</FormLabel>
                <FormLabel   mt={4}>effet :{onData.effet}</FormLabel>
                    <FormLabel mt={4}>risque :{onData.risque}</FormLabel>
                    <FormLabel mt={4}> recours :{onData.recours}</FormLabel>
                    <FormLabel mt={4}> commission :{onData.commission} </FormLabel>
                    <FormLabel>
                 </FormLabel>
                    <FormLabel mt={4}>sinistre :{onData.sinistre}</FormLabel>
                    <FormLabel mt={4}>rssConstitue :{onData.rssConstitue} </FormLabel>
                    
                </Box>
                <Box w="100%" px={4}  id="content">
                    <FormLabel mt={4}>rrcConstitue :{onData.rrcConstitue} </FormLabel>
                    <FormLabel mt={4}>pb :{onData.pb}</FormLabel>
                    <FormLabel mt={4}>aed :{onData.aed} </FormLabel>
                    <FormLabel mt={4}>num :{onData.num} </FormLabel>
                    <FormLabel mt={4}>taux :{onData.taux} </FormLabel>
                    <FormLabel mt={4}>monnay :{onData.monnay} </FormLabel>
                    <FormLabel mt={4}>devise :{onData.devise} </FormLabel>
                </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
            <SignatureCanvas penColor='green'
                  canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
            </Flex>
            <Flex justifyContent="center" alignItems="center">
                <Button mt={4} mr={2} colorScheme="gray" onClick={handleRetour}>
                        Retour
                    </Button>
                    {(onData.demandeTransfert.etat == "FN" ) && (
                <Button mt={4} mr={2} colorScheme="blue" onClick={handleSave}>
                        Valide
                    </Button>)}
                </Flex>

        </Box>
        {/*<button className="App-button" onClick={handleOpen}>
    Open another document
  </button>
  <div className="App-viewer">
    <PdfViewerComponent document={document} />
  </div> */}
    </>
  );
}