// import { Box, Pagination, PaginationItem, PaginationLink } from "@chakra-ui/react";
// import { useState } from "react";

// function ItemList(props) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const currentItems = props.items.slice(startIndex, endIndex);

//   return (
//     <Box>
//       {currentItems.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//       <Pagination mt={4} mb={4} justifyContent="center" onPageChange={handlePageChange} currentPage={currentPage}>
//         <PaginationItem>
//           <PaginationLink first />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink previous />
//         </PaginationItem>
//         {[...Array(Math.ceil(props.items.length / itemsPerPage)).keys()].map((pageNumber) => (
//           <PaginationItem key={pageNumber} isCurrent={pageNumber + 1 === currentPage}>
//             <PaginationLink onClick={() => handlePageChange(pageNumber + 1)}>{pageNumber + 1}</PaginationLink>
//           </PaginationItem>
//         ))}
//         <PaginationItem>
//           <PaginationLink next />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink last />
//         </PaginationItem>
//       </Pagination>
//     </Box>
//   );
// }

// export default ItemList;