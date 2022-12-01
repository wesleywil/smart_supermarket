import { FaQrcode } from "react-icons/fa";

const Label = () => {
  return (
    <div className="bg-[#eeeeeb] w-96 h-96 p-4 rounded-xl">
      <div className="flex justify-between border-b-2 border-[#8f51b5] pb-2">
        <div className="text-2xl self-center">
          <h2 className="font-bold">Product Name</h2>
          <h4 className="text-sm font-bold">Category: category</h4>
        </div>
        <h1 className="self-center text-6xl font-bold">$ 0.00</h1>
      </div>
      <div className="p-4">
        <img
          src="https://dummyimage.com/250x250"
          alt="qrcode"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Label;
