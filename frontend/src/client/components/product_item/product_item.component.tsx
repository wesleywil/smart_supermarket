import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/client/client";

import { FaTrashAlt } from "react-icons/fa";

type ProductItemInfo = {
  id: number;
  name: string;
  quantity?: number;
  price: number;
};

const ProductItem = ({ id, name, quantity, price }: ProductItemInfo) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full font-semibold text-xl text-[#1f2630] p-2 flex justify-between bg-[#8f51b5]/50 rounded-xl">
      <h1 className="self-center w-52 flex justify-between overflow-x-hidden">
        {id}-{name}
        <span className="text-base bg-[#eeeeeb] ml-1 px-2 py-1 rounded-full">
          {quantity}X
        </span>{" "}
      </h1>
      <h1 className="self-center">$ {price}</h1>
      <button
        onClick={() => dispatch(removeItem(id))}
        className="bg-[#eeeeeb] p-2 rounded-full self-center"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default ProductItem;
