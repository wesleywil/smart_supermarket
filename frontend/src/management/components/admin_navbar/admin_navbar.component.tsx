import { AiFillCloud } from "react-icons/ai";

const AdminNavbar = () => {
  return (
    <div className="h-screen w-44 bg-[#eeeeeb]">
      <div className="mt-12 flex flex-col items-center text-2xl">
        <div className="text-4xl mb-10">
          <AiFillCloud />
        </div>
        <h2>Products</h2>
        <h2>Print Labels</h2>
      </div>
    </div>
  );
};

export default AdminNavbar;
