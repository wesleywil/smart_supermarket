import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { delete_close } from "../../../redux/management/management";
import { deleteProduct } from "../../../redux/management/products/products";
import { useEffect } from "react";

const ProductListItemDelete = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-fit px-2 mx-auto text-center mt-2 ">
      <h1 className="text-xl text-[#eeeeeb]">
        Are you sure you want to delete the{" "}
        <span className="font-bold text-[#8f51b5] underline">
          {product.name}
        </span>{" "}
        product ?{" "}
      </h1>
      <div className="flex justify-center gap-2 p-2">
        <button
          onClick={() => {
            dispatch(deleteProduct(product));
            dispatch(delete_close());
          }}
          className="border-r-2 border-[#eeeeeb] pr-2 text-xl text-red-600 hover:text-red-400 font-bold"
        >
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
