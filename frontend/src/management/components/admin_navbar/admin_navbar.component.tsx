import { useDispatch } from "react-redux";

import { AiFillCloud } from "react-icons/ai";
import {
  switch_products,
  switch_print,
} from "../../../redux/management/management";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-44 bg-[#eeeeeb]">
      <div className="mt-12 flex flex-col items-center text-2xl">
        <div className="text-4xl mb-10">
          <AiFillCloud />
        </div>
        <button
          onClick={() => dispatch(switch_products())}
          className="hover:text-3xl duration-700 easy-in-out"
        >
          Products
        </button>
        <button
          onClick={() => dispatch(switch_print())}
          className="hover:text-3xl duration-700 easy-in-out"
        >
          Print Labels
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
