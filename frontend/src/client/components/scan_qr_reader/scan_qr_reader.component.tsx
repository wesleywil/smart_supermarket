import QrcodeDecoder from "qrcode-decoder";
import { useEffect, useState, useRef } from "react";

const ScanQrReader = () => {
  const qr = new QrcodeDecoder();
  const video: any = document.querySelector("#video");
  //   var result: any = document.querySelector("#result");
  const [result, setResult] = useState("");
  const videox: any = useRef();

  const startScan = async () => {
    if (!qr.isCanvasSupported()) {
      alert("Your browser doesn't match the required specs.");
      throw new Error("Canvas and getUserMedia are required");
    }
    let code: any = await qr.decodeFromCamera(videox);
    console.log("code=> ", code);

    setResult(code.data);
  };

  useEffect(() => {
    console.log("Alert!");
  }, [qr, result]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold text-center w-full overflow-hidden">
        {result ? result : ""}
      </h1>
      <div className="self-center border-2 border-red-600">
        <video
          ref={videox}
          autoPlay
          style={{ width: "200px", height: "200px" }}
        ></video>
      </div>
      <div className="flex justify-center gap-2 text-[#eeeeeb] ">
        <button
          onClick={() => startScan()}
          className="w-1/3 bg-[#1f2630] font-bold"
        >
          Start
        </button>
        <button
          className="w-1/3 bg-[#1f2630] font-bold"
          onClick={() => {
            alert("Stoping CAM");
            qr.stop();
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default ScanQrReader;
