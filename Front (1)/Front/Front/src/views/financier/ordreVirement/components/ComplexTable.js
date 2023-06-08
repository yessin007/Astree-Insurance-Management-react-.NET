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
  import Valider from "./ValideOrdreVirement";
  import Card from "components/card/Card";
  // import Menu from "components/menu/MainMenu";
  import { HSeparator } from "components/separator/Separator";
  import GetAllOrdreVirement from "./GetAllOrdreVirement";
  import ConsulterOrdreVirement from "./ConsulterOrdreVirement"
  // Assets
  // import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
  export default function ColumnsTable(props) {
    const [data, setData] = useState("");
  const [open, setOpen] = useState(true);
  const [consulterOrdreVirement, setConsulterOrdreVirement] = useState(null);
  const handleAdd = (formData) => {
    setData(formData);
    console.log("form"+formData);
    }
  const handleOpenSubmit = () => { 
    // alert("Bancaire");
    setConsulterOrdreVirement(true) 
    setOpen(false); 
  };
  const handleonRetour = () => { 
    // alert("transfert");
    setConsulterOrdreVirement(false);
    setOpen(true); 
  };
  
  const handleonRetourTransfer = () => {
    setConsulterOrdreVirement(true)   
    setOpen(false); 
  };
  const handleOpenTransfer = () => {
    setConsulterOrdreVirement(false)   
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
        <GetAllOrdreVirement handleAdd={handleAdd}   onSave={handleOpenSubmit}/>
      </>:<></>}

      {consulterOrdreVirement?<>
        <ConsulterOrdreVirement onData={data} handleAdd={handleAdd}   onSave={handleOpenTransfer} onRetour={handleonRetour}/>
      </>:<></>}


      
      
    </Card>
  );
}