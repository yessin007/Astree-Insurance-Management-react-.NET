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

export default function ConsulterDemande({ onSave,onRetour,handleAdd,onData}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const [detail,setDetail] = useState([]);
  const  handleRetour = () => {
    onRetour(false);
  };
  
  useEffect(()=>{
    // recuperation des donner 
      async function fetchData() {
        
         await axios.get(url + `DemandeTransfert/${onData}`).then(res=>{
          console.log("users : ");
          console.log(res.data);
          setDetail(res.data);
        
         }).catch(erreur=>{
          console.log(erreur);
        });
    }
    fetchData();

  },[])
const handleSave = () => {
    const etat ="FN";
    axios.put(url + `DemandeTransfert/UpdateByetat/${onData}/${etat}`,).then(res=>{
        console.log("etat FN"+res.data);
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
                        Libelle {detail.libelle}
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
        <Icon as={MdFilter1} style={{color: (detail.etat != "FN"  && detail.etat != "Valide" )? 'blue' : 'black'}} width='50px' height='50px' textAlign= 'center'/>
        <div style={{flex: 1, width: '100px'}}></div>
     {/* <div   style={{ width: '100px',fontWeight: 'bold',fontSize: '1rem'}} >demande de transfert</div> */}   

        <div style={{flex: 1, width: '100px',height: '1px', backgroundColor: 'black'}} />
        <div style={{flex: 1, width: '100px'}}></div>
        <div>
          <Icon as={MdFilter2}  width='50px' style={{color: detail.etat == "FN" ? 'blue' : 'black'}} height='50px' color='gris' textAlign= 'center'/>
        </div>
        <div style={{flex: 1, width: '100px'}}></div>
        <div style={{flex: 1, width: '100px', height: '1px', backgroundColor: 'black'}} />
        <div style={{flex: 1, width: '100px'}}></div>
        <div>
          <Icon as={MdFilter3} width='50px' style={{color: detail.etat == "Valide" ? 'blue' : 'black'}} height='50px' color='gris' textAlign= 'center'/>
        </div>
      </div>
    </div>
                </Box>
            </Flex>

            <Flex px={4} justifyContent="center">
               
                <Box w="100%" px={4}  id="content">
                <FormLabel  mt={4}>Gestionnaire : {detail.userName}</FormLabel>
                <br/>
                <FormLabel  mt={4}>reassureur :{detail.reassureurName}</FormLabel>
                <br/>
                <FormLabel   mt={4}>Date :{detail.date}</FormLabel>
                    <FormLabel mt={4}>Nature :{detail.nature}</FormLabel>
                    <FormLabel mt={4}> Type :{detail.type}</FormLabel>
                    <FormLabel mt={4}>Type Montant :{detail.typeMontant} </FormLabel>
                    <hr style={  {width : "9%"}}/>
                    <br/>
                    <br/>
                    <br/>
                    <FormLabel>
                 </FormLabel>
                    <FormLabel mt={4}>Montant :{detail.montant}</FormLabel>
                    <FormLabel mt={4}>Etat :{detail.etat} </FormLabel>
                  
                 
               
                </Box>
            </Flex>

            <Flex justifyContent="center" alignItems="center">
                <Button mt={4} mr={2} colorScheme="gray" onClick={handleRetour}>
                        Retour
                    </Button>
                    {(detail.etat != "FN" && detail.etat != "Valide") && (
                <Button mt={4} mr={2} colorScheme="blue" onClick={handleSave}>
                        Send au financier
                    </Button>)}
                </Flex>

        </Box>
    </>
  );
}