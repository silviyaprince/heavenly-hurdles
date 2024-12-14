import React from "react";
import { API } from "../global";
import { useState, useContext, useEffect } from "react";

import { useMemo } from "react";
import { ProductContext } from "./ProductContext";
import EditIcon from "@mui/icons-material/Edit";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";

const columns = [
  { id: "name", label: "Name", minWidth: 150 },
  { id: "price", label: "Price", minWidth: 150 },
  { id: "mrp", label: "MRP", minWidth: 100 },
  { id: "quantity", label: "Quantity", minWidth: 160 },
  { id: "description", label: "Description", minWidth: 160 },
  { id: "value", label: "Value", minWidth: 160 },
];



export function Stock() {
  const {
    selectedCategory,
    handleCategoryChange,
    categories,
    selectedSubcategory,
    handleSubcategoryChange,
    getSubcategories,
    selectedItem,
    handleItemChange,
    getItems,
    productData,
    setProductData,
  } = useContext(ProductContext);

  const rows = useMemo(
    () => productData.map((product) => ({ ...product })),
    [productData]
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]); // Stores selected row IDs

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row.id); // Selects all rows
      const updatedProducts = productData.map((product) => ({
        ...product,
        isSelected: true,
      }));
      setProductData(updatedProducts);
      setSelected(newSelected);
      return;
    }else {
      // Deselect all: set `isSelected` to false for all products and clear selected array
      const updatedProducts = productData.map((product) => ({
        ...product,
        isSelected: false,
      }));
      setProductData(updatedProducts);
      setSelected([]);
    }
     // Deselects all rows
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      // Row is not selected, so add it to the selected array
      newSelected = [...selected, id];
    } else {
      // Row is already selected, so remove it from the selected array
      newSelected = selected.filter((selectedId) => selectedId !== id);
    }
const updatedProducts = productData.map((product) =>
    product.id === id
      ? { ...product, isSelected: !product.isSelected }
      : product
  );

  setProductData(updatedProducts);
    setSelected(newSelected); // Update the selected state
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const getProducts = async () => {
    if (selectedItem) {
      try {
        const response = await fetch(`${API}/products/${selectedItem}`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  };

  useEffect(() => {
    if (selectedItem) {
      console.log(selectedItem);
      getProducts();
    }
  }, [selectedItem]);

  const handleEdit = () => {
    const newEditingData = selected.reduce((acc, id) => {
      const product = rows.find((row) => row.id === id);
      acc[id] = { ...product }; // Initialize with current row data
      return acc;
    }, {});
    setEditingData(newEditingData);
  };
  const handleDelete = async () => {
    if (selected.length === 0) return; // Exit if no rows are selected

    try {
      // Prepare the request body with the IDs of the selected rows
      const body = { ids: selected };
      console.log(typeof selected);
      console.log("Selected IDs to delete:", selected);
      // Send a DELETE request to delete many products at once
      const response = await fetch(
        `${API}/products/${selectedItem}/deleteMany`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        // Update local state by filtering out deleted rows
        const updatedData = productData.filter(
          (product) => !selected.includes(product.id)
        );
        setProductData(updatedData);

        // Clear the selected rows
        setSelected([]);
      } else {
        console.error("Error deleting products:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };

  const [editingData, setEditingData] = useState({}); // Object to hold editing data for selected products

  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleInputChange = (id, field, value) => {
    setEditingData((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  
  return (
    <div className="flex flex-col ">
      <div className="sm:col-span-3">
        <label
          htmlFor="productcategory"
          className="block text-sm font-medium leading-6 text-gray-900">
          Product category
        </label>
        <div className="mt-2">
          {/* Category Dropdown */}
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {Object.keys(categories).map((categoryKey) => (
              <option key={categoryKey} value={categoryKey}>
                {categoryKey.replace(/([A-Z])/g, " $1")}{" "}
                {/* Converts camelCase to spaced words */}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sm:col-span-3 mt-4">
        <label
          htmlFor="productsubcategory"
          className="block text-sm font-medium leading-6 text-gray-900">
          Product subcategory
        </label>
        <div className="mt-2">
          {selectedCategory && (
            <select
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}>
              <option value="">Select Subcategory</option>
              {getSubcategories().map((subcategory) => (
                <option key={subcategory.title} value={subcategory.title}>
                  {subcategory.title}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Item Dropdown */}
      <div className="sm:col-span-3 mt-4">
        <label
          htmlFor="productsubcategory"
          className="block text-sm font-medium leading-6 text-gray-900">
          Category Item
        </label>
        <div className="mt-2">
          {selectedSubcategory && (
            <select value={selectedItem} onChange={handleItemChange}>
              <option value="">Select Item</option>
              {getItems().map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="mt-24" id="stocktablescroll">
        <Paper style={{ width: "100%", overflow: "hidden" }}>
          <h2>STOCK DETAILS</h2>
          {selected.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "10px",
              }}>
              <IconButton onClick={handleEdit} color="primary">
                <EditIcon  />
              </IconButton>
              <IconButton onClick={handleDelete} color="secondary">
                <DeleteIcon />
              </IconButton>
            </div>
          )}
          <TableContainer>
            <Table stickyHeader aria-label="checkbox table">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={
                        selected.length > 0 && selected.length < rows.length
                      }
                      checked={
                        rows.length > 0 && selected.length === rows.length
                      }
                      onChange={handleSelectAllClick}
                      inputProps={{ "aria-label": "select all rows" }}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const isItemSelected = isSelected(row.id);
                    const value =
                      row.quantity * Number(row.price.replace(/,/g, ""));
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        onClick={() => handleClick(row.id)}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onClick={(e) => e.stopPropagation()} // Prevent row click from triggering select all
                            onChange={() => handleClick(row.id)}
                            inputProps={{
                              "aria-labelledby": `checkbox-${row.id}`,
                            }}
                          />
                        </TableCell>
                        {columns.map((column) => (
                          <TableCell key={column.id}>
                            {" "}
                            {isItemSelected && editingData[row.id] ? (
                              <input
                                type="text"
                                value={editingData[row.id][column.id] || ""}
                                onChange={(e) =>
                                  handleInputChange(
                                    row.id,
                                    column.id,
                                    e.target.value
                                  )
                                }
                                onClick={(e) => e.stopPropagation()}
                              />
                            ) : column.id === "value" ? (
                              value.toLocaleString()
                            ) : (
                              row[column.id]
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        <div className="mt-7">
          {" "}
          <Button variant="contained" onClick={""}>
            SAVE CHANGES
          </Button>
        </div>
      </div>
    </div>
  );
}
