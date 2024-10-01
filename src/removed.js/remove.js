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

