import AdminNavbar from "../../components/admin_navbar/admin_navbar.component";
import ProductList from "../../components/products_list/product_list.component";

const Admin = () => {
  return (
    <div className="bg-[#1f2630] flex">
      <AdminNavbar />
      <div className="m-4 w-11/12 border border-[#eeeeeb] rounded-2xl">
        <ProductList />
      </div>
    </div>
  );
};
export default Admin;
