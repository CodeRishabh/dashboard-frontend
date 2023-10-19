import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Card from "../Components/Card";
import { AiOutlineDollar } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { LiaWalletSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi";
import CustomBarChart from "../Components/CustomBarChart";
import CustomPieChart from "../Components/CustomPieChart";
import ProductTile from "../Components/ProductTile";
import MobileNav from "../Components/MobileNav";

const Dashboard = () => {
  const cardsData = [
    {
      icon: <AiOutlineDollar />,
      iconColor: "text-[#07aa53]",
      bgColor: "bg-[#b0dbc5]",
      title: "Earnings",
      number: "$198k",
      subtitle: "37.8%",
      isPositive: true,
    },
    {
      icon: <CgNotes />,
      iconColor: "text-[#A101FF]",
      bgColor: "bg-[#E7DBFF]",
      title: "Orders",
      number: "$2.4k",
      subtitle: "2%",
      isPositive: false,
    },
    {
      icon: <LiaWalletSolid />,
      iconColor: "text-[#0858BF]",
      bgColor: "bg-[#CCF2FF]",
      title: "Balance",
      number: "$2.4k",
      subtitle: "2%",
      isPositive: false,
    },
    {
      icon: <HiOutlineShoppingBag />,
      iconColor: "text-[#D90010]",
      bgColor: "bg-[#FFAED7]",
      title: "Total Sales",
      number: "$89k",
      subtitle: "11%",
      isPositive: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("option1");
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      {!mobileNavbar && (
        <div className=" w-screen lg:w-4/5 absolute lg:left-[20%] bg-[#F5F6F8] px-10 py-10 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="greeting">
              <span className=" text-2xl font-medium flex items-center justify-start gap-5">
                <MdMenu
                  className=" flex lg:hidden"
                  onClick={() => setMobileNavbar(true)}
                />
                Hello Shahrukh &#128075;,
              </span>
            </div>
            <div className=" hidden sm:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className=" pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                iconColor={card.iconColor}
                bgColor={card.bgColor}
                title={card.title}
                number={card.number}
                subtitle={card.subtitle}
                isPositive={card.isPositive}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-start bg-white border-2 border-gray-300 shadow-md rounded-md px-6 py-6">
              <div className=" w-11/12 flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-xl ">Overview</h1>
                  <p className=" text-xs text-gray-600">Monthly Earnings</p>
                </div>
                <div>
                  <select
                    className=" rounded text-xs text-gray-600 bg-[#F5F6F8]"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                  >
                    <option value="option1">Monthly</option>
                    <option value="option2">Quarterly</option>
                    <option value="option3">Annually</option>
                  </select>
                </div>
              </div>
              <CustomBarChart />
            </div>
            <div className="flex flex-col items-start bg-white shadow-md border-2 border-gray-300 rounded-md px-6 py-6">
              <div className="w-11/12 mb-6">
                <h1 className="text-xl ">Customers</h1>
                <p className=" text-xs text-gray-600">based on location</p>
              </div>
              <CustomPieChart />
            </div>
          </div>
          <div className="w-full bg-white border-2 border-gray-300 shadow-md rounded-md px-6 py-6">
            <div className=" flex items-center justify-between w-100">
              <div className="left">
                <h1 className="text-xl ">Product Sell</h1>
              </div>
              <div className="right">
                <div className="flex flex-col md:flex-row md:gap-4 items-center justify-between">
                  <div className="scale-75 md:scale-100 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className=" pl-10 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <select
                      className="scale-75 md:scale-100 rounded text-xs text-gray-600 bg-[#F5F6F8]"
                      value={selectedOption}
                      onChange={handleDropdownChange}
                    >
                      <option value="option1">30 days</option>
                      <option value="option2">60 days</option>
                      <option value="option3">90 days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-4">
              <div className="left">
                <p className="text-xs text-gray-600">Product Name</p>
              </div>
              <div className="right w-2/5">
                <div className="flex items-center justify-around gap-5">
                  <p className="text-xs text-gray-600">Stock</p>
                  <p className="text-xs text-gray-600">Price</p>
                  <p className="text-xs text-gray-600">Total Sales</p>
                </div>
              </div>
            </div>
            <hr className="w-full h-[1.5px] bg-gray-600 my-2" />
            <div className="product-tiles">
              <ProductTile
                image="https://img.freepik.com/free-photo/mysterious-glowing-galaxy-creates-deep-blue-backdrop-generated-by-ai_188544-9577.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=sph"
                title="Abstract 3D"
                subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                stock={32}
                price={45.66}
                sales={20}
              />
              <ProductTile
                image="https://img.freepik.com/free-photo/mysterious-glowing-galaxy-creates-deep-blue-backdrop-generated-by-ai_188544-9577.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=sph"
                title="Abstract 3D"
                subtitle="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                stock={32}
                price={45.66}
                sales={20}
              />
            </div>
          </div>
        </div>
      )}
      {mobileNavbar && <MobileNav setMobileNavbar={setMobileNavbar} />}
    </>
  );
};

export default Dashboard;
