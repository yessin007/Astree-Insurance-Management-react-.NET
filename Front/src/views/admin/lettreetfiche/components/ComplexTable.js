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
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from "@chakra-ui/react";
// import { Pagination, PaginationItem, PaginationLink } from "@chakra-ui/pagination";
import React, { useMemo, useState } from "react";
import FormBt from "./FormBt";
import LettreBt from "./LettreBT";
import LettreReass from "./LettreReass";
import FormReass from "./FormReass";

import LettreFiche from "./LettreFiche";
import FormFiche from "./FormFiche";
import Card from "components/card/Card";

export default function ColumnsTable(props) {
  
  const [openbt, setOpenBt] = useState(true);
  const [openReass, setOpenReass] = useState(true);
  const [openFiche, setOpenFiche] = useState(true);
  // const [transfer, setTransfer] = useState(null);

  // const [bancaire, setBancaire] = useState(null);

  // const handleAdd = (formData) => {
  //   setData([...data, formData]);
  // };
  const handleOpenFormBt = () => { 
    // alert("Bancaire");
    setOpenBt(false) 
    
  };
  const handleOpenFormReass = () => { 
    // alert("Bancaire");
    setOpenReass(false) 
    // setOpen(false); 
  };
  const handleOpenFormFiche = () => { 
    // alert("Bancaire");
    setOpenFiche(false) 
    // setOpen(false); 
  };

  

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
      <Box w="100%" px={4}>
     <Tabs isFitted>
      <TabList>
        <Tab>Lettre BT</Tab>
        <Tab>Lettre Reass</Tab>
        <Tab>Fiche Information</Tab>
      </TabList>


      <TabPanels>


        <TabPanel>
          {openbt
             ?<>
            <FormBt onSave={handleOpenFormBt} />
            </>
            :
            <>           
            <LettreBt/>
            </>}
          
          
        </TabPanel>


        <TabPanel>
       
        {openReass
             ?<>
            <FormReass onSave={handleOpenFormReass} />
            </>
            :
            <>           
            <LettreReass/>
            </>}
          
          
        </TabPanel>


        <TabPanel>
        {openFiche
             ?<>
            <FormFiche onSave={handleOpenFormFiche} />
            </>
            :
            <>           
            <LettreFiche/>
            </>}
        </TabPanel>

        
      </TabPanels>
    </Tabs>
    </Box>
    </Flex>

     
    </Card>
  );
}

