import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";

import { form_close } from "../../../redux/management/management";
import {
  cleanProduct,
  createProduct,
  updateProduct,
} from "../../../redux/management/products/products";

import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

const FormProduct = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const dispatch = useDispatch<AppDispatch>();

  const [isProduct, setIsProduct] = useState("New Product");

  useEffect(() => {
    if (product) {
      setIsProduct("Update Product");
    } else {
      setIsProduct("New Product");
    }
  }, [isProduct, product]);

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
      price: { value: number };
    };
    const name = target.name.value;
    const description = target.description.value;
    const price = target.price.value;

    if (product) {
      const data = {
        id: product.id,
        name: name,
        description: description,
        price: price,
      };
      dispatch(updateProduct(data));
      dispatch(form_close());
      dispatch(cleanProduct());
    } else {
      const data = {
        name: name,
        description: description,
        price: price,
      };
      dispatch(createProduct(data));
      dispatch(form_close());
    }
  };
  return (
    <div className="position-24 absolute border bg-[#1f2630]/60 backdrop-blur-sm inset-32 h-80 w-2/6 mx-auto rounded-xl overflow-hidden">
      <div className="flex justify-between px-4 mt-2">
        <h1 className=" text-[#eeeeeb] text-xl pt-2 px-4">{isProduct}</h1>
        <button
          onClick={() => {
            dispatch(form_close());
            dispatch(cleanProduct());
          }}
          className="text-[#8f51b5] bg-[#eeeeeb] rounded-full mt-2 px-1 w-6 h-6"
        >
          <FaTimes />
        </button>
      </div>

      <form className="flex flex-col gap-2 p-4 " onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Product's Name"
          className="py-2 pl-2"
          name="name"
          defaultValue={product ? product.name : ""}
        />
        <textarea
          placeholder="Description"
          className="py-2 pl-2"
          name="description"
          defaultValue={product ? product.description : ""}
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          className="py-2 pl-2"
          name="price"
          defaultValue={product ? product.price : 0.0}
        />
        <div className="flex justify-center gap-2 mt-2">
          <button className="bg-[#eeeeeb] text-xl px-2 rounded">Save</button>
          <button
            onClick={() => {
              dispatch(form_close());
              dispatch(cleanProduct());
            }}
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

export default FormProduct;
