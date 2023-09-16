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
import { EditIcon, DeleteIcon,ViewIcon } from "@chakra-ui/icons";
import VoirCompteBancaire from "./VoirCompteBancaire";
import RechercheComponent from "./RechercheComponent";
 import AddDemandeModal from "./AddDemandeModal";
 import EditDemandeModal from "./EditDemandeModal";
// import EditModal from "./EditUserModal";
//  import { Paginator } from "react-chakra-pagination";

import Card from "components/card/Card";
// import Menu from "components/menu/MainMenu";
import { HSeparator } from "components/separator/Separator";
// Assets
// import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function TransferFacul(props) {
  // select
 const [selectedOption, setSelectedOption] = useState("");
 const [selectedItemVoir, setSelectedItemVoir] = useState(null);
  const [isVoirModalOpen, setIsVoirModalOpen] = useState(false);
 const handleVoirCompteClick = (item) => {
  setSelectedItemVoir(item);
  setIsVoirModalOpen(true);
};
const handleVoirClose = () => {
  setSelectedItemVoir(null);
  setIsVoirModalOpen(false);
};

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
      code: "5",
      nom: "Test",
      assure: "Test",
      prime: "Test",
      rrcli: "Test",
      rsscli: "Test",
      rsslib: "Test@gmail.com",
      intere: "ressa1"
    },
   
    {
      id: 2,
      code: "10",
      nom: "kkkk",
      assure: "kkkk",
      prime: "kkkk",
      rrcli: "kkkk",
      rsscli: "kkkk",
      rsslib: "kkkk@gmail.com",
      intere: "Admin"
    }
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
            <Box h="10" w="400px"></Box>
            <Box w="100px" h="10">
              <AddDemandeModal onAddItem={handleAddItem} />
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
            <Th>Libelle</Th>
            <Th>Montant</Th>
            <Th>Devis</Th>
            <Th>Obs</Th>
            <Th>Virement</Th>
            <Th>Date</Th>
            <Th>Réassureur</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.id}>
              <Td>{item.code}</Td>
              <Td>{item.nom}</Td>
              <Td>{item.assure}</Td>
              <Td>{item.prime}</Td>
              <Td>{item.rrcli}</Td>
              <Td>{item.rsscli}</Td>
              <Td>{item.rsslib}</Td>
              <Td>{item.intere}</Td>             
              <Td>
              <IconButton
                  icon={<ViewIcon />}
                  color="blue"
                  aria-label="Voir"
                  onClick={() => handleVoirCompteClick(item)}
                  mr={2}
                />
                {localStorage.getItem('Role')!="financier"?<><IconButton
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
                /></>:<></>}
                
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
              {/* <Flex justifyContent="center" alignItems="center" >
                  <Button mt={4} mr={2} colorScheme="gray" >
                      Retour
                  </Button>
                  <Button mt={4} ml={2} colorScheme="blue" >
                      Enregistrer
                  </Button>
              </Flex> */}
      {selectedItem && (
        <EditDemandeModal
          isOpen={isEditModalOpen}
          onClose={handleEditClose}
          onSave={handleEditSubmit}
          currentItem={selectedItem}
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

