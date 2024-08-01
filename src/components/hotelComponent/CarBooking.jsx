import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaTachometerAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Button from "../button/Button";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CarBooking = () => {
  const router = useRouter();

  const pathName = usePathname();
  const pathNameStart = pathName.startsWith("/plan-a-trip");

  return (
    <div className="border--2 border-[orange] w-full xl:col-span-5 2xl:col-span-5 flex flex-col items-end">
      {pathNameStart === true ? (
        <Button
          name={"Skip"}
          className={"max-w-[8rem] mr-5 mb-2"}
          onClick={() => router.push("")}
        />
      ) : (
        ""
      )}

      <div className="w-full xl:col-span-5 2xl:col-span-5 flex flex-col gap-3 mb-5 overflow-auto p-4 h-[80vh]">
        {Array.from({ length: 20 })?.map((_item, i) => (
          <div
            className="w-full box_shadow_primary flex justify-between items-start py-4 px-4 rounded-xl bg-white sm:flex-row flex-col sm:gap-0 gap-11"
            key={i}
          >
            <div className="flex items-center 2xl:flex-row flex-col">
              <div className="w-[13rem]">
                <img
                  src={"/image/Dummy/bookCar.avif"}
                  className="h-full  w-[10rem]"
                />
              </div>
              <div className="flex flex-col gap-8 text-black">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-text-primary-color">Economy</h3>
                  <p>Nissan Micra, Kia Picanto, automatic or similar</p>
                  <span className="flex items-center gap-2 flex-wrap">
                    <p className="flex items-center gap-1">
                      <IoIosPerson /> 5 Seats
                    </p>
                    <p className="flex items-center gap-1">
                      <IoMdSettings />
                      Automatic
                    </p>
                    <p className="flex items-center gap-1">
                      <FaTachometerAlt />
                      Unlimited mileage
                    </p>
                  </span>
                </div>
                <div>
                  <span className="flex flex-col items-start w-fit gap-1">
                    <p className="flex items-center gap-1">
                      <ImLocation />
                      Pick-Up
                    </p>
                    <p>Dubai Airport</p>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="py-1 px-2 bg-primary-color rounded-md text-white w-fit">
                    9.2
                  </p>
                  <span>
                    <p className="font-semibold">Wounderful</p>
                    <p>730 reviews</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="h-full  items-end flex flex-col justify-end gap-3 sm:w-fit w-full">
              <span className="flex flex-col items-end">
                <p className="py-2 px-3 bg-primary-color text-white rounded-lg flex flex-nowrap mb-2">
                  We have 5 left at 40% off at
                </p>
                <p className="font-semibold">$686</p>
                <p>$1,686 total</p>
              </span>
              <Button
                name={"View more"}
                bgcolor={"bg-primary-color"}
                pClass={"text-white"}
                mainClass={
                  "py-3 px-5 rounded-xl w-fit active:scale-[0.97] font-semibold capitalize"
                }
                onClick={() => router.push("/car-detail")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarBooking;
