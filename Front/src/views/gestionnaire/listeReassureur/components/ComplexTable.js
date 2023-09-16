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
import RechercheComponent from "./RechercheComponent";
import AddUserModal from "./AddUserModal";
import EditModal from "./EditUserModal";
import DetailComponent from "./DetailComponent";
//  import { Paginator } from "react-chakra-pagination";

import Card from "components/card/Card";
// import Menu from "components/menu/MainMenu";
import { HSeparator } from "components/separator/Separator";
// Assets
// import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function ColumnsTable(props) {
  // select
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleSelectFilter = (searchTerm) => {
  
  //   const filteredItems = items.filter((item) =>
  //   item.role.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // setItems(filteredItems);
  // };

  const options = [
    { value: "admin", label: "Administrateur" },
    { value: "moderator", label: "Modérateur" },
    { value: "user", label: "Utilisateur" },
  ];

  // recherche
  // const [filterValue, setFilterValue] = useState("");

  const handleApplyFilter = (searchTerm) => {
    // setFilterValue(searchTerm);
    // alert(searchTerm)

    const filteredItems = items.filter((item) =>
    item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setItems(filteredItems);
  };
  //add

  // const [items, setItems] = useState([]);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItem = (itemName, itemPrenom, itemEmail, selectedRole) => {
    const newItem = {
      id: items.length + 1,
      name: itemName,
      prenom: itemPrenom,
      email: itemEmail,
      role: selectedRole,
    };
    setItems([...items, newItem]);
  };

  /// edit

  const [items, setItems] = useState([
    {
      id: 1,
      code:"11",
      name: "Test",
      nationalite: "Test",
      adresse: "Test@gmail.com",
      paysTransfer: "Admin",
      numCompte: "Test@gmail.com",
      CodeSwift: "Admin",
      CodeBic: "Admin",
    },
    {
      id: 2,
      code:"15",
      name: "Test",
      nationalite: "Test",
      adresse: "Test@gmail.com",
      paysTransfer: "Admin",
      numCompte: "Test@gmail.com",
      CodeSwift: "Admin",
      CodeBic: "Admin",
    },
    {
      id: 3,
      code:"100",
      name: "Test",
      nationalite: "Test",
      adresse: "Test@gmail.com",
      paysTransfer: "Admin",
      numCompte: "Test@gmail.com",
      CodeSwift: "Admin",
      CodeBic: "Admin",
    },
   
  ]);

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
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
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
          <Th>ID</Th>
            <Th>Code</Th>
            <Th>Nom</Th>
            <Th>Nationalité</Th>
            <Th>Adresse</Th>
            <Th>Pays transfer</Th>
            <Th>N°compte</Th>
            <Th>Code Swift</Th>
            <Th>Code bic</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item,index) => (
            <Tr key={item.id}>
             
              <Td>{item.id}</Td>
              <Td>{item.code}</Td>
              <Td>{item.name}</Td>
              <Td>{item.nationalite}</Td>
              <Td>{item.adresse}</Td>
              <Td>{item.paysTransfer}</Td>
              <Td>{item.numCompte}</Td>
              <Td>{item.CodeSwift}</Td>
              <Td>{item.CodeBic}</Td>
              <Td>
              <DetailComponent details={[items[0]]} />
             
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

