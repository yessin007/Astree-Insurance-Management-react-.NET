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
  const [data, setData] = useState("");
  const [dataFileReas, setDataFileReas] = useState("");
  // const [transfer, setTransfer] = useState(null);

  // const [bancaire, setBancaire] = useState(null);

  // const handleAdd = (formData) => {
  //   setData([...data, formData]);
  // };
  const handleOpenFormBt = () => { 
    // alert("Bancaire");
    setOpenBt(false) 
    
  };
  const handleonRetour = () =>{
    setOpenBt(true);
    setData("");
 
  }
  const handleFileBt = (formData) => {
    setData(formData);
    console.log("form"+formData);
    }
    const handleFileReas = (formData) => {
      setDataFileReas(formData);
      console.log("form"+formData);
      }
  const handleOpenFormReass = () => { 
    // alert("Bancaire");
    setOpenReass(false) ;
    setDataFileReas("");
    // setOpen(false); 
  };
    const handleonRetourLettreReas = () => { 
    // alert("Bancaire");
    setOpenReass(true) 
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
            <FormBt handleFileBt={handleFileBt}  onSave={handleOpenFormBt} />
            </>
            :
            <>           
            <LettreBt onData={data} onRetour={handleonRetour}/>
            </>}
          
          
        </TabPanel>


        <TabPanel>
       
        {openReass
             ?<>
            <FormReass handleFileReas={handleFileReas} onSave={handleOpenFormReass} />
            </>
            :
            <>           
            <LettreReass onRetour={handleonRetourLettreReas} onDataFileReas={dataFileReas}/>
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

