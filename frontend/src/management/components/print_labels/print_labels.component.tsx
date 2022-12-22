import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { selectProductById } from "../../../redux/management/products/products";

import { FaPlus, FaMinus, FaPrint } from "react-icons/fa";

import Label from "../label/label.component";
import { useEffect } from "react";

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
      <div className="bg-[#eeeeeb] w-96 mx-auto p-4 rounded-xl">
        <h1 className="text-center text-4xl text-[#1f2630] font-bold">
          Options
        </h1>
        <div className="flex gap-3 justify-center">
          <h1 className="self-center text-2xl">Quantity</h1>
          <div className="flex items-center text-xl">
            <button className="bg-[#1f2630] text-[#eeeeeb] hover:opacity-90 p-2 rounded">
              <FaMinus />
            </button>
            <span className="p-2 font-bold">1</span>
            <button className="bg-[#1f2630] text-[#eeeeeb]  hover:opacity-90 p-2 rounded">
              <FaPlus />
            </button>
          </div>

          <button className="ml-4 bg-[#8f51b5] hover:bg-[#8f51b5]/80 text-[#1f2630] hover:text-[#eeeeeb] p-2 rounded-xl text-5xl transition duration-700 easy-in-out">
            <FaPrint />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintLabels;
