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

import React, { useMemo, useState,useEffect } from "react";

import { EditIcon, DeleteIcon,ViewIcon  } from "@chakra-ui/icons";
// Custom components
// import FilterComponent from "./FilterComponent";
import RechercheComponent from "./RechercheComponent";
import AddUserModal from "./AddUserModal";
import EditModal from "./EditUserModal";
import DetailComponent from "./DetailComponent";
//  import { Paginator } from "react-chakra-pagination";

import Card from "components/card/Card";
import axios from "axios";
import url from "../../../../store/api";
import { HSeparator } from "components/separator/Separator";
// Assets
// import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function ColumnsTable() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    // recuperation des donner 
      async function fetchData() {
        
         await axios.get(url + "CompteBancaire").then(res=>{
          console.log("CompteBancaire : ");
          console.log(res.data);
          setItems(res.data)

         }).catch(erreur=>{
          console.log(erreur);
        });
   
    }
    fetchData();

  },[])
 

  const handleApplyFilter = (searchTerm) => {
   
        if(searchTerm==""){
          
                
            axios.get(url + "CompteBancaire").then(res=>{
            console.log("CompteBancaire : ");
            console.log(res.data);
            setItems(res.data)

            }).catch(erreur=>{
            console.log(erreur);
          });


        }else{
          const filteredItems = items.filter((item) =>
          item.numeroCompte.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setItems(filteredItems);
        }
    
  };
  //add

  // const [items, setItems] = useState([]);
  // const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItem = (itemNumero, itemRib, itemIban,itemAdresse,itemBanque,itemAgence) => {
    const newItem = {
      numeroCompte: itemNumero,
      rib: itemRib,
      iban: itemIban,
      banque: itemAdresse,
      agence:itemBanque,
      adresse: itemAgence,
      idReassureur: null
    }
    axios.post(url + "CompteBancaire",newItem).then(res=>{
   
     setItems([...items, res.data]);
      

     }).catch(erreur=>{
      console.log(erreur);
    });
    // setItems([...items, newItem]);
  };

  /// edit



  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleEditClose = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };

  const handleEditSubmit = (editedItem) => {
    // setItems((prevItems) =>
    //   prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    // );
    // setSelectedItem(null);
    // setIsEditModalOpen(false);



    axios.put(url + "CompteBancaire/"+editedItem.id,editedItem).then(res=>{
      setItems((prevItems) =>
      prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
    setSelectedItem(null);
    setIsEditModalOpen(false);
     }).catch(erreur=>{
      console.log(erreur);
    });
  };

  // detaille 
  

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Box>
          <HStack spacing="24px">
            {/* <Box w='70px' h='10'  >
              <Text>Filter</Text>
            </Box> */}
            <Box w="80px" h="10">
              <Text fontSize="2xl" fontWeight="bold">
                Filtres :{" "}
              </Text>
            </Box>
            <Box w="400px" h="10">
              <RechercheComponent onApplyFilter={handleApplyFilter} />
            </Box>
            <Box w="50px" h="10">
          
            </Box>

            <Box w="60px" h="10">
              {/* <Text fontSize="2xl" fontWeight="bold">
                Role :
              </Text> */}
            </Box>
            <Box w="250px" h="10">
           
              {/* <FilterComponent
                options={options}
                onSelectFilter={handleSelectFilter}
              /> */}
            </Box>
            <Box w="20px" h="10">
              {/* <Text fontSize="2xl" fontWeight="bold">
                {selectedOption}
              </Text> */}
            </Box>
            <Box h="10"></Box>
            <Box w="100px" h="10">
              <AddUserModal onAddItem={handleAddItem} />
            </Box>
          </HStack>
        </Box>
      </Flex>
      <HSeparator />

      <VStack spacing={4}></VStack>

      <Table>
        <Thead>
          <Tr>
          <Th>#ID</Th>
            <Th>NumeroCompte</Th>
            <Th>Rib</Th>
            <Th>Iban</Th>
            <Th>Banque</Th>
            <Th>Agence</Th>
           
            <Th>Adresse</Th>
            {/* <Th>User</Th> */}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,index) => (
            <Tr key={item.id}>
             
              <Td>{item.id}</Td>
              <Td>{item.numeroCompte}</Td>
              <Td>{item.rib}</Td>
              <Td>{item.iban}</Td>
              <Td>{item.banque}</Td>
              <Td>{item.agence}</Td>
              <Td>{item.adresse}</Td>
              {/* <Td>{item.CodeSwift}</Td> */}
              
              <Td>
              <DetailComponent details={item} />
             
                <IconButton
                  icon={<EditIcon />}
                  color="blue"
                  aria-label="Modifier"
                  onClick={() => handleEditClick(item)}
                  mr={2}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Supprimer"
                  color="red"
                  onClick={() => handleDelete(item.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      
      {selectedItem && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={handleEditClose}
          onSave={handleEditSubmit}
          currentItem={selectedItem}
        />
      )}
    </Card>
  );
}

