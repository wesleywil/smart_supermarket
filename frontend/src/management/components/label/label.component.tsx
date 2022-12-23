import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

const Label = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const print_size = useSelector((state: RootState) => state.print.print_size);
  const qr_size = useSelector((state: RootState) => state.print.qr_size);
  const text_size = useSelector((state: RootState) => state.print.text_size);
  const text_price = useSelector((state: RootState) => state.print.text_price);
  return (
    <div
      className="bg-[#eeeeeb]  p-4 rounded-xl"
      style={{ width: print_size, height: print_size }}
    >
      <div className="flex justify-between border-b-2 border-[#8f51b5] pb-2">
        <div className={`self-center ${text_size}`}>
          <h2 className="font-bold">
            {product ? product.name : "Product Name"}
          </h2>
          <h4 className="text-sm font-bold">
            description: {product ? product.description : ""}
          </h4>
        </div>
        <h1 className={`self-center font-bold ${text_price}`}>
          ${product ? product.price : ""}
        </h1>
      </div>
      <div className="pt-1 pb-2">
        <img
          src={product ? product.qrcode : "https://dummyimage.com/250x250"}
          alt="qrcode"
          className="mx-auto pb-2"
          style={{ width: qr_size, height: qr_size }}
        />
      </div>
    </div>
  );
};

export default Label;
