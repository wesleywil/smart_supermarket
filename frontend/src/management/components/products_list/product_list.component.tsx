import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { form_open, form_close } from "../../../redux/management/management";
import { fetchProducts } from "../../../redux/management/products/products";

import NewProduct from "../new_product/new_product.component";
import ProductListItem from "../product_list_item/product_list_item.component";
import ProductListSearch from "../product_list_search/product_list_search.component";
import ProductListQr from "../product_list_qr/product_list_qr.component";
import ProductListItemDelete from "../product_list_item_delete/product_list_item_delete.component";

const ProductList = () => {
  const closedform = useSelector(
    (state: RootState) => state.management.form_closed
  );
  const closedQr = useSelector(
    (state: RootState) => state.management.qr_closed
  );
  const closedDelete = useSelector(
    (state: RootState) => state.management.delete_closed
  );
  const status = useSelector((state: RootState) => state.products.status);
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (status === "idle" || status === "product updated") {
      dispatch(fetchProducts());
      dispatch(form_close());
    }
  }, [status, products]);
  return (
    <div className=" gap-2 w-full p-4">
      <h1 className="text-center text-[#eeeeeb] text-6xl underline">
        Products
      </h1>
      <div className="w-11/12 mx-auto mt-12 flex justify-between">
        <ProductListSearch />
        <button
          onClick={() => dispatch(form_open())}
          className="bg-[#8f51b5] px-8 mr-2 hover:bg-[#8f51b5]/80 text-[#eeeeeb] font-semibold rounded transition duration-700 ease-in-out"
        >
          New Product
        </button>
      </div>
      {closedDelete ? "" : <ProductListItemDelete />}

      <div className="flex flex-col gap-1 mt-1">
        {products.map((item) => (
          <ProductListItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            qrcode={item.qrcode}
            price={item.price}
          />
        ))}
      </div>

      {closedform ? "" : <NewProduct />}
      {closedQr ? "" : <ProductListQr />}
    </div>
  );
};

export default ProductList;
