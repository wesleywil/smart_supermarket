import { useDispatch } from "react-redux";
import {
  form_open,
  qr_open,
  delete_open,
} from "../../../redux/management/management";

import { FaTrashAlt, FaEdit, FaQrcode } from "react-icons/fa";

const ProductListItem = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#eeeeeb] flex flex-row gap-2 p-2 rounded-xl text-3xl w-11/12 justify-between mx-auto text-[#8f51b5]">
      <div className="flex flex-col gap-2">
        <h1>Product Name</h1>
        <h3 className="text-base">Category: category</h3>
      </div>
      <h1 className="self-center">$00.00</h1>
      <div className="flex flex-row gap-4 px-2">
        <button
          onClick={() => dispatch(qr_open())}
          className="border-r hover:opacity-80 border-[#8f51b5] pr-2"
        >
          <FaQrcode />
        </button>
        <button
          onClick={() => dispatch(form_open())}
          className="border-r hover:opacity-80 border-[#8f51b5] pr-2"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => dispatch(delete_open())}
          className="hover:opacity-80"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;