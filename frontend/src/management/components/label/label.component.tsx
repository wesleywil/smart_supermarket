import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

const Label = () => {
  const product = useSelector((state: RootState) => state.products.product);
  return (
    <div className="bg-[#eeeeeb] w-96 h-96 p-4 rounded-xl">
      <div className="flex justify-between border-b-2 border-[#8f51b5] pb-2">
        <div className="text-2xl self-center">
          <h2 className="font-bold">
            {product ? product.name : "Product Name"}
          </h2>
          <h4 className="text-sm font-bold">
            description: {product ? product.description : ""}
          </h4>
        </div>
        <h1 className="self-center text-6xl font-bold">
          {product ? product.price : ""}
        </h1>
      </div>
      <div className="p-4">
        <img
          src={product ? product.qrcode : "https://dummyimage.com/250x250"}
          alt="qrcode"
          className="mx-auto"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
    </div>
  );
};

export default Label;
