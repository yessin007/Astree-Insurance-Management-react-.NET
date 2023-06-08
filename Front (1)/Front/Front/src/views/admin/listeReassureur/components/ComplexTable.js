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
import AddUserModal from "./AddUserModal";
import EditModal from "./EditUserModal";
import DetailComponent from "./DetailComponent";
import Card from "components/card/Card";
import DeleteConfirmation from "./DeletConfirmation";
// import Menu from "components/menu/MainMenu";
import { HSeparator } from "components/separator/Separator";
// Assets
// import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function ColumnsTable(props) {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    // recuperation des donner 
       function fetchData() {
        
          axios.get(url + "Reassureur").then(res=>{
          console.log("res : ");
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
  const options = [
    { value: "admin", label: "Administrateur" },
    { value: "moderator", label: "Modérateur" },
    { value: "user", label: "Utilisateur" },
  ];

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

  const handleAddItem = (itemNom,itemTelephone,itemPassord, itemEmail, itemCode,itemNationalite,itemAdresse,itemPaysTransfer,itemCodeSwift,itemCodeBic) => {
    const newItem = {
      email: itemEmail,
      telephone:itemTelephone,
      password: itemPassord,
      nom: itemNom,
      code: itemCode,
      nationalite: itemNationalite,
      adresse:itemAdresse,
      paysTransfer:itemPaysTransfer,
      codeSwift:itemCodeSwift,
      codeBic:itemCodeBic
    };
    axios.post(url + 'Reassureur',newItem).then(res=>{
      console.log("res : ");
      setItems([...items, newItem]);
     }).catch(erreur=>{
      console.log(erreur);
    });
    setItems([...items, newItem]);


  };

  /// edit

  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItemDelet, setSelectedItemDelet] = useState(null);
  const [isDeletModalOpen, setIsDeletModalOpen] = useState(false);


  const handleDelete = (item) => {
    console.log(item.reassureurId)
    axios.delete(url+`Reassureur/${item.reassureurId  }`)
    .then((result)=>{
      if(result.status === 200){
        console.log("delete");
      }
    })
    .catch((error)=>{
    })
    setItems(items.filter((items) => items.reassureurId !== item.reassureurId ));
    
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
    console.log(editedItem);
    axios.put(url + `Reassureur/${selectedItem.reassureurId}`,editedItem).then(res=>{
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
              <RechercheComponent onApplyFilter={handleAddItem} />
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
            <Th>Code</Th>
            <Th>Nom</Th>
            <Th>Email</Th>
            <Th>Adresse</Th>
            <Th>Nationalité</Th>
            <Th>Pays transfer</Th>
            <Th>Code Swift</Th>
            <Th>Code bic</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,index) => (
            <Tr>
              <Td>{item.code}</Td>
              <Td>{item.nom}</Td>
              <Td>{item.email}</Td>
              <Td>{item.adresse}</Td>
              <Td>{item.nationalite}</Td>
              <Td>{item.paysTransfer}</Td>
              <Td>{item.codeSwift}</Td>
              <Td>{item.codeBic}</Td>
              <Td>
              <DetailComponent details={[item]} />
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
                    onClick={() => handleDeletClick(item)}
                    mr={2}
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

