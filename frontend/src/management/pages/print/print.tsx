import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../redux/store";

import Label from "../../components/label/label.component";

const Print = () => {
  const navigate = useNavigate();
  const product = useSelector((state: RootState) => state.products.product);
  const quantity = useSelector((state: RootState) => state.print.quantity);
  var rows = [],
    i = 0,
    len = quantity;
  while (++i <= len) {
    rows.push(product);
  }

  useEffect(() => {
    if (!product) {
      navigate("/admin");
    }
  }, [product, quantity]);
  return (
    <div className="w-screen h-screen p-2">
      <h1 className="bg-[#1f2630] text-[#eeeeeb] text-center font-bold text-3xl underline p-2">
        LABELS TO BE PRINTED
      </h1>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => {
            window.print();
          }}
          className="bg-[#8f51b5] text-[#eeeeeb] text-xl px-2 py-1 rounded-xl"
        >
          Print Labels
        </button>
      </div>

      <div id="to_print" className="flex flex-wrap justify-center gap-1 mt-2">
        {rows.map((i) => (
          <Label key={i} />
        ))}
      </div>
    </div>
  );
};
export default Print;
