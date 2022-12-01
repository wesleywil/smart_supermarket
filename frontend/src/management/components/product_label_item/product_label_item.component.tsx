const ProductLabelItem = () => {
  return (
    <div className="flex gap-2 px-4 text-xl bg-[#eeeeeb] rounded">
      <div className="flex flex-col">
        <h1>Product name</h1>
        <h3 className="text-xs">Category: category</h3>
      </div>

      <h1>$0.00</h1>
    </div>
  );
};

export default ProductLabelItem;
