import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import {
  add_quantity,
  sub_quantity,
  change_size,
} from "../../../redux/management/print/print";

import { FaPlus, FaMinus, FaPrint } from "react-icons/fa";

const PrintOptions = () => {
  const navigate = useNavigate();
  const quantity = useSelector((state: RootState) => state.print.quantity);
  const print_size = useSelector((state: RootState) => state.print.size);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#eeeeeb] w-96 mx-auto p-4 rounded-xl">
      <h1 className="text-center text-4xl text-[#1f2630] font-bold">
        Options - {print_size}
      </h1>
      <div className="flex gap-2 justify-center border border-[#1f2630] p-1 my-2 rounded-xl ">
        <button
          onClick={() => dispatch(change_size("large"))}
          className="bg-[#8f51b5] hover:opacity-90 px-2 py-1 text-xl font-bold rounded"
        >
          Lg
        </button>
        <button
          onClick={() => dispatch(change_size("medium"))}
          className="bg-[#8f51b5] hover:opacity-90 px-2 py-1 text-xl font-bold rounded"
        >
          Md
        </button>
        <button
          onClick={() => dispatch(change_size("small"))}
          className="bg-[#8f51b5] hover:opacity-90 px-2 py-1 text-xl font-bold rounded"
        >
          Sm
        </button>
      </div>
      <div className="flex gap-3 justify-center">
        <h1 className="self-center text-2xl">Quantity</h1>
        <div className="flex items-center text-xl">
          <button
            onClick={() => dispatch(sub_quantity())}
            className="bg-[#1f2630] text-[#eeeeeb] hover:opacity-90 p-2 rounded"
          >
            <FaMinus />
          </button>
          <span className="p-2 font-bold">{quantity}</span>
          <button
            onClick={() => dispatch(add_quantity())}
            className="bg-[#1f2630] text-[#eeeeeb]  hover:opacity-90 p-2 rounded"
          >
            <FaPlus />
          </button>
        </div>

        <button
          onClick={() => navigate("/admin/print")}
          className="ml-4 bg-[#8f51b5] hover:bg-[#8f51b5]/80 text-[#1f2630] hover:text-[#eeeeeb] p-2 rounded-xl text-5xl transition duration-700 easy-in-out"
        >
          <FaPrint />
        </button>
      </div>
    </div>
  );
};

export default PrintOptions;
