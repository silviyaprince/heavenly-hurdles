<div className="flex-grow relative">
    {isDropdownOpen && location.pathname === "empty"&&(
      <div
        ref={dropdownRef}
        className="absolute left-0 top-0 w-full h-screen !bg-white shadow-lg z-60">
        <div className="p-5">
          <div className="flex space-x-5">
            <button
              onClick={() => handleOptionClick("All Sports")}
              className={`rounded-md px-3 py-2 text-md font-medium font-display font-semibold  ${
                selectedOption === "All Sports"
                  ? "bg-fuchsia-800 text-white"
                  : "text-black"
              }`}>
              ALL SPORTS
            </button>
            <button
              onClick={() => handleOptionClick("Men's Collection")}
              className={`rounded-md px-3 py-2 text-md font-medium font-display font-semibold  ${
                selectedOption === "Men's Collection"
                  ? "bg-fuchsia-800 text-white"
                  : "text-black"
              }`}>
              MEN'S COLLECTION
            </button>
            <button
              onClick={() => handleOptionClick("Women's Collection")}
              className={`rounded-md px-3 py-2 text-md font-medium font-display font-semibold  ${
                selectedOption === "Women's Collection"
                  ? "bg-fuchsia-800 text-white"
                  : "text-black"
              }`}>
              WOMEN'S COLLECTION
            </button>
          </div>
          <div className="mt-5">
            {selectedOption === "All Sports" && (
              <div className="flex flex-wrap gap-8">
                {allSportsCategories.map((category, index) => (
                  <div key={index} className="flex flex-col w-64">
                    {/* Category Heading */}
                    <h3 className="text-lg font-bold mb-3 text-blue-700">
                      {category.title}
                    </h3>

                    {/* Category Items */}
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleItemClick(item)}
                          className="cursor-pointer hover:text-blue-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {selectedOption === "Men's Collection" && (
              <div className="flex flex-wrap gap-8">
                {mensCollectionCategories.map((category, index) => (
                  <div key={index} className="flex flex-col w-64">
                    {/* Category Heading */}
                    <h3 className="text-lg font-bold mb-3 text-blue-700">
                      {category.title}
                    </h3>

                    {/* Category Items */}
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleItemClick(item)}
                          className="cursor-pointer hover:text-blue-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {selectedOption === "Women's Collection" && (
              <div className="flex flex-wrap gap-8">
                {womensCollectionCategories.map((category, index) => (
                  <div key={index} className="flex flex-col w-64">
                    {/* Category Heading */}
                    <h3 className="text-lg font-bold mb-3 text-blue-700">
                      {category.title}
                    </h3>

                    {/* Category Items */}
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          onClick={() => handleItemClick(item)}
                          className="cursor-pointer hover:text-blue-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
     
    )}
    <div> 
{displayedProducts.map((product,index)=>(
 <Product key={index} product={product}/>
))}
   </div> 
    </div>





{/* <div className="sm:col-span-3">
            <label htmlFor="productcategory" className="block text-sm font-medium leading-6 text-gray-900">
              Product category
            </label> */}
            {/* <div className="mt-2"> */}
              {/* <select
                id="productcategory"
                name="productcategory"
                autoComplete="productcategory"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={handleCategoryChange}
              >
                 {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
              </select>
            </div>
            
          </div>

        
          {selectedCategory && (
        <div className="sm:col-span-3 mt-4">
          <label htmlFor="productsubcategory" className="block text-sm font-medium leading-6 text-gray-900">
            Product subcategory
          </label>
          <div className="mt-2">
            <select
              id="productsubcategory"
              name="productsubcategory"
              autoComplete="productsubcategory"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      )} */}


       const rows = Object.entries(productData)
  .flatMap(([category ,products])=> // Flatten the arrays
  products.map(product => 
    createData(product.id, product.name, category, product.mrp, product.price,product.quantity,product.value)
  ));


  //stock.js

//   return (
   
//       <div className="mt-24" id="stocktablescroll">
//         <EnhancedTable/>


//      <div className="mt-7">   <Button  variant="contained">SAVE CHANGES</Button></div>
//       </div>
     
//     </div>
//   );
// }


// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// const headCells = [
//   {
//     id: 'description',
//     numeric: false,
//     disablePadding: true,
//     label: 'Product Name',
//   },
  
//   {
//     id: 'mrp',
//     numeric: true,
//     disablePadding: false,
//     label: 'MRP',
//   },
  
//   {
//     id: 'price',
//     numeric: true,
//     disablePadding: false,
//     label: ' Price',
//   },
//   {
//     id: 'quantity',
//     numeric: true,
//     disablePadding: false,
//     label: 'Quantity',
//   },
//   {
//     id: 'value',
//     numeric: true,
//     disablePadding: false,
//     label: 'Value',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;
//   return (
//     <Toolbar
//       sx={[
//         {
//           pl: { sm: 2 },
//           pr: { xs: 1, sm: 1 },
//         },
//         numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         },
//       ]}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//         Stock Details
//         </Typography>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
         
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="edit">
//           <IconButton>
           
//            < ModeEditOutlineIcon/>
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <div></div>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export  function EnhancedTable() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const {productData,setProductData,setDisplayedProducts,selectedCategoryItem,selectedItem}=useContext(ProductContext);

//  //
// //  

// const getProducts = async () => {
//   if (selectedItem) {
//     try {
//       const response = await fetch(
//         `${API}/products/${selectedItem}`
//       );
//       const data = await response.json();
//       setProductData(data);
      
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   }
// };

// useEffect(() => {
//   if (selectedItem) {
//     console.log(selectedItem)
//     getProducts();
//   }
// }, [selectedItem]);

//   //
//   function createData(id, description, mrp, price, quantity) {
//     const value = quantity * Number(price.replace(/,/g, ""));
//     return {
//       id,
//       description,
//       mrp,
//       price,
//       quantity,
//      value,
//     };
//   }
//   // console.log(productData.products)
//   const rows = productData.map(product => 
//     createData(product.id, product.description,  product.mrp, product.price,product.quantity,product.value)
//   );
//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const visibleRows = React.useMemo(
//     () =>
//       [...rows]
//         .sort(getComparator(order, orderBy))
//         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
//     [rows,order, orderBy, page, rowsPerPage],//i added rows inside this
//   );

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = selected.includes(row.id);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.id)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.id}
//                     selected={isItemSelected}
//                     sx={{ cursor: 'pointer' }}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           'aria-labelledby': labelId,
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell
//                       component="th"
//                       id={labelId}
//                       scope="row"
//                       padding="none"
//                     >
//                       {row.description}
//                     </TableCell>

                   
//                     <TableCell align="right">{row.mrp}</TableCell>
//                     <TableCell align="right">{row.price}</TableCell>
//                     <TableCell align="right">{row.quantity}</TableCell>
//                     <TableCell align="right">{row.value}</TableCell> 
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
// //