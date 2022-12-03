import Navbar from "../../components/navbar/navbar.component";

import Logo from "../../assets/SuperMarketLogo.svg";

const Homepage = () => {
  return (
    <div className="bg-food w-screen h-screen">
      <div className="bg-[#1f2630]/80 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col gap-2 self-center">
          <div className="border-2 border-[#8f51b5]/60 w-fit p-4 self-center">
            <div className="bg-[#8f51b5]/60  backdrop-blur-sm text-[#eeeeeb]">
              <div className="p-4 text-6xl font-bold flex gap-2">
                <h1 className="self-center">Diamond</h1>
                <img src={Logo} alt="logo image" className="w-12 self-center" />
                <h1 className="self-center">Market</h1>
              </div>
              <h2 className="text-center text-2xl font-semibold">
                Your smart market
              </h2>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
