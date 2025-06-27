import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const brandsList = ["Samsung", "Apple", "Huawei", "pocco", "Lenovo"];
const categoriesList = ["Mobile Accessories", "Electronics", "Smartphones", "Modern tech"];
const featureList = ["Metalic", "Plastic cover", "8GBRam", "Super power", "Large Memory"];
const conditionList = ["Refurbished", "Brand New", "Old Items"];
const ratingList = ["★★★★★", "★★★★", "★★★", "★★"];

const ITEMS_PER_PAGE = 12;

const ProductListing = () => {
  const { product } = useAppContext();

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
   const [inStock, setInStock] = useState(false);

  const handleCheckboxChange = (e, selected, setSelected) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
    setCurrentPage(1);
  };

  const filteredProducts = product.filter((product) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const conditionMatch = selectedCondition.length === 0 || selectedCondition.includes(product.condition);
    const featureMatch =
      selectedFeature.length === 0 ||
      (Array.isArray(product.features) &&
        product.features.some((feature) => selectedFeature.includes(feature)));
    const ratingMatch = selectedRating.length === 0 || selectedRating.includes(product.rating);
    const verifiedMatch = !verifiedOnly || product.verified === true;
    const inStockMatch = !inStock || product.inStock === true;


    return brandMatch && categoryMatch && conditionMatch && featureMatch && ratingMatch && verifiedMatch && inStockMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="text-sm text-gray-500 mb-4">
        <p>
                <Link to="/">Home</Link> /
                <Link to="/computerandtech">Computer and tech</Link> 
            </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 space-y-6 sticky top-4">
          <FilterSection title="Categories" list={categoriesList} selected={selectedCategories} setSelected={setSelectedCategories} />
          <FilterSection title="Brands" list={brandsList} selected={selectedBrands} setSelected={setSelectedBrands} />
          <FilterSection title="Features" list={featureList} selected={selectedFeature} setSelected={setSelectedFeature} />
          <FilterSection title="Condition" list={conditionList} selected={selectedCondition} setSelected={setSelectedCondition} />
          <FilterSection title="Rating" list={ratingList} selected={selectedRating} setSelected={setSelectedRating} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">
              <strong>{filteredProducts.length} items</strong> found
            </p>
            <div className="flex gap-4 items-center">
              <label className="text-sm">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                />
                Verified only
              </label>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Featured</option>
              </select>
              <button
                onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
                className="px-5 py-1 rounded w-20 text-xs bg-white hover:bg-gray-100"
              >
                
                     <img src={assets.list} alt="list"className="h-6 absolute mt-0 "/>
                     <img src={assets.grid} alt="grid"className="h-6 ml-6"/>
            
              </button>
            </div>
          </div>

          {/* Products Display */}
          <div
            className={
              viewType === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className={`border rounded-lg p-4 bg-white shadow-sm ${
                  viewType === "list" ? "flex gap-4 items-start" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`rounded ${
                    viewType === "grid"
                      ? "w-full h-60 object-cover"
                      : "w-40 h-40 object-cover"
                  }`}
                />
                <div className={viewType === "list" ? "flex-1" : ""}>
                  <h3 className="text-md font-semibold mt-4">{product.name}</h3>
                  <p className="text-red-600 font-bold text-xl mt-2">{product.price}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.orders} orders ·{" "}
                    <span className="text-green-600">{product.shipping}</span>
                  </p>
                  <div className="text-yellow-500 text-sm mt-1">{product.rating}</div>

                  {Array.isArray(product.features) && (
                    <p className="text-sm text-gray-600 mt-1">
                      Features: {product.features.join(", ")}
                    </p>
                  )}

                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <Link to={`/details/${product._id}`} className="text-blue-600 text-sm mt-2 block">
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === page ? "bg-blue-500 text-white" : "bg-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Reusable Filter Section
const FilterSection = ({ title, list, selected, setSelected }) => {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      {list.map((item) => (
        <label key={item} className="block text-sm text-gray-700">
          <input
            type="checkbox"
            value={item}
            onChange={handleChange}
            checked={selected.includes(item)}
            className="mr-2"
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default ProductListing;
