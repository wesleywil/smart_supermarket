import { useEffect, useState } from "react";
import { useHtml5QrCodeScanner } from "react-html5-qrcode-reader";

const html5QrCodeScannerFile = "/js/html5-qrcode.min.js";

const ScanQrReader = () => {
  const [result, setResult] = useState("");

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
          setResult(data);
          console.log("success? ->", data);
        },
        (err: any) => console.log("err ->", err)
      );
    }
  }, [Html5QrcodeScanner, result]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-screen p-2 break-words text-center">{result}</h1>
      <div
        id="reader"
        className="self-center p-2 rounded-xl"
        style={{ width: "280px", height: "280px" }}
      ></div>
    </div>
  );
};

export default ScanQrReader;
