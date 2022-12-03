import { useDispatch } from "react-redux";
import { delete_close } from "../../../redux/management/management";

const ProductListItemDelete = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-fit px-2 mx-auto text-center mt-2 ">
      <h1 className="text-xl font-bold text-[#eeeeeb]">
        Are you sure you want to delete the "Product Name" ?{" "}
      </h1>
      <div className="flex justify-center gap-2 p-2">
        <button className="border-r-2 border-[#eeeeeb] pr-2 text-xl text-red-600 hover:text-red-400 font-bold">
          Yes
        </button>

        <button
          onClick={() => dispatch(delete_close())}
          className="text-xl text-[#8f51b5] hover:text-[#eeeeeb] font-bold"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ProductListItemDelete;
