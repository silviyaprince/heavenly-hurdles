
function All(){
    

const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Sports");
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const dropdownRef = useRef(null);

  const handleStockClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedCategoryItem(null);
    setDisplayedProducts([]); // Close dropdown after selecting an option
  };

  const handleItemClick = (item) => {
    setSelectedCategoryItem(item);
    const categoryProducts = productData[item];

    if (categoryProducts) {
      setDisplayedProducts(categoryProducts);
    } else {
      setDisplayedProducts([]);
    }
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleModeSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-screen dark:bg-black dark:text-white bg-green-100">
      <nav className="bg-white w-64 h-full relative">
        <div className="px-5 py-6">
          <div className="flex flex-col h-full">
            <div className="flex self-center mb-6">
              <img
                className="h-auto w-24 "
                src={HorseLogo}
                alt="Your Company"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <button
                onClick={() => navigate("/")}
                className="block rounded-md bg-fuchsia-800 px-3 py-2 text-md font-medium font-display font-semibold text-white">
                DASHBOARD
              </button>
              <button className="block rounded-md px-3 py-2 text-md font-medium font-display font-semibold text-black hover:bg-fuchsia-800 hover:text-white">
                SIGN IN
              </button>
              <div className="relative">
                <button
                  onClick={handleStockClick}
                  className="block w-full rounded-md px-3 py-2 text-md font-medium font-display font-semibold text-black hover:bg-fuchsia-800 hover:text-white">
                  STOCK
                </button>
              </div>

              <button className="block w-full rounded-md px-3 py-2 text-md font-medium font-display font-semibold text-black hover:bg-fuchsia-800 hover:text-white">
                CART
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {/* <div className="flex items-center space-x-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <div className="text-base font-medium font-display font-semibold hover:bg-slate-500 hover:text-white">ADD STOCK</div>
                  <div className="text-sm font-medium text-gray-400">Your Role</div>
                </div>
              </div> */}
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => navigate("/addstock")}
                  className="block rounded-md px-3 py-2 text-md font-medium font-display font-semibold text-black hover:bg-fuchsia-800 hover:text-white">
                  ADD STOCK
                </button>
                <button className="block rounded-md px-3 py-2 text-md font-medium font-display font-semibold text-black hover:bg-fuchsia-800 hover:text-white">
                  SETTINGS
                </button>
                <button className="block rounded-md px-3 py-2 text-md font-medium font-display font-semibold text-black hover:bg-fuchsia-800 hover:text-white">
                  SIGN OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow relative">
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute left-34 top-0 w-full h-screen bg-white shadow-lg z-10">
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
        </div>
        </div>
        )
        }



        
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/products"
//           element={<Productlist displayedProducts={displayedProducts} />}
//         />
//         {/* <Route
//           path="/campingproducts/:campingproductid"
//           element={<Campingproductdetails />}
//         /> */}
//         <Route path="/addstock" element={<Addstock />} />
//       </Routes>
//     </div>
  
// );
// }