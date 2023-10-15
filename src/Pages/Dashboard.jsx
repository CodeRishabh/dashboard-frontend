import React from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../Components/Card";
import { AiOutlineDollar } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { LiaWalletSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className=" w-4/5 h-screen bg-[#F5F6F8] px-10 py-10 flex flex-col gap-8">
      <div className=" flex items-center justify-between">
        <div className="greeting">
          <span className=" text-2xl font-medium">
            Hello Shahrukh &#128075;,
          </span>
        </div>
        <div className="relative">
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
      <div className="flex gap-5">
        <Card
          icon={<AiOutlineDollar />}
          iconColor="text-[#07aa53]"
          bgColor="bg-[#b0dbc5]"
          title="Earnings"
          number="$198k"
          subtitle="37.8%"
          isPositive={true}
        />
        <Card
          icon={<CgNotes />}
          iconColor="text-[#A101FF]"
          bgColor="bg-[#E7DBFF]"
          title="Orders"
          number="$2.4k"
          subtitle="2%"
          isPositive={false}
        />
        <Card
          icon={<LiaWalletSolid />}
          iconColor="text-[#0858BF]"
          bgColor="bg-[#CCF2FF]"
          title="Balance"
          number="$2.4k"
          subtitle="2%"
          isPositive={false}
        />
        <Card
          icon={<HiOutlineShoppingBag />}
          iconColor="text-[#D90010]"
          bgColor="bg-[#FFAED7]"
          title="Total Sales"
          number="$89k"
          subtitle="11%"
          isPositive={true}
        />
      </div>
    </div>
  );
};

export default Dashboard;
