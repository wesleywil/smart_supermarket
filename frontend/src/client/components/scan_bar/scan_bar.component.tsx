import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { switch_view } from "../../../redux/client/client";

import Logo from "../../../assets/SuperMarketLogo.svg";

const ScanBar = () => {
  const dispatch = useDispatch();
  const btnName = useSelector(
    (state: RootState) => state.client.switchInfo.btnName
  );
  const total = useSelector((state: RootState) => state.client.total);
  return (
    <div className="flex flex-col items-center bg-[#1f2630] text-[#eeeeeb] text-xl    px-4 py-2">
      <div className="flex flex-col items-center gap-1 pt-2 bg-[#eeeeeb] text-[#8f51b5] px-4 py-2 rounded-xl">
        <img src={Logo} alt="supermarket logo" className="w-8" />
      </div>

      <h1 className="mt-2 ">$ {total}</h1>

      <div className="w-full mt-2 flex justify-center py-2 border-y-2 border-[#8f51b5] ">
        <h1>Wesley Wilson</h1>
      </div>
      <button
        onClick={() => dispatch(switch_view())}
        className="w-1/2 md:w-40  mt-2 bg-[#8f51b5] border-2 border-[#8f51b5] hover:bg-[#1f2630] rounded-xl transition duration-700 ease-in-out"
      >
        {btnName}
      </button>
    </div>
  );
};

export default ScanBar;
