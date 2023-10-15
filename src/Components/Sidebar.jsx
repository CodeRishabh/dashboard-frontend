import React from "react";
import { BsNut, BsCashCoin } from "react-icons/bs";
import { BiUser, BiChevronRight, BiChevronDown } from "react-icons/bi";
import { LuBadgePercent } from "react-icons/lu";
import { TbSquareKey, TbCube, TbHelpSquareRounded } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    { icon: TbSquareKey, text: "Dashboard", link: "/" },
    { icon: TbCube, text: "Products", link: "/product" },
    { icon: BiUser, text: "Customers", link: "/customers" },
    { icon: BsCashCoin, text: "Income", link: "/income" },
    { icon: LuBadgePercent, text: "Promote", link: "/promote" },
    { icon: TbHelpSquareRounded, text: "Help", link: "/help" },
  ];
  const currentActiveLink = useLocation();

  return (
    <div className="hidden md:flex w-1/5 h-screen fixed bg-[#040440] flex-col items-center justify-between pt-4 Pb-4 text-white">
      <div className="w-10/12">
        <div className="text-3xl text-bold flex items-center gap-3 pb-6">
          <BsNut className=" text-4xl" />
          <span>Dashboard</span>
        </div>
        <div className="nav-links">
          <ul>
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`block text-decoration-none opacity-90 pr-2 ${
                  currentActiveLink.pathname === item.link
                    ? "bg-white/[.2] text-white rounded"
                    : " opacity-50"
                }`}
              >
                <li className={`my-2 flex items-center justify-between`}>
                  <div className="p-2 flex items-center gap-2">
                    <item.icon className=" text-[28px]" />
                    {item.text}
                  </div>
                  <BiChevronRight />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className=" h-16 mb-5 rounded-md w-11/12 bottom-14 bg-white/[.2] flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/57.jpg"
            alt=""
            className=" rounded-full h-12 w-12 border-black ml-3"
          />
          <div className=" flex flex-col text-left">
            <span>Harry Potter</span>
            <span className=" text-xs opacity-50">Project Manager</span>
          </div>
        </div>
        <BiChevronDown className="mr-3" />
      </div>
    </div>
  );
};

export default Sidebar;
