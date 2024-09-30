import { useState } from "react";

export function Addstock() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const categories = {
    "All sports": ["Outdoor Sports", "Fitness Sports & Yoga", "Water Sports", "Racket Sports","Team Sports","Running & Walking","Cycling","Roller Sports"],
    "Mens collection": ["Men Topwear", "Men Bottomwear","Men Footwear", "Men Jackets & Sweatshirts","Men Innerwear"],
    "Womens collection": ["Women Top Wear", "Women Footwear", "Women Bottomwear","Women Jackets","Women Innerwear"],
  };
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSubcategories(categories[category] || []);
  };
  return (
    <form className="">
    <div className="space-y-3">
      <div className="border-b border-gray-900/10 pb-8">
        <h3 className="font-display font-bold">FILL OUT PRODUCT DETAILS</h3>

        
      </div>

      <div className="border-b border-gray-900/10 pb-8">


        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="productname" className="block text-sm font-medium leading-6 text-gray-900">
              Product name
            </label>
            <div className="mt-2">
              <input
                id="productname"
                name="productname"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="productprice" className="block text-sm font-medium leading-6 text-gray-900">
               Product price
            </label>
            <div className="mt-2">
              <input
                id="productprice"
                name="productprice"
                type="text"
                autoComplete="productprice"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="productposter" className="block text-sm font-medium leading-6 text-gray-900">
              Product poster
            </label>
            <div className="mt-2">
              <input
                id="productposter"
                name="productposter"
                type="text"
                autoComplete="productposter"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="productcategory" className="block text-sm font-medium leading-6 text-gray-900">
              Product category
            </label>
            <div className="mt-2">
              <select
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
      )}
          <div className="col-span-full">
            <label htmlFor="productrating" className="block text-sm font-medium leading-6 text-gray-900">
             Product rating
            </label>
            <div className="mt-2">
              <input
                id="productrating"
                name="productrating"
                type="number"
                autoComplete="off"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="productdescription" className="block text-sm font-medium leading-6 text-gray-900">
             Product description
            </label>
            <div className="mt-2">
              <input
                id="productdescription"
                name="productdescription"
                type="text"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
</div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">bnbmbnbnbnb</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what else you want to hear about.
        </p>

 
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-primary2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
  )
}

export default Addstock



