import { FaTrashAlt } from "react-icons/fa";

const ProductItem = () => {
  return (
    <div className="w-full font-semibold text-xl text-[#1f2630] p-2 flex justify-between bg-[#8f51b5]/50 rounded-xl">
      <h1 className="self-center">
        Product Name{" "}
        <span className="text-base bg-[#eeeeeb] px-2 py-1 rounded-full">
          2x
        </span>{" "}
      </h1>
      <h1 className="self-center">$ 00.00</h1>
      <button className="bg-[#eeeeeb] p-2 rounded-full self-center">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default ProductItem;
