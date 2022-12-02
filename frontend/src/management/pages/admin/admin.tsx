import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

import AdminNavbar from "../../components/admin_navbar/admin_navbar.component";
import ProductList from "../../components/products_list/product_list.component";
import PrintLabels from "../../components/print_labels/print_labels.component";

const Admin = () => {
  const switch_panels = useSelector(
    (state: RootState) => state.management.switch
  );
  return (
    <div className="bg-[#1f2630] flex">
      <AdminNavbar />
      <div className="m-4 w-11/12 border border-[#eeeeeb] rounded-2xl">
        {switch_panels ? <PrintLabels /> : <ProductList />}
      </div>
    </div>
  );
};
export default Admin;
