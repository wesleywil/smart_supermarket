import { useDispatch } from "react-redux";
import { qr_close } from "../../../redux/management/management";

import { FaTimes } from "react-icons/fa";

const ProductListQr = () => {
  const dispatch = useDispatch();
  return (
    <div className="pb-8 pt-2 px-2 bg-[#1f2630]/40 backdrop-blur-sm border border-[#8f51b5] rounded-xl absolute mx-auto inset-80 w-80 h-80 ">
      <div className="flex justify-between mb-4">
        <h1 className="text-[#eeeeeb] text-xl pl-6">QR Code</h1>
        <button
          onClick={() => dispatch(qr_close())}
          className="border rounded-full px-1 bg-[#8f51b5]  text-[#eeeeeb] hover:text-[#eeeeeb]/70"
        >
          <FaTimes />
        </button>
      </div>

      <div className=" w-64 h-64 mx-auto bg-[#eeeeeb]"></div>
    </div>
  );
};

export default ProductListQr;
