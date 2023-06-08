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
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// Custom components
import FilterComponent from "./FilterComponent";
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
import DeleteConfirmation from "./DeletConfirmation";
export default function ColumnsTable(props) {
  // select
  const [items, setItems] = useState([]);
  const [itemsRole, setItemsRole] = useState([]);

  useEffect(()=>{
    // recuperation des donner 
      async function fetchData() {
        
         await axios.get(url + "Users/UserWithRoles").then(res=>{
          console.log("users : ");
          console.log(res.data);
          setItems(res.data)

         }).catch(erreur=>{
          console.log(erreur);
        });
        //const json = await response.json();
       // setData(json);
    }
    fetchData();

  },[])
// recherche avec role 
  const handleSelectFilter = (searchTerm) => {

     axios.get(url + "Users/"+searchTerm+"/users").then(res=>{
      
      setItems(res.data)

     }).catch(erreur=>{
      console.log(erreur);
    });
   // alert(searchTerm)
   // const filteredItems = items.filter((item) =>
  //item.role.toLowerCase().includes(searchTerm.toLowerCase())
//);
 // setItems(filteredItems);
  };

  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Gestionnaire", label: "Gestionnaire" },
    { value: "Reassureur", label: "Reassureur" }
  ];

  // recherche
  const handleApplyFilter = (searchTerm) => {
   
    const filteredItems = items.filter((item) =>
    item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setItems(filteredItems);
  };


  //add


  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItem = (itemName, itemPrenom, itemEmail, selectedRole,itemTelephone,itemPassword,itemCpassword) => {
    
    //requet =====>
    
    const newItem = {
      firstName: itemName,
      lastName: itemPrenom,
      email: itemEmail,
      telephone:itemTelephone,
      password:itemPassword,
      confirmPassword:itemCpassword,
      role: selectedRole,
    };
    axios.post(url + "Users",newItem).then(res=>{
      console.log("res : ");
      setItems([...items, newItem]);
     }).catch(erreur=>{
      console.log(erreur);
    });
    setItems([...items, newItem]);
  };

  /// edit

  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: "Test",
  //     prenom: "Test",
  //     email: "Test@gmail.com",
  //     role: "Admin",
  //   }
  
  // ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItemDelet, setSelectedItemDelet] = useState(null);
  const [isDeletModalOpen, setIsDeletModalOpen] = useState(false);

  const handleDelete = (item) => {
      console.log(item.id);
      axios.delete(url+`Users/${item.id  }`)
      .then((result)=>{
        if(result.status === 200){
          console.log("delete");
        }
      })
      .catch((error)=>{
      })
    
    setItems(items.filter((items) => items.id !== item.id));
  };
  const handleDeletClick = (item) => {
    setSelectedItemDelet(item);
    setIsDeletModalOpen(true);
  };
  const handleDeletClose = () => {
    setSelectedItemDelet(null);
    setIsDeletModalOpen(false);
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
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
    setSelectedItem(null);
    setIsEditModalOpen(false);
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
                Role :
              </Text>
            </Box>
            <Box w="250px" h="10">
              {/* <Text fontSize="2xl" fontWeight="bold">Filtres</Text> */}
              <FilterComponent
                options={options}
                onSelectFilter={handleSelectFilter}
              />
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
            <Th>Nom</Th>
            <Th>Prenom</Th>
            <Th>Email</Th>
            <Th>Télèphone</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,index) => (
            <Tr key={item.id}>
              <Td>{index+1}</Td>
              <Td>{item.firstName}</Td>
              <Td>{item.lastName}</Td>
              <Td>{item.email}</Td>
              <Td>{item.telephone}</Td>
              <Td>{item.role}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  color="blue"
                  aria-label="Modifier"
                  onClick={() => handleEditClick(item)}
                  mr={2}
                />
                
                {item.role!="Admin"? <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Supprimer"
                    color="red"
                    onClick={() => handleDeletClick(item)}
                    mr={2}
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
          onSave={handleEditSubmit}
          currentItem={selectedItem}
        />
      )}
         {selectedItemDelet && (
          <DeleteConfirmation
            isOpenDelet={isDeletModalOpen}
            onCloseDelet={handleDeletClose}
            onSaveDelet={handleDelete}
            currentItemDelet={selectedItemDelet}
          />
        )}
    </Card>
  );
}

