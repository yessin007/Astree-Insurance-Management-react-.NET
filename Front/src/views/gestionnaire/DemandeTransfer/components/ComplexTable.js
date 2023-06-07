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
// import { Pagination, PaginationItem, PaginationLink } from "@chakra-ui/pagination";
import React, { useMemo, useState } from "react";
// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";
import { EditIcon, DeleteIcon,ViewIcon  } from "@chakra-ui/icons";
// Custom components
// import FilterComponent from "./FilterComponent";
// import RechercheComponent from "./RechercheComponent";
import AddForm from "./AddForm";
import AddFormDetailBancaire from "./AddFormDetailBancaire";
import TransferConv from "./TransferConv";
 import TransferFacul from "./TransferFacul";
//  import { Paginator } from "react-chakra-pagination";

import Card from "components/card/Card";
// import Menu from "components/menu/MainMenu";
// import { HSeparator } from "components/separator/Separator";
export default function ColumnsTable() {
  

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [transfer, setTransfer] = useState(null);

  const [bancaire, setBancaire] = useState(null);

  const handleAdd = (formData) => {
    setData([...data, formData]);
  };
  const handleOpenSubmit = () => { 
    // alert("Bancaire");
    setBancaire(true) 
    setOpen(false); 
  };
  const handleonRetour = () => { 
    // alert("transfert");
    setBancaire(false) 
    setOpen(true); 
  };
  
  const handleOpenTransfer = () => {
    setBancaire(false)   
    setTransfer(true); 
  };
  const handleonRetourTransfer = () => {
    setBancaire(true)   
    setTransfer(false); 
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
        <AddForm handleAdd={handleAdd}   onSave={handleOpenSubmit}/>
      </>:<></>}

      {bancaire?<>
        <AddFormDetailBancaire handleAdd={handleAdd}   onSave={handleOpenTransfer} onRetour={handleonRetour}/>
      </>:<></>}

      {transfer?<>
         <TransferConv onRetour={handleonRetourTransfer}/>
      {/* <TransferFacul/> */}
      </>:<></>}


      
      
    </Card>
  );
}

