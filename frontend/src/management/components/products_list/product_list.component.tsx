import ProductListItem from "../product_list_item/product_list_item.component";
import ProductListSearch from "../product_list_search/product_list_search.component";

const ProductList = () => {
  return (
    <div className=" gap-2 w-full p-4">
      <h1 className="text-center text-[#eeeeeb] text-6xl underline">
        Products
      </h1>
      <div className="w-11/12 mx-auto mt-12">
        <ProductListSearch />
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </div>
  );
};

export default ProductList;
