import ScanBar from "../components/scan_bar/scan_bar.component";
import ScanQrReader from "../components/scan_qr_reader/scan_qr_reader.component";

const Scan = () => {
  return (
    <div className="bg-[#eeeeeb] h-screen">
      <ScanBar />
      <div className="flex flex-col items-center mt-2 text-[#8f51b5]">
        <h1 className="text-2xl font-bold ">SCAN PRODUCTS</h1>
        <h2 className="text-xs text-[#1f2630]">
          scan the products to add to cart
        </h2>
      </div>

      <ScanQrReader />
    </div>
  );
};

export default Scan;
