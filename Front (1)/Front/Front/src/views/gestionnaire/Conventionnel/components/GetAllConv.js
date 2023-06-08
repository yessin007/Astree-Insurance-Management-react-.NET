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
  import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
  } from "react-table";
  import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
  import RechercheComponent from "./RechercheComponent";
  import EditModal from "./AddForm";  
  import Card from "components/card/Card";
  import Menu from "components/menu/MainMenu";
  import DetailComponent from "./DetailComponent";
  import { HSeparator } from "components/separator/Separator";
  import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
  import axios from "axios";
  import url from "../../../../store/api";
  const GetAllConv = ({onSave,handleAdd}) => {
    // select
    const [items, setItems] = useState([]);

    useEffect(()=>{
      // recuperation des donner 
        async function fetchData() {
          
           await axios.get(url + "SessionReassureur/Conv").then(res=>{
            console.log("users : ");
            console.log(res.data);
            setItems(res.data);  
           }).catch(erreur=>{
            console.log(erreur);
          });
      }
      fetchData();
  
    },[])
    /// edit

  
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    const handleDelete = (id) => {
        axios.delete(url+`SessionReassureur/${id}`)
    .then((result)=>{
      if(result.status === 200){
        console.log("delete");
      }
    })
    .catch((error)=>{
    })
      setItems(items.filter((item) => item.id !== id));
    };
  
    const handleEditClick = (id) => {
        handleAdd(id);
        onSave(true);
     // setSelectedItem(item);
      //setIsEditModalOpen(true);
    };
  
    const handleEditClose = () => {
      setSelectedItem(null);
      setIsEditModalOpen(false);
    };
  
    const handleEditSubmit = (editedItem) => {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
      );
      setSelectedItem(null);
      setIsEditModalOpen(false);
    };
    const handleSave = () => {
        onSave(true);
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
                <RechercheComponent />
              </Box>
              <Box w="50px" h="10">
                {/* <Text> {filterValue}</Text> */}
              </Box>
              <Box w="20px" h="10">
                {/* <Text fontSize="2xl" fontWeight="bold">
                  {selectedOption}
                </Text> */}
              </Box>
              <Box h="10"></Box>
            {/* <Box w="100px" h="10">
                <AddUserModal onAddItem={handleAddItem} />
              </Box>
             */}
              
            </HStack>
          </Box>
        </Flex>
        <HSeparator />
  
        <VStack spacing={4}></VStack>
  
        <Table>
          <Thead>
            <Tr>
              <Th>#ID</Th>
              <Th>Libelle</Th>
              <Th>Etat</Th>
              <Th>Type</Th>
              <Th>Montant</Th>
              <Th>Exercice</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item,index) => (
              <Tr key={item.id}>
                <Td>{index+1}</Td>
                <Td>{item.demandeTransfert.libelle}</Td>
                <Td>{item.demandeTransfert.etat}</Td>
                <Td>{item.demandeTransfert.type}</Td>
                <Td>{item.demandeTransfert.montant}</Td>
                <Td>{item.exercice}</Td>
                <Td>
                <DetailComponent details={[item]} />

                  <IconButton
                    icon={<EditIcon />}
                    color="blue"
                    aria-label="Modifier"
                    onClick={() =>handleEditClick(item.id)}
                    mr={2}
                  />
                  {item.role!="Admin"?<IconButton
                    icon={<DeleteIcon />}
                    aria-label="Supprimer"
                    color="red"
                    onClick={() => handleDelete(item.id)}
                  />:<></>}
                  
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {selectedItem && (
          <EditModal
            isOpen={isEditModalOpen}
            onClose={handleEditClose}
            onSave1={handleEditSubmit}
            currentItem={selectedItem}
          />
        )}
      </Card>
    );
  
};

export default GetAllConv;