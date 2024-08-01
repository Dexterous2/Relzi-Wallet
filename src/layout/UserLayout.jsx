"use client";

import Button from "@/components/button/Button";
import { CartSheet } from "@/components/cartSheet/cartSheet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserLayout = ({ children, ordersData, setOrdersData }) => {
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
        <div className="border--2 border-[red] w-full h-fit">{children}</div>
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
            <p className="text-[#000] pt-5">
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
                Phone: +1 800 555-relzi{" "}
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

export default UserLayout;
