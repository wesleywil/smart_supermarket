import { FaSearch } from "react-icons/fa";

const ProductListSearch = () => {
  return (
    <div className="flex gap-0 text-2xl">
      <input
        type="text"
        className="w-96 rounded-l-xl py-1 pl-2"
        placeholder="Search product"
      />
      <button className="bg-[#8f51b5] px-8 hover:bg-[#8f51b5]/80 text-[#eeeeeb] rounded-r-xl transition duration-700 ease-in-out">
        <FaSearch />
      </button>
    </div>
  );
};

export default ProductListSearch;
