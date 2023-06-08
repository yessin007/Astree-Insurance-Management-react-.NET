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
import React, { useMemo, useState,useEffect } from "react";
import DetailComponent from "./DetailComponent";
import { EditIcon, DeleteIcon,ViewIcon  } from "@chakra-ui/icons";
import { HSeparator } from "components/separator/Separator";
 import RechercheComponent from "./RechercheComponent";
import AddForm from "./AddForm";
import AddFormDetailBancaire from "./AddFormDetailBancaire";
import AllConv from "./GetAllConv";
import url from "../../../../store/api";
import Card from "components/card/Card";
export default function ColumnsTable() {
  

  const [data, setData] = useState("");
  const [open, setOpen] = useState(true);
  const [addConv, setAddConv] = useState(null);
  const [addConvsuivir, setAddConvsuivi] = useState(null);

  const handleAdd = (formData) => {
    setData(formData);
    console.log("form"+formData);
    }
  const handleOpenSubmit = () => { 
    // alert("Bancaire");
    setAddConv(true) 
    setOpen(false); 
  };
  const handleonRetour = () => { 
    // alert("transfert");
    setAddConv(false) 
    setAddConvsuivi(false)
    setOpen(true); 
  };
  
  const handleOpenTransfer = () => {
    setAddConv(false)   
    setAddConvsuivi(true); 
  };
  const handleonRetourTransfer = () => {
    setAddConv(true)   
    setAddConvsuivi(false); 
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
        <AllConv handleAdd={handleAdd}   onSave={handleOpenSubmit}/>
      </>:<></>}

      {addConv?<>
        <AddForm onData={data} handleAdd={handleAdd}   onSave={handleOpenTransfer} onRetour={handleonRetour}/>
      </>:<></>}

      {addConvsuivir?<>
         <AddFormDetailBancaire onData={data}  onSave={handleonRetour} onRetour={handleonRetourTransfer}/>
      {/* <TransferFacul/> */}
      </>:<></>}


      
      
    </Card>
  );
}