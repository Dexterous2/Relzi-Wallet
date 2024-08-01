"use client";
import React, { useState } from "react";
import styles from "./layout.module.scss";
import Button from "@/components/button/Button";
import { MdOutlineWallet } from "react-icons/md";
import { BiSolidLogOut } from "react-icons/bi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosHome } from "react-icons/io";
import { motion } from "framer-motion";

const DashboardLayout = ({ children, icon, pageName }) => {
  const [height_, setHeight_] = useState(`h-[5rem]`);
  const [padding_, setPadding_] = useState(
    "px-[1rem] lg:px-[2rem] xl:px-[3rem]"
  );
  const [show, setShow] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleShow = () => {
    setShow(!show);
  };

  const router = useRouter();

  const pathName = usePathname();

  // const userData = getCookie('cheeky') ? JSON?.parse(getCookie('cheeky')) : getCookie('cheeky')

  // const role = userData?.user?.role?.[0]

  const handleLogout = () => {
    // const cookies = getCookie("relzi-wallet");
    // if (cookies) {
    //   deleteCookie("relzi-wallet");
    //   router.push("/login");
    // }
    router.push("/login");
  };

  const variants_fade_up = {
    hidden: { opacity: 0, y: 200, x: 0 },
    enter: { opacity: 1, y: 0, x: 0 },
}

  return (
    <>

      <main className="border--2 border-red-900 w-full h-screen flex relative overflow-x-hidden">
        {/* Sidebar */}
        {
          <div
            className={`bg-secondary-color shadow_pri ${show === false
              ? "w-[0%]"
              : "max-[321px]:w-[14rem] w-[16.5rem] absolute top-0 left-0"
              } lg:w--[20rem] lg:w-[20%] xl:w-[18%] min-[1450px]:w-[14%] h-full lg:relative overflow-hidden overflow-y-auto transition-all duration-300 z-50`}
          >
            <div
              className={`border--2 border-white w-full max-[321px]:h-[5rem] ${height_} flex justify-center items-center ${show === false ? "opacity-0" : "opacity-100"
                } lg:opacity-100`}
            >
              <Link href={'/'}>
              <img
                src="/image/main/logo.png"
                alt="logo.png"
                className="max-[490px]:w-[50%] w-[80%]"
              />
              </Link>
            </div>
            <div
              className={` w-full border-white max-[321px]:px-1 max-[321px]:py-2 px-3 py-8 ${show === false
                ? "translate-x-[-100vw]"
                : "w-full transition-all duration-500"
                } lg:translate-x-0 flex flex-col gap-2`}
            >
              <Link href={"/dashboard"}>
                <Button
                  name={"Dashboard"}
                  icon={<div> <IoIosHome className="text-xl me-2" /> </div>}
                  className={`${pathName === "/dashboard"
                    ? "bg-primary-color text-white rounded-xl"
                    : "hover:bg-primary-color hover:text-white text-text-primary-color font-semibold rounded-xl"
                    }`}
                  pClass={`${pathName === "/dashboard" ? "text-white" : ""}`}
                  bgcolor={"transparent"}
                />
              </Link>

              <Link href={"/all-users"}>
                <Button
                  name={"Users"}
                  icon={<div> <FaUsers className="text-xl me-2" /> </div>}
                  className={`${pathName === "/all-users"
                    ? "bg-primary-color text-white rounded-xl"
                    : "hover:bg-primary-color hover:text-white text-text-primary-color font-semibold rounded-xl"
                    }`}
                  pClass={`${pathName === "/all-users" ? "text-white" : ""}`}
                  bgcolor={"transparent"}
                />
              </Link>

              <Link href={"/orders"}>
                <Button
                  name={"Orders"}
                  icon={<div> <FaCartShopping className="text-xl me-2" /> </div>}
                  className={`${pathName.startsWith("/orders")
                    ? "bg-primary-color text-white rounded-xl"
                    : "hover:bg-primary-color hover:text-white text-text-primary-color font-semibold rounded-xl"
                    }`}
                  pClass={`${pathName.startsWith("/orders")
                    ? "text-white"
                    : "hover:text-white"
                    }`}
                  bgcolor={"transparent"}
                />
              </Link>

              <Link href={"/wallet"}>
                <Button
                  name={"Wallet"}
                  icon={<div> <MdOutlineWallet className="text-xl me-2" /> </div>}
                  className={`${pathName === "/wallet"
                    ? "bg-primary-color text-white rounded-xl"
                    : "hover:bg-primary-color hover:text-white text-text-primary-color font-semibold rounded-xl"
                    }`}
                  pClass={`${pathName === "/wallet"
                    ? "text-white"
                    : "hover:text-white"
                    }`}
                  bgcolor={"transparent"}
                />
              </Link>

              <Link href={"/profile"}>
                <Button
                  name={"Profile"}
                  icon={<div> <CgProfile className="text-xl me-2" /> </div>}
                  className={`${pathName === "/profile"
                    ? "bg-primary-color text-white rounded-xl"
                    : "hover:bg-primary-color hover:text-white text-text-primary-color font-semibold rounded-xl"
                    }`}
                  pClass={`${pathName === "/orders" ? "hover:text-white" : ""}`}
                  bgcolor={"transparent"}
                />
              </Link>
            </div>
            <div className={`border--2 xl:border-0 border border-t-white border-red-900 w-full px-3 xl:py-3 pt-1 pb-3 absolute bottom-0 ${show === false ? 'translate-x-[-100vw]' : 'w-full transition-all duration-500'} lg:translate-x-0`}>
              <Button name={'Logout'} icon={<BiSolidLogOut className='text-2xl me-2' />} className={`hover:bg-primary-color hover:text-white text-text-primary-color font-semibold rounded-xl`} pClass={` hover:bg-primary-color hover:text-white`} bgcolor={'transparent'} onClick={handleLogout} />
            </div>
          </div>
        }

        <div className=" w-full lg:w-[80%] xl:w-[82%] min-[1450px]:w-[86%] h-full">
          {/* Header */}
          <header
            className={` w-full max-[321px]:h-[5rem] h-[4rem] flex justify-start items-center border-b-2 `}
          >
            <div className="flex h-full items-center justify-between w-full">
              <div className="flex items-center gap-4 h-full  text-white">
                <div className="py-2 px-6 bg-primary-color h-full flex items-center">
                  {icon ? icon :
                    <FaHome size={32} color="white" />
                  }
                </div>
                <p className="text-text-primary-color font-semibold">
                  {pageName ? pageName : "Home"}
                </p>
              </div>
              <div className="flex pr-4">
                <div className="border-[1px] border-[#0797B7] cursor-pointer rounded-xl min-w-[3rem] h-[3rem] ms-4 flex justify-center items-center relative" onClick={() => setIsSidebar(true)}>
                  <IoSettingsOutline className="text-[#0797B7] text-2xl" />
                </div>
                <div
                  onClick={toggleShow}
                  className="border-[1px] border-[#0797B7] cursor-pointer rounded-xl min-w-[3rem] h-[3rem] ms-4 flex justify-center items-center lg:hidden relative transition-all duration-500 z-[100]"
                >
                  <FaBarsStaggered className="text-[#0797B7] text-2xl transition-all duration-500" />
                </div>
              </div>
            </div>
          </header>

          {/* Main Area */}
          <div
            className={`${styles.aside_area_height}  w-full sm:pt-8 pt-4 overflow-hidden overflow-y-auto sm:px-12 px-4 header_box_shodow`}
            style={{ height: `calc(100vh - (5rem)) ` }}
          >
            <motion.div variants={variants_fade_up} initial="hidden" animate="enter" transition={{ type: "spring", stiffness: 100, duration: 2 }} className="pt-8">{children}</motion.div>
          </div>
          {/* Aside Area */}
        </div>
        <aside className={`bg-primary-color px-4 py-3 sm:w-[20rem] w-[16rem] z-[10000] absolute h-full transition-all duration-500 ${isSidebar ? "right-0" : "right-[-100%]"} `}>
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-8 w-full justify-between">
              <span className="flex flex-row-reverse text-white items-center gap-2">
                <FaBell size={32} color="white" />
                <MdCancel size={30} color="white" onClick={() => setIsSidebar(false)} className="cursor-pointer" />
              </span>
              <Image src={"/image/Dummy/profile_img.png"} width={40} height={50} className="rounded-full w-12 h-12 object-cover" alt="no img found" />
            </div>
            <div className="flex flex-col gap-3 text-white items-center">
              <h3>John Doe</h3>
              <span className="flex flex-col gap-1 items-center">
                <p>Customer ID: 253126</p>
                <p className="text-center">Last sign-in: 8 Sep 2023,12:26 PM EST</p>
              </span>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default DashboardLayout;
