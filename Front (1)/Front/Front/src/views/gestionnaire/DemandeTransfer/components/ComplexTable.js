import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Input,
  useColorModeValue,
  SimpleGrid,
  Box,
  Button,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import url from "../../../../store/api";
import React, { useMemo, useState,useEffect } from "react";
import { EditIcon, DeleteIcon,ViewIcon  } from "@chakra-ui/icons";

import RechercheComponent from "./RechercheComponent";
import AddForm from "./AddForm";
import EditModal from "./EditUserModal";
import DetailComponent from "./DetailComponent";
import Card from "components/card/Card";
// import Menu from "components/menu/MainMenu";
import { HSeparator } from "components/separator/Separator";
import GetAllDemande from "./GetAllDemande";
import ConsulterDemande from "./ConsulterDemande";
// Assets
// import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function ColumnsTable(props) {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(true);
  const [consulterDemande, setConsulterDemande] = useState(null);
  const handleAdd = (formData) => {
    setData(formData);
    console.log("form"+formData);
    }
  const handleOpenSubmit = () => { 
    // alert("Bancaire");
    setConsulterDemande(true) 
    setOpen(false); 
  };
  const handleonRetour = () => { 
    // alert("transfert");
    setConsulterDemande(false);
    setOpen(true); 
  };
  
  const handleonRetourTransfer = () => {
    setConsulterDemande(true)   
    setOpen(false); 
  };
  const handleOpenTransfer = () => {
    setConsulterDemande(false)   
    setOpen(true); 
  };

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <VStack spacing={4}></VStack>   
      {open?<>
        <GetAllDemande handleAdd={handleAdd}   onSave={handleOpenSubmit}/>
      </>:<></>}

      {consulterDemande?<>
        <ConsulterDemande onData={data} handleAdd={handleAdd}   onSave={handleOpenTransfer} onRetour={handleonRetour}/>
      </>:<></>}


      
      
    </Card>
  );
}