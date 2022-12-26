import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { addItem } from "../../../redux/client/client";
import {
  useHtml5QrCodeScanner,
  useHtml5QrCode,
} from "react-html5-qrcode-reader";

const html5QrCodeScannerFile = "/js/html5-qrcode.min.js";

const ScanQrReader = () => {
  const cart = useSelector((state: RootState) => state.client.products)!;
  const dispatch = useDispatch();
  const [result, setResult] = useState<{
    id: number;
    name: string;
    price: number;
  }>({
    id: 0,
    name: "",
    price: 0.0,
  });
  //const [cart, setCart] = useState<any[]>([]);

  const { Html5QrcodeScanner } = useHtml5QrCodeScanner(html5QrCodeScannerFile);

  useEffect(() => {
    if (Html5QrcodeScanner) {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );
      html5QrcodeScanner.render(
        (data: any) => {
          if (data) {
            setResult(JSON.parse(data.replace(/'/g, `"`)));
          }
        },
        (err: any) => console.log("err ->", err)
      );
    }
  }, [Html5QrcodeScanner, cart]);

  const addToCart = () => {
    dispatch(
      addItem({ id: result.id, name: result.name, price: result.price })
    );
    //setCart((old) => [...old, { id: result.id, name: result.name }]);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-screen p-2 break-words text-center">
        {result.name === ""
          ? ""
          : result.id + "-" + result.name + "-" + result.price}
      </h1>
      <button
        onClick={() => addToCart()}
        className="bg-[#1f2630] text-[#eeeeeb] px-2 py-1"
      >
        Add to cart
      </button>
      <div className="text-center flex flex-col align-center">
        <h1>Cart List</h1>
        {cart.map((i) => (
          <h1 key={i.id}>test {i.name}</h1>
        ))}
      </div>
      <div
        id="reader"
        className="self-center p-2 rounded-xl"
        style={{ width: "280px", height: "280px" }}
      ></div>
    </div>
  );
};

export default ScanQrReader;
