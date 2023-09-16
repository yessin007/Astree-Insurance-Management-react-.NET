/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import ComplexTable from "views/admin/DemandeTransfer/components/ComplexTable";
import AddForm  from "views/admin/DemandeTransfer/components/AddForm";
import {

  columnsDataComplex,
} from "views/admin/DemandeTransfer/variables/columnsData";
// import "views/admin/DemandeTransfer/variables/pagination.css";

import tableDataComplex from "views/admin/DemandeTransfer/variables/tableDataComplex.json";
import React,{useState} from "react";
// import { Paginator } from "react-chakra-pagination";
// import ReactPaginate from 'react-paginate';
// import { ChakraPagination } from 'react-chakra-pagination';
export default function Settings() {

  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 10;

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage + 1);
  };
  // Chakra Color Mode



  return (
   
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
       columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        
        <ComplexTable/>
        
    
      </SimpleGrid>
     
    </Box>
    
  );
}
