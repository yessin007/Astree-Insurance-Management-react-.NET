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
//   import {
//     useGlobalFilter,
//     usePagination,
//     useSortBy,
//     useTable,
//   } from "react-table";
  import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
  // Custom components
//   import FilterComponent from "./FilterComponent";
  import RechercheComponent from "./RechercheComponent";
//   import AddUserModal from "./AddUserModal";
//   import EditModal from "./EditUserModal";
  //  import { Paginator } from "react-chakra-pagination";
  
  import Card from "components/card/Card";
//   import Menu from "components/menu/MainMenu";
  import { HSeparator } from "components/separator/Separator";
  // Assets
//   import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
  export default function TransferConv({onRetour}) {
    // select
    // const [selectedOption, setSelectedOption] = useState("");
  
    // const handleSelectFilter = (searchTerm) => {
    //  // setSelectedOption(value);
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
      item.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
    };
    //add
  
    // const [items, setItems] = useState([]);
    // const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  
    // const handleAddItem = (itemName, itemPrenom, itemEmail, selectedRole) => {
    //   const newItem = {
    //     id: items.length + 1,
    //     name: itemName,
    //     prenom: itemPrenom,
    //     email: itemEmail,
    //     role: selectedRole,
    //   };
    //   setItems([...items, newItem]);
    // };
  
    /// edit
  
    const [items, setItems] = useState([
      {
        id: 1,
        code: "5",
        nom: "Test",
        effet: "Test",
        date: "Test",
        risque: "Test",
        exercice: "Test",
        bordereau: "Test@gmail.com",
        bcfv: "Admin",
      },
      {
        id: 2,
        code: "44",
        nom: "aa",
        effet: "aa",
        date: "aaaa",
        risque: "aaaa",
        exercice: "aaaa",
        bordereau: "aaaa@gmail.com",
        bcfv: "aaaa",
      }
    ]);
  
    // const [selectedItem, setSelectedItem] = useState(null);
    // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
    const handleDelete = (id) => {
      setItems(items.filter((item) => item.id !== id));
    };
  
    // const handleEditClick = (item) => {
    //   setSelectedItem(item);
    //   setIsEditModalOpen(true);
    // };
  
    // const handleEditClose = () => {
    //   setSelectedItem(null);
    //   setIsEditModalOpen(false);
    // };
  
    // const handleEditSubmit = (editedItem) => {
    //   setItems((prevItems) =>
    //     prevItems.map((item) => (item.id === editedItem.id ? editedItem : item))
    //   );
    //   setSelectedItem(null);
    //   setIsEditModalOpen(false);
    // };
    const  handleRetour = () => {
        onRetour(false);
      };
    return (
      <Card
        direction="column"
        w="100%"
        px="0px"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                       Transfert Conv
                    </Text>
                </Box>
            </Flex>
            {/* <HSeparator /> */}
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Box>
            <HStack spacing="24px"> 
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
              <Th>Effet</Th>
              <Th>Date debut</Th>
              <Th>Risque</Th>
              <Th>exercice</Th>
              <Th>n°bordereau</Th>
              <Th>BCFV</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => (
              <Tr key={item.id}>
                <Td>{item.code}</Td>
                <Td>{item.nom}</Td>
                <Td>{item.effet}</Td>
                <Td>{item.date}</Td>
                <Td>{item.risque}</Td>
                <Td>{item.exercice}</Td>
                <Td>{item.bordereau}</Td>
                <Td>{item.bcfv}</Td>
                <Td>
                  {/* <IconButton
                    icon={<EditIcon />}
                    color="blue"
                    aria-label="Modifier"
                    onClick={() => handleEditClick(item)}
                    mr={2}
                  /> */}
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
                <Flex justifyContent="center" alignItems="center" >
                    <Button mt={4} mr={2} colorScheme="gray" onClick={handleRetour} >
                        Retour
                    </Button>
                    <Button mt={4} ml={2} colorScheme="blue" >
                        Enregistrer
                    </Button>
                </Flex>
        {/* {selectedItem && (
          <EditModal
            isOpen={isEditModalOpen}
            onClose={handleEditClose}
            onSave={handleEditSubmit}
            currentItem={selectedItem}
          />
        )} */}
      </Card>
    );
  }
  
  