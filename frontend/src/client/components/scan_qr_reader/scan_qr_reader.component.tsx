import QrcodeDecoder from "qrcode-decoder";
import { useEffect, useState, useRef } from "react";

const ScanQrReader = () => {
  const qr = new QrcodeDecoder();
  const video: any = document.querySelector("#video");
  //   var result: any = document.querySelector("#result");
  const [result, setResult] = useState("Products information will appear here");

  const startScan = async () => {
    alert(qr.getVideoDevices);
    alert("Scanning...");
    qr.decodeFromCamera(video).then((res: any) => {
      console.log(res);
      setResult(res.data);
    });
    // if (!qr.isCanvasSupported()) {
    //   alert("Your browser doesn't match the required specs.");
    //   throw new Error("Canvas and getUserMedia are required");
    // }
    // const code: any = await qr.decodeFromCamera(video, {
    //   width: 300,
    //   height: 300,
    // });
    // console.log("code=> ", code);

    // setResult(code.data);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="mt-2 font-bold text-center w-full overflow-hidden">
        {result}
      </h1>
      <div
        className="bg-[#1f2630] self-center rounded-xl"
        style={{ width: 300, height: 300 }}
      >
        <video id="video" className="self-center"></video>
      </div>

      <div className="flex justify-center gap-2 text-[#eeeeeb] ">
        <button
          onClick={() => startScan()}
          className="w-1/3 text-2xl bg-[#8f51b5] hover:bg-[#1f2630] font-bold rounded-xl transition duration-700 ease-in-out"
        >
          Start
        </button>
        <button
          className="w-1/3 text-2xl bg-[#8f51b5] hover:bg-[#1f2630] font-bold rounded-xl transition duration-700 ease-in-out"
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
