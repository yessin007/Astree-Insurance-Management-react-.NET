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
  // Assets
  // import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
  export default function GetAllOrdreVirement({onSave,handleAdd}) {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        // recuperation des donner 
          async function fetchData() {
            
             await axios.get(url + "SessionReassureur").then(res=>{
              console.log("users : ");
              console.log(res.data);
              setItems(res.data);  
             }).catch(erreur=>{
              console.log(erreur);
            });
        }
        fetchData();
    
      },[])
  
    // recherche
    // const [filterValue, setFilterValue] = useState("");
  
    //const handleApplyFilter = (searchTerm) => {
      // setFilterValue(searchTerm);
      // alert(searchTerm)
  
      //const filteredItems = items.filter((item) =>
      //item.code.toLowerCase().includes(searchTerm.toLowerCase())
    //);
    //setItems(filteredItems);
    //};
    //add
  
    // const [items, setItems] = useState([]);
    const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  
    
  
    /// edit
  
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  
    const handleEditClick = (item) => {
      setSelectedItem(item);
      setIsEditModalOpen(true);
    };
  
    const handleEditClose = () => {
      setSelectedItem(null);
      setIsEditModalOpen(false);
    };
  
    const handleEditSubmit = (editedItem) => {
      console.log(editedItem);
      /*axios.put(url + `demandeTransfert/${selectedItem.reassureurId}`,editedItem).then(res=>{
        console.log("res : ");
       }).catch(erreur=>{
        console.log(erreur);
      });
     /* setItems((prevItems) =>
        prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
      );*/
      setSelectedItem(null);
      setIsEditModalOpen(false);
    };
    const handleConsulterClick=(item)=>{
        console.log(item.id);
        handleAdd(item);
        onSave(true);
      }
  
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
            </HStack>
          </Box>
        </Flex>
        <HSeparator />
  
        <VStack spacing={4}></VStack>
  
        <Table>
        <Thead>
          <Tr>
          <Th>ID</Th>
            <Th>Libelle</Th>
            <Th>Nature</Th>
            <Th>Type</Th>
            <Th>Montant</Th>
            <Th>Etat</Th>
            <Th>Users</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,index) => (
            <Tr key={item.id}>
              <Td>{index+1}</Td>
              <Td>{item.demandeTransfert.libelle}</Td>
                <Td>{item.demandeTransfert.nature}</Td>
                <Td>{item.demandeTransfert.type}</Td>
                <Td>{item.demandeTransfert.montant}</Td>
                <Td>{item.demandeTransfert.etat}</Td>
                <Td>{item.demandeTransfert.userName}</Td>
              <Td>
              <IconButton
                  icon={<ViewIcon  />}
                  color="blue"
                  aria-label="Voir"
                  onClick={() => handleConsulterClick(item)}
                  mr={2}
                />
              {(item.demandeTransfert.etat == "FN") && (
                  <IconButton
                    icon={<EditIcon />}
                    color="blue"
                    aria-label="Modifier"
                    onClick={() => handleEditClick(item)}
                    mr={2}
                  />)}
                {/*<Valider details={[item]} />
               
                  <IconButton
                    icon={<EditIcon />}
                    color="blue"
                    aria-label="Modifier"
                    onClick={() => handleEditClick(item)}
                    mr={2}
          />*/}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        
      { /*
      {selectedItem && (
          <Valider
            isOpen={isEditModalOpen}
            onClose={handleEditClose}
            onSave={handleEditSubmit}
            currentItem={selectedItem}
          />
        )}
       */

      }  
      </Card>
    );
  }
  
  