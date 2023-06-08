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
  import AddForm from "./AddFormFac";
  import AddFormFacSuivi from "./AddFormFac_2";
  import GetAllFac from "./GetAllFac";
  import url from "../../../../store/api";
  import Card from "components/card/Card";
  export default function ColumnsTable() {
    
  
    const [data, setData] = useState("");
    const [open, setOpen] = useState(true);
    const [addFac, setAddFac] = useState(null);
    const [addFacsuivir, setAddFacsuivi] = useState(null);
  
    const handleAdd = (formData) => {
      setData(formData);
      console.log("form"+formData);
      }
    const handleOpenSubmit = () => { 
      // alert("Bancaire");
      setAddFac(true) 
      setOpen(false); 
    };
    const handleonRetour = () => { 
      // alert("transfert");
      setAddFac(false) 
      setAddFacsuivi(false)
      setOpen(true); 
    };
    
    const handleOpenTransfer = () => {
      setAddFac(false)   
      setAddFacsuivi(true); 
    };
    const handleonRetourTransfer = () => {
      setAddFac(true)   
      setAddFacsuivi(false); 
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
          <GetAllFac handleAdd={handleAdd}   onSave={handleOpenSubmit}/>
        </>:<></>}
  
        {addFac?<>
          <AddForm onData={data} handleAdd={handleAdd}   onSave={handleOpenTransfer} onRetour={handleonRetour}/>
        </>:<></>}
  
        {addFacsuivir?<>
           <AddFormFacSuivi onData={data}  onSave={handleonRetour} onRetour={handleonRetourTransfer}/>
        {/* <TransferFacul/> */}
        </>:<></>}
  
  
        
        
      </Card>
    );
  }