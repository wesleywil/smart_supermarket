import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { sumTotal } from "../../../redux/client/client";

import ProductItem from "../product_item/product_item.component";

const ListProducts = () => {
  const productList = useSelector((state: RootState) => state.client.products);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0.0;
    productList?.map((item) => {
      total += item.price * item.quantity;
    });
    console.log("TOTAL==> ", total);
    dispatch(sumTotal(total));
  });
  return (
    <>
      <div className="mt-2 p-2 w-11/12 flex gap-2 flex-col items-center mx-auto rounded-xl h-80 overflow-y-auto">
        {productList?.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};
export default ListProducts;
