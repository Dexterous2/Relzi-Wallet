"use client";
import Button from "@/components/button/Button";
import { CartSheet } from "@/components/cartSheet/cartSheet";
import Field from "@/components/inputFIeld/Field";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchLayout = ({ children, ordersData, setOrdersData }) => {
  const [padding, setPadding] = useState({
    padding_xl: "xl:px-[16rem]",
    padding_lg: "lg:px-[12rem]",
    padding_md: "md:px-[1rem]",
    padding_sm: "sm:px-[4rem]",
    padding_xs: "max-sm:px-[0.5rem]",
  });

  const router = useRouter()

  return (
    <main
      className={`border--2 border-[red] bg-secondary-color w-full h-screen overflow-hidden overflow-y-auto relative`}
    >
      <nav
        className={`border--2 border-[green] bg-white-color h-[5rem] max-sm:h-fit max-sm:gap-5 max-sm:py-2 flex max-sm:flex-col items-center justify-between ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
        style={{ backgroundImage: 'linear-gradient(to top, rgb(245 245 245), rgb(241 241 241), rgb(235 235 235), rgb(245 245 245), rgb(255, 255, 255))' }}
      >
        <Link href={'/'}>
          <img
            src="/image/main/logo.png"
            alt="logo.png"
            className="w-[13rem] min-h-[2.5rem] max-sm:min-h-[1rem]"
          />
        </Link>

        <div className="flex items-center justify-center gap-2">
          <Button
            name={"Sign In"}
            bgcolor={"bg-primary-color"}
            pClass={
              "text-white"
            }
            mainClass={"text-white px-4 py-2 bg-primary-color min-w-[6rem] max-sm:min-w-[2.8rem] rounded-full"}
            onClick={() => router.push('/login')}
          // className={'rounded-full'}
          />
          <Button
            name={"Sign Up"}
            bgcolor={"bg-primary-color"}
            pClass={
              "text-white"
            }
            mainClass={"text-white px-4 py-2 bg-primary-color min-w-[6rem] max-sm:min-w-[2.8rem] rounded-full"}
            onClick={() => router.push('/signup')}
          />

          <CartSheet ordersData={ordersData} setOrdersData={setOrdersData} />
        </div>
      </nav>
      <div
        className={`border--2 border-[purple] bg-secondary-color w-full min-h-full max-h-fit max-lg:h-fit pb--5 relative ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="border--2 border-[red] w-full h-fit">
          {/* search bar */}

          <div className={`border--2 border-[red] w-full box_shadow__primary bg-secondary-color p-2 rounded--xl flex max-lg:flex-col items-center gap-5 my-5 rounded-lg`}>
            <Field
              type="text"
              placeHolder={"Going to?"}
              className={"h-[2.8rem] shadow_field rounded-lg"}
              bgColor={"bg-white"}
              styles={{ border: "2px solid #D1D5DB" }}
            />
            <Field
              type="date"
              placeHolder={"Going to?"}
              className={"h-[2.8rem] shadow_field rounded-lg"}
              bgColor={"bg-white"}
              styles={{ border: "2px solid #D1D5DB" }}
            />
            <p className="text-lg font-bold"> To </p>
            <Field
              type="date"
              placeHolder={"Going to?"}
              className={"h-[2.8rem] shadow_field rounded-lg"}
              bgColor={"bg-white"}
              styles={{ border: "2px solid #D1D5DB" }}
            />
            <select
              name=""
              id=""
              className="w-full h-[2.8rem] border-2 border-[#D1D5DB] rounded-lg outline-none pl-2 shadow_field"
            >
              <option value="travellors"> Travellors </option>
              <option value="adults"> Adults </option>
              <option value="children"> Childrens </option>
            </select>
            <Button
              name={"Search Now"}
              className={`max-sm:px-2 px-0 max-w-[11rem] shadow_3d rounded-[10rem]`}
              bgcolor={"bg-primary-color"}
              pClass={
                "text-white max-xl:text-sm font-semibold min-w-[4rem] h-[1.3rem] max-sm:min-w-[2.8rem] px-0"
              }
            />
          </div>
          <div className="border--2 border-[blue] w-full h-fit grid grid-cols-1 xl:grid-cols-8 2xl:grid-cols-7 gap-2">
            <div className="border--2 border-[orange] min-w-full h-fit xl:col-span-3 2xl:col-span-2 flex flex-col gap-3 mb-5 p-3">
              <div className="border--2 border-[red] w-full h-[18rem] rounded-xl overflow-hidden box_shadow_primary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.3021795898846!2d-97.74148458558714!3d30.266750981770102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50e15d867b1%3A0x656f8e501d6e3e07!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1649178728617!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  className="w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>

              <div className="border--2 border-[green] max-xl:max-w-[15rem]">
                <label htmlFor="" className="text-sm font-semibold">
                  {" "}
                  Sort by{" "}
                </label>
                <select
                  name=""
                  id=""
                  className="w-full h-[3.2rem] border-2 border-[#D1D5DB] rounded-lg outline-none pl-2 mt-1`"
                >
                  <option value="recommended"> Recommended </option>
                  <option value="lowtohigh"> Price: low to high </option>
                  <option value="hightolow"> Price: high to low </option>
                  <option value="reviews+lowestprice">
                    {" "}
                    Reviews + lowest price{" "}
                  </option>
                  <option value="starrating"> Star rating </option>
                </select>
              </div>

              <div className="border-2 border-[#80808059] w-full"></div>

              <div className="border--2 border-[green] max-xl:max-w-[15rem]">
                <label htmlFor="" className="text-sm font-semibold">
                  {" "}
                  Search by property name{" "}
                </label>
                <div
                  className={`border border-gray-300 w-full bg-white rounded-xl px-4 h-14 py-2 flex max-lg:flex-col items-center mt-1`}
                >
                  <div className="flex items-center gap-2">
                    <IoSearchSharp size={32} />
                    <Field
                      type="text"
                      placeHolder={"Search"}
                      className={""}
                      bgColor={"bg-white"}
                    />
                  </div>
                  <Button
                    name={"Search"}
                    className={`max-sm:px-2 px-0 w-2 max-lg:min-w-full`}
                    bgcolor={"bg-primary-color"}
                    pClass={
                      "text-white max-xl:text-sm font-semibold min-w-[2rem] h-[1.3rem] max-sm:min-w-[2rem] px-0"
                    }
                    mainClass={"py-2 px-8 rounded-xl h-full"}
                  />
                </div>
              </div>

              <div className="border-2 border-[#80808059] w-full"></div>

              <div>
                <label htmlFor="" className="text-base font-semibold">
                  {" "}
                  Filter by{" "}
                </label>{" "}
                <br />
                <small className="font-medium text-sm"> Popular filters </small>
                <ul className="mt-2 flex flex-col gap-1">
                  <li>
                    {" "}
                    <input type="checkbox" className="me-2" /> Jumeirah Lake
                    Towers{" "}
                  </li>
                  <li>
                    {" "}
                    <input type="checkbox" className="me-2" /> Pet friendly{" "}
                  </li>
                  <li>
                    {" "}
                    <input type="checkbox" className="me-2" /> Pool{" "}
                  </li>
                  <li>
                    {" "}
                    <input type="checkbox" className="me-2" /> Breakfast
                    included{" "}
                  </li>
                  <li>
                    {" "}
                    <input type="checkbox" className="me-2" /> Hotel resort{" "}
                  </li>
                </ul>
              </div>
            </div>

            {/* card area */}
            {children}
          </div>
        </div>
      </div>
      <footer
        className={`border--2 border-[red] bg-white-color w-full h-fit p-5 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="border--2 border-[green] w-full flex max-lg:flex-col justify-between items-center max-sm:flex-col max-sm:items-center pt-4">
          <div className="w-[50%] max-lg:w-full flex flex-col max-lg:justify-center max-lg:items-center">
            <img
              src="/image/main/logo.png"
              alt="logo.png"
              className="border--2 border-[green] w-[13rem] min-h-[3rem] object-cover"
            />
            <p className="text-[#000] text-base pt-5">
              Relzi, the all-in-one mobile wallet app that redefines the way you
              manage your money, plan your trips, and make payments. With Relzi,
              your smartphone becomes your passport to a world of convenience
              and possibilities.
            </p>
            <div className="flex max-lg:justify-center justify-between items-center flex-wrap pt-5 gap-5">
              <h5 className="min-w-fit text-primary-color font-bold text-base pt-3 max-lg:text-center">
                {" "}
                Email: support@relziapp.com{" "}
              </h5>
              <h5 className="min-w-fit text-primary-color font-bold text-base pt-3 max-lg:text-center">
                {" "}
                Phone: +1 800 555-Relzi{" "}
              </h5>
            </div>
          </div>

          <div className="border--2 border-[blue] h-full w-[50%] max-lg:w-full flex max-lg:flex-col max-lg:justify-between justify-around">
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
              <img
                src="/image/main/appstore.png"
                alt="appstore.png"
                className="w-[10rem]"
              />
              <img
                src="/image/main/google-play.png"
                alt="google.png"
                className="w-[10rem]"
              />
            </div>

            <ul className="text-primary-color font-bold flex max-lg:items-center max-lg:mt-5 items-end justify-center flex-col gap-5">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border--2 border-[olive] w-full h-fit flex max-sm:flex-col justify-between items-center pt-14 gap-4">
          <h5 className="text-primary-color font-semibold text-base max-sm:text-center">
            {" "}
            Privacy Policy | Terms of Service | Security{" "}
          </h5>
          <h5 className="text-primary-color font-semibold text-base max-sm:text-center">
            {" "}
            © 2023 Relzi. All rights reserved.{" "}
          </h5>
        </div>
      </footer>
    </main>
  );
};

export default SearchLayout;
