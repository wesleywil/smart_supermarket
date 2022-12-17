import ProductItem from "../product_item/product_item.component";

const ListProducts = () => {
  return (
    <>
      <div className="mt-2 p-2 w-11/12 flex gap-2 flex-col items-center mx-auto rounded-xl h-80 overflow-y-auto">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="w-full mx-auto mt-2 p-2 flex justify-center bg-[#1f2630] h-12">
        <h1 className="text-[#eeeeeb] font-bold text-xl">Total: $ 0.00</h1>
      </div>
    </>
  );
};
export default ListProducts;
