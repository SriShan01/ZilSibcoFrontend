import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
 
const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: "white",
    border: "1px solid #ccc",
    borderRadius: "1px",
    margin: "0 2px",
    minWidth: "32px",
    minHeight: "32px",
    backgroundColor: "#94B0BE",
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "#EF7660",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#FF5449",
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    color: "#666",
  },
});
 
export const PaginationPaneMultiplePg = ({
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const handleChange = (event, value) => {
    handlePageChange(value);
  };
 
  return (
    <Stack direction="row" spacing={2}>
      {/* <FaChevronLeft
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer"
      /> */}
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        size="small"
      />
      {/* <FaChevronRight
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer"
      /> */}
    </Stack>
  );
};
