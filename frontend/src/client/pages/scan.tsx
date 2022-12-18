import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useEffect } from "react";

import ScanBar from "../components/scan_bar/scan_bar.component";
import ScanQrReader from "../components/scan_qr_reader/scan_qr_reader.component";
import ListProducts from "../components/list_products/list_products.component";

const Scan = () => {
  const switch_panels = useSelector((state: RootState) => state.client.switch);
  const switchInfo = useSelector((state: RootState) => state.client.switchInfo);

  useEffect(() => {}, [switch_panels]);
  return (
    <div className="bg-[#eeeeeb] h-screen">
      <ScanBar />
      <div className="flex flex-col items-center mt-2 text-[#8f51b5]">
        <h1 className="text-2xl font-bold ">{switchInfo.title}</h1>
        <h2 className="text-xs text-[#1f2630]">{switchInfo.subtitle}</h2>
      </div>

      {switch_panels ? <ListProducts /> : <ScanQrReader />}
    </div>
  );
};

export default Scan;
