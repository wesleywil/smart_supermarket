import { useDispatch } from "react-redux";
import {
  filterByName,
  fetchProducts,
} from "../../../redux/management/products/products";
import type { AppDispatch } from "../../../redux/store";

import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

const ProductListSearch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length !== 0) {
      dispatch(filterByName(newValue));
    } else {
      dispatch(fetchProducts());
    }
  };
  useEffect(() => {}, [filterByName]);
  return (
    <div className="flex gap-0 text-2xl">
      <input
        type="text"
        className="w-96 rounded-l-xl py-1 pl-2"
        placeholder="Search product"
        onChange={handleChange}
      />
      <button className="bg-[#8f51b5] px-8 hover:bg-[#8f51b5]/80 text-[#eeeeeb] rounded-r-xl transition duration-700 ease-in-out">
        <FaSearch />
      </button>
    </div>
  );
};

export default ProductListSearch;
