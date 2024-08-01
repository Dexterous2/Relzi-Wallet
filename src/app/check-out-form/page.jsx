"use client";
import { FaSnowflake, FaUser } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { FaCarAlt } from "react-icons/fa";
import { TbSettingsCheck } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import Button from "@/components/button/Button";
import RentACar from "@/components/Checkout/RentACar";
import Airline from "@/components/Checkout/Airline";
import Hotel from "@/components/Checkout/Hotel";
import Activity from "@/components/Checkout/Activity";
import UserLayout from "@/layout/UserLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/redux/feature/order";
import Field from "@/components/inputFIeld/Field";

const Page = () => {
  const [carPrice, setCarPrice] = useState();
  const [flightPrice, setFlightPrice] = useState();
  const [hotelPrice, setHotelPrice] = useState();

  const [ordersData, setOrdersData] = useState([]);

  const [totalPrice, setTotalPrice] = useState();
  const selector = useSelector((order) => order.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData(ordersData));
  }, [ordersData]);

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data);
    }
  }, []);

  useEffect(() => {
    const totalPrice = ordersData.reduce((acc, curr) => acc + curr.price, 0);
    // setTotalAmount(Math.floor(totalPrice));
    setTotalPrice(totalPrice);

    const filterDataCar = ordersData.filter((type) => type.type === "(car)");
    filterDataCar?.map((item) => setCarPrice(item?.price));

    const filterDataFlight = ordersData.filter(
      (type) => type.type === "(flight)"
    );
    filterDataFlight?.map((item) => setFlightPrice(item?.price));

    const filterDataHotel = ordersData.filter(
      (type) => type.type === "(hotel)"
    );
    filterDataHotel?.map((item) => setHotelPrice(item?.price));
  }, [ordersData]);

  return (
    <UserLayout>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-8 gap-4 lg:py-[2rem] py-[1rem] ">
        <div className="border--2 border-[green] bg-white w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-lg">
          <Field
            type="text"
            placeHolder={"First Name"}
            className={"bg-transparent h-[2.7rem] rounded-xl"}
            styles={{ border: "1px solid silver" }}
          />
          <Field
            type="text"
            placeHolder={"Last Name"}
            className={"bg-transparent h-[2.7rem] rounded-xl"}
            styles={{ border: "1px solid silver" }}
          />
          <Field
            type="text"
            placeHolder={"Email Address"}
            className={"bg-transparent h-[2.7rem] rounded-xl"}
            styles={{ border: "1px solid silver" }}
          />
          <Field
            type="text"
            placeHolder={"Phone Number"}
            className={"bg-transparent h-[2.7rem] rounded-xl"}
            styles={{ border: "1px solid silver" }}
          />

          <div className=" sm:col-span-2">
            <Field
              type="text"
              placeHolder={"street Address"}
              className={"bg-transparent h-[2.7rem] rounded-xl"}
              styles={{ border: "1px solid silver" }}
            />
          </div>

          <div className=" sm:col-span-2">
            <Field
              type="text"
              placeHolder={"Apt,Syuite,Building (Optional)"}
              className={"bg-transparent h-[2.7rem] rounded-xl"}
              styles={{ border: "1px solid silver" }}
            />
          </div>

          <div className="w-full sm:col-span-2">
            <div className="grid xl:grid-cols-3 gap-5">
              <Field
                type="text"
                placeHolder={"Zip Code"}
                className={"bg-transparent h-[2.7rem] rounded-xl"}
                styles={{ border: "1px solid silver" }}
              />
              <select
                name=""
                id=""
                className="w-full p-2 h-[2.7rem] rounded-xl"
                style={{ border: "1px solid silver", borderRadius: "10px", }}
              >
                <option value=""> City </option>
                <option value=""> City 1 </option>
                <option value=""> City 2 </option>
                <option value=""> City 3 </option>
              </select>
              <select
                name=""
                id=""
                className="w-full p-2 h-[2.7rem]"
                style={{ border: "1px solid silver", borderRadius: "10px" }}
              >
                <option value=""> State </option>
                <option value=""> State 1 </option>
                <option value=""> State 2 </option>
                <option value=""> State 3 </option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <Field
              type="text"
              placeHolder={"Card name"}
              className={"bg-transparent h-[2.7rem] rounded-xl"}
              styles={{ border: "1px solid silver" }}
            />
          </div>

          <div className="sm:col-span-2">
            <Field
              type="text"
              placeHolder={"Card number"}
              className={"bg-transparent h-[2.7rem] rounded-xl"}
              styles={{ border: "1px solid silver" }}
            />
          </div>

          <Field
            type="text"
            placeHolder={"Expiration date"}
            className={"bg-transparent h-[2.7rem] rounded-xl"}
            styles={{ border: "1px solid silver" }}
          />

          <Field
            type="text"
            placeHolder={"CVV Code"}
            className={"bg-transparent h-[2.7rem] rounded-xl"}
            styles={{ border: "1px solid silver" }}
          />

          <div className="sm:col-span-2">
            <Button
              name={"Pay Now"}
              pClass={"text-white"}
              bgcolor={"bg-primary-color"}
              className={'h-[2.7rem] rounded-[10rem]'}
            />
          </div>
        </div>

        <div className="bg-white-color py-4 p-5 h-fit rounded-md lg:w-1/2 w-full">
          <div className="flex justify-between">
            <h3>Items</h3>
            <h3>Total</h3>
          </div>

          {carPrice !== undefined && (
            <>
              <div className="py-[1rem]">
                <hr />
              </div>
              <div className="flex justify-between">
                <h4>Car Booking</h4>
                <h4>${carPrice}</h4>
              </div>
            </>
          )}

          {flightPrice !== undefined && (
            <>
              <div className="py-[1rem]">
                <hr />
              </div>

              <div className="flex justify-between">
                <h4>Flight Booking</h4>
                <h4>${flightPrice}</h4>
              </div>
            </>
          )}

          {hotelPrice !== undefined && (
            <>
              <div className="py-[1rem]">
                <hr />
              </div>

              <div className="flex justify-between">
                <h4>Hotel Booking</h4>
                <h4>${hotelPrice}</h4>
              </div>
            </>
          )}

          <div className="py-[1rem]">
            <hr />
          </div>

          <div className="flex justify-between">
            <h4>Activity Booking</h4>
            <h4>$49.00</h4>
          </div>

          <div className="py-[1rem]">
            <hr />
          </div>

          <h3 className="text-end pt-2 pb-4">${totalPrice}</h3>
        </div>
      </div>
    </UserLayout>
  );
};

export default Page;
