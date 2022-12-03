import { useDispatch } from "react-redux";
import { form_close } from "../../../redux/management/management";

import { FaTimes } from "react-icons/fa";

const NewProduct = () => {
  const dispatch = useDispatch();
  return (
    <div className="position-12 absolute border bg-[#1f2630]/60 backdrop-blur-sm inset-80 w-2/6 mx-auto rounded-xl overflow-hidden">
      <div className="flex justify-between px-4 mt-2">
        <h1 className=" text-[#eeeeeb] text-xl pt-2 px-4">New Product</h1>
        <button
          onClick={() => dispatch(form_close())}
          className="text-[#8f51b5] bg-[#eeeeeb] rounded-full mt-2 px-1 w-6 h-6"
        >
          <FaTimes />
        </button>
      </div>

      <form className="flex flex-col gap-2 p-4 ">
        <input type="text" placeholder="Product's Name" className="py-2 pl-2" />
        <textarea placeholder="Description" className="py-2 pl-2"></textarea>
        <input type="number" placeholder="Price" className="py-2 pl-2" />
        <select className="py-2 pl-2 font-semibold">
          <option>Category</option>
          <option value="0">Candies</option>
          <option value="1">Hortifruit</option>
          <option value="2">Breads</option>
        </select>
        <div className="flex justify-center gap-2 mt-2">
          <button className="bg-[#eeeeeb] text-xl px-2 rounded">Save</button>
          <button
            onClick={() => dispatch(form_close())}
            type="button"
            className="bg-[#eeeeeb] text-xl px-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
