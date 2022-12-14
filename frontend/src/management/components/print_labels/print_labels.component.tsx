import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { selectProductById } from "../../../redux/management/products/products";

import Label from "../label/label.component";
import PrintOptions from "../print_options/print_options.component";

const PrintLabels = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {}, [products]);

  const selectById = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    console.log("VALUE=> ", id);
    dispatch(selectProductById(+id));
  };
  return (
    <div className="gap-2 w-full p-4 flex flex-col">
      <h1 className="text-center text-[#eeeeeb] text-6xl underline">
        Print Labels
      </h1>
      <div className="w-fit flex flex-col gap-1 mt-4 border p-4 rounded-xl self-center">
        <h2 className="text-4xl text-[#eeeeeb]">Select Product</h2>
        <select
          onChange={selectById}
          className="bg-[#8f51b5] text-[#eeeeeb] text-xl font-bold rounded-xl pl-2"
        >
          {products.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} - ${item.price}
            </option>
          ))}
        </select>
      </div>
      <div className="self-center">
        <Label />
      </div>
      <PrintOptions />
    </div>
  );
};

export default PrintLabels;
