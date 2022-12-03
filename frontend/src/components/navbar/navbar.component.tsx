const Navbar = () => {
  return (
    <div className="flex justify-center gap-2 text-[#eeeeeb] text-2xl">
      <button className="bg-[#8f51b5] hover:bg-[#1f2630] px-2 rounded-sm  transition duration-700 easy-in">
        Client Area
      </button>
      <button className="bg-[#8f51b5] hover:bg-[#1f2630] px-2 rounded-sm transition duration-700 easy-in">
        Admin Area
      </button>
    </div>
  );
};

export default Navbar;
