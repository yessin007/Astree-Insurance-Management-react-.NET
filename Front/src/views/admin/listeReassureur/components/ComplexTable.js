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
import React, { useMemo, useState,useEffect } from "react";
import { EditIcon, DeleteIcon,AddIcon,ViewIcon } from "@chakra-ui/icons";
// Custom components
import VoirCompteBancaire from "./VoirCompteBancaire";
import AddCompteBancaire from "./AddCompteBancaire";
import RechercheComponent from "./RechercheComponent";
import AddUserModal from "./AddUserModal";
import EditModal from "./EditUserModal";
//  import { Paginator } from "react-chakra-pagination";

import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import { HSeparator } from "components/separator/Separator";
// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import axios from "axios";
import url from "../../../../store/api";
export default function ColumnsTable(props) {
  // select
  const [items, setItems] = useState([]);
  const [itemsRole, setItemsRole] = useState([]);

  useEffect(()=>{
    
      async function fetchData() {
        
         await axios.get(url + "Reassureur").then(res=>{
          console.log("Reassureur : ");
          console.log(res.data);
          setItems(res.data)

         }).catch(erreur=>{
          console.log(erreur);
        });
        ;
    }
    fetchData();

  },[])



  // recherche
  const handleApplyFilter = (searchTerm) => {
    axios.get(url + "Users/Recherche?termeRecherche="+searchTerm).then(res=>{
     // console.log("users : ");
     // console.log(res.data);
     setItems(res.data);
      //setItems(res.data)

     }).catch(erreur=>{
      console.log(erreur);
    });
   
  
  };


  //add


  // const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItem = (itemName, itemPrenom, itemEmail, selectedRole,itemTelephone,itemPassword) => {
    
    //requet =====>
    
    const newItem = {
      id: items.length + 1,
      firstName: itemName,
      lastName: itemPrenom,
      email: itemEmail,
      role: selectedRole,
      telephone:itemTelephone
    };
    
     axios.post(url + "Users",{
      firstName: itemName,
      lastName: itemPrenom,
      email: itemEmail,
      role: selectedRole,
      telephone:itemTelephone,
      password: itemPassword,
      confirmPassword: itemPassword     
    }).then(res=>{
    
     setItems([...items, newItem]);


     }).catch(erreur=>{
      console.log(erreur);
    });
 
  };

  

  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isAjouterCompteModalOpen, setIsAjouterCompteModalOpen] = useState(false);

  const [selectedItemVoir, setSelectedItemVoir] = useState(null);
  const [isVoirModalOpen, setIsVoirModalOpen] = useState(false);
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };
  const handleAjouterCompteClick = (id) => {
    setSelectedItemId(id);
    setIsAjouterCompteModalOpen(true);
  };

  const handleEditClose = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };
  
  const handleAjouterCompteClose = () => {
    setSelectedItemId(null);
    setIsAjouterCompteModalOpen(false);
  };

 
  const handleVoirCompteClick = (item) => {
    setSelectedItemVoir(item);
    setIsVoirModalOpen(true);
  };
  const handleVoirClose = () => {
    setSelectedItemVoir(null);
    setIsVoirModalOpen(false);
  };

  const handleEditSubmit = (editedItem) => {
    console.log(editedItem);

    axios.put(url + "Users/"+editedItem.id,{
      firstName: editedItem.firstName,
      lastName: editedItem.lastName,
      email: editedItem.email,  
      telephone:editedItem.telephone
    }).then(res=>{
      setItems((prevItems) =>
      prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
    setSelectedItem(null);
    setIsEditModalOpen(false);
     }).catch(erreur=>{
      console.log(erreur);
    });
    // setItems((prevItems) =>
    //   prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    // );
    // setSelectedItem(null);
    // setIsEditModalOpen(false);
  };
  const handleAjouterCompteSubmit = (editedItem) => {
    // console.log(editedItem);

    // axios.put(url + "Users/"+editedItem.id,{
    //   firstName: editedItem.firstName,
    //   lastName: editedItem.lastName,
    //   email: editedItem.email,  
    //   telephone:editedItem.telephone
    // }).then(res=>{
    //   setItems((prevItems) =>
    //   prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    // );
    // setSelectedItem(null);
    // setIsEditModalOpen(false);
    //  }).catch(erreur=>{
    //   console.log(erreur);
    // });
    // setItems((prevItems) =>
    //   prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    // );
    // setSelectedItem(null);
    // setIsEditModalOpen(false);
  };
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
              {/* <Text> {filterValue}</Text> */}
            </Box>

            <Box w="60px" h="10">
              <Text fontSize="2xl" fontWeight="bold">
               
              </Text>
            </Box>
            <Box w="250px" h="10">
             
             
            </Box>
            <Box w="20px" h="10">
           
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
            <Th>Email</Th> 
            <Th>Nationalité</Th> 
            <Th>Adresse</Th>
            <Th>Pays transfert</Th>                  
            <Th>Code swift</Th>
            <Th>Code bic</Th>
            <Th>Compte bancaire</Th>
            {/* <Th>Ajouter compte</Th> */}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,index) => (
            <Tr key={item.id}>
              <Td>{index+1}</Td>
             
              <Td>{item.email}</Td>
              <Td>{item.nationalite}</Td>
              <Td>{item.adresse}</Td>
              <Td>{item.paysTransfer}</Td>
              <Td>{item.codeSwift}</Td>
              <Td>{item.codeBic}</Td>
              <Td><IconButton
                  icon={<ViewIcon />}
                  color="blue"
                  aria-label="Voir"
                  onClick={() => handleVoirCompteClick(item)}
                  mr={2}
                />
                 <IconButton
                  icon={<AddIcon />}
                  color="blue"
                  aria-label="Ajouter"
                  onClick={() => handleAjouterCompteClick(item.id)}
                  mr={2} 
                />
                
                </Td>
              {/* <Td>
                <IconButton
                  icon={<AddIcon />}
                  color="blue"
                  aria-label="Ajouter"
                  onClick={() => handleAjouterCompteClick(item.id)}
                  mr={2}
                />
                
                
              </Td> */}
              <Td>
              <IconButton
                  icon={<ViewIcon />}
                  color="blue"
                  aria-label="Voir"
                  onClick={() => handleVoirCompteClick(item)}
                  mr={2}
                />
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
      {selectedItemId && (
        <AddCompteBancaire
          isOpen={isAjouterCompteModalOpen}
          onClose={handleAjouterCompteClose}
          onSave={handleAjouterCompteSubmit}
          currentItem={selectedItemId}
        />
      )}
      {selectedItemVoir && (
        <VoirCompteBancaire
          isOpen={isVoirModalOpen}
          onClose={handleVoirClose}
         
          currentItem={selectedItemVoir}
        />
      )}
    </Card>
  );
}
