"use client";

import UserLayout from "@/layout/UserLayout";
import { FaStar } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { RiCupFill } from "react-icons/ri";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { MdNetworkWifi } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaPersonWalking } from "react-icons/fa6";
import { MdStoreMallDirectory } from "react-icons/md";
import Field from "@/components/inputFIeld/Field";
import Button from "@/components/button/Button";
import { RxRulerSquare } from "react-icons/rx";
import { MdLocalParking } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { MdBed } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";
import { SiSmartthings } from "react-icons/si";
import { MdOutdoorGrill } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import { breakpoints_swiper } from "@/lib/breakpoints";
import { AlertDialogPri } from "@/components/dialogbox/dialogBox";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addData } from "@/redux/feature/order";

const HotelSinglePageComponent = ({ ordersData, setOrdersData }) => {
  const pathName = usePathname();
  const pathNameStart = pathName.startsWith("/plan-a-trip");

  const hotel_room_data = [
    {
      id: 1,
      img: "/image/main/maso_1.jpeg",
      title: "Premium Room, 1 King Bed",
      slug: "8.8/10 Excellent",
      features: [
        {
          icon: <RxRulerSquare className="text-lg me-1" />,
          name: "420 sq ft",
        },
        {
          icon: <MdNetworkWifi className="text-lg me-1" />,
          name: "Free WiFi",
        },
        {
          icon: <MdLocalParking className="text-lg me-1" />,
          name: "Free self parking",
        },
        {
          icon: <GiNightSleep className="text-lg me-1" />,
          name: "Sleeps 3",
        },
        {
          icon: <FaWater className="text-lg me-1" />,
          name: "Partial seaview",
        },
        {
          icon: <MdBed className="text-lg me-1" />,
          name: "1 King Bed",
        },
      ],
      sub_title: "Extras",
      extras: [
        {
          name: "No extras",
          total: "+ $0",
        },
        {
          name: "Breakfast",
          total: "+ $41",
        },
        {
          name: "Half board",
          total: "+ $120",
        },
      ],
      price: "$417",
      discount: "$2,063 total",
      tax: "includes taxes & fees",
    },
    {
      id: 2,
      img: "/image/main/maso_1.jpeg",
      title: "Premium Room, 1 King Bed",
      slug: "8.8/10 Excellent",
      features: [
        {
          icon: <RxRulerSquare className="text-lg me-1" />,
          name: "420 sq ft",
        },
        {
          icon: <MdNetworkWifi className="text-lg me-1" />,
          name: "Free WiFi",
        },
        {
          icon: <MdLocalParking className="text-lg me-1" />,
          name: "Free self parking",
        },
        {
          icon: <GiNightSleep className="text-lg me-1" />,
          name: "Sleeps 3",
        },
        {
          icon: <FaWater className="text-lg me-1" />,
          name: "Partial seaview",
        },
        {
          icon: <MdBed className="text-lg me-1" />,
          name: "1 King Bed",
        },
      ],
      sub_title: "Extras",
      extras: [
        {
          name: "No extras",
          total: "+ $0",
        },
        {
          name: "Breakfast",
          total: "+ $41",
        },
        {
          name: "Half board",
          total: "+ $120",
        },
      ],
      price: "$417",
      discount: "$2,063 total",
      tax: "includes taxes & fees",
    },
    {
      id: 3,
      img: "/image/main/maso_1.jpeg",
      title: "Premium Room, 1 King Bed",
      slug: "8.8/10 Excellent",
      features: [
        {
          icon: <RxRulerSquare className="text-lg me-1" />,
          name: "420 sq ft",
        },
        {
          icon: <MdNetworkWifi className="text-lg me-1" />,
          name: "Free WiFi",
        },
        {
          icon: <MdLocalParking className="text-lg me-1" />,
          name: "Free self parking",
        },
        {
          icon: <GiNightSleep className="text-lg me-1" />,
          name: "Sleeps 3",
        },
        {
          icon: <FaWater className="text-lg me-1" />,
          name: "Partial seaview",
        },
        {
          icon: <MdBed className="text-lg me-1" />,
          name: "1 King Bed",
        },
      ],
      sub_title: "Extras",
      extras: [
        {
          name: "No extras",
          total: "+ $0",
        },
        {
          name: "Breakfast",
          total: "+ $41",
        },
        {
          name: "Half board",
          total: "+ $120",
        },
      ],
      price: "$417",
      discount: "$2,063 total",
      tax: "includes taxes & fees",
    },
    {
      id: 4,
      img: "/image/main/maso_1.jpeg",
      title: "Premium Room, 1 King Bed",
      slug: "8.8/10 Excellent",
      features: [
        {
          icon: <RxRulerSquare className="text-lg me-1" />,
          name: "420 sq ft",
        },
        {
          icon: <MdNetworkWifi className="text-lg me-1" />,
          name: "Free WiFi",
        },
        {
          icon: <MdLocalParking className="text-lg me-1" />,
          name: "Free self parking",
        },
        {
          icon: <GiNightSleep className="text-lg me-1" />,
          name: "Sleeps 3",
        },
        {
          icon: <FaWater className="text-lg me-1" />,
          name: "Partial seaview",
        },
        {
          icon: <MdBed className="text-lg me-1" />,
          name: "1 King Bed",
        },
      ],
      sub_title: "Extras",
      extras: [
        {
          name: "No extras",
          total: "+ $0",
        },
        {
          name: "Breakfast",
          total: "+ $41",
        },
        {
          name: "Half board",
          total: "+ $120",
        },
      ],
      price: "$417",
      discount: "$2,063 total",
      tax: "includes taxes & fees",
    },
  ];

  const router = useRouter();

  // /////////////////////presist
  // ////////////////////////////
  const selector = useSelector((state) => state?.orders);
  const dispatch = useDispatch();

  const testObject = {
    id: 3,
    title: "Rixos Premium",
    type: "(hotel)",
    qty: 3,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 34000,
  };

  useEffect(() => {
    dispatch(addData(ordersData));
  }, [ordersData]);

  useEffect(() => {
    if (selector.data && selector.data.length > 0) {
      setOrdersData(selector?.data);
    }
  }, []);

  const handleSaveData = () => {
    setOrdersData((prev) => [...prev, testObject]);

    // if (pathNameStart) {
    //   router.push("/plan-a-trip?type=flight");
    // }
  };
  // /////////////////////presist
  // ////////////////////////////

  return (
    <>
      <div className="border--2 border-[red] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-10">
        <div className="border--2 border-[blue] h-[25.6rem] col-span-2 rounded-xl overflow-hidden box_shadow_primary">
          <img
            src="/image/main/maso_1.jpeg"
            alt="maso_1.jpeg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3">
          <div className="border--2 border-[olive] grid sm:grid-cols-2 gap-2">
            <div className="border--2 border-[grey] h-[12.5rem] rounded-xl overflow-hidden box_shadow_primary">
              <img
                src="/image/main/maso_2.jpeg"
                alt="maso_2.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border--2 border-[grey] max-sm:hidden h-[12.5rem] rounded-xl overflow-hidden box_shadow_primary">
              <img
                src="/image/main/maso_3.jpeg"
                alt="maso_3.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border--2 border-[grey] max-sm:hidden h-[12.5rem] rounded-xl overflow-hidden box_shadow_primary">
              <img
                src="/image/main/maso_4.jpeg"
                alt="maso_4.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border--2 border-[grey] max-sm:hidden h-[12.5rem] rounded-xl overflow-hidden box_shadow_primary">
              <img
                src="/image/main/maso_5.jpeg"
                alt="maso_5.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-3 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">
                Rixos Premium Dubai JBR
              </h4>
              <div className="flex gap-1">
                <FaStar className="text-[#FBBF24]" />
                <FaStar className="text-[#FBBF24]" />
                <FaStar className="text-[#FBBF24]" />
                <FaStar className="text-[#FBBF24]" />
                <FaStar className="text-[#FBBF24]" />
              </div>
              <small>Hotel with private beach, full-service spa</small>
              <div className="min-w-fit flex items-center gap-1 mt-2 max-sm:mt-4">
                <p className="bg-primary-color text-sm text-white px-2 py-2 rounded-lg">
                  9.2
                </p>
                <div className="flex flex-col gap-0">
                  <small className="text-base font-semibold">
                    {" "}
                    9.0 Wonderful
                  </small>
                </div>
              </div>
              <small className="font-semibold text-sm mt-2">
                Guests liked:
              </small>
              <small className="font--semibold text-sm">
                Friendly staff, property condition
              </small>

              <div>
                <h4 className="font-semibold mt-5">Popular amenities</h4>
                <div className="flex max-sm:flex-col justify-between gap-1 mt-2">
                  <div>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <RiCupFill className="text-lg me-1" /> Breakfast available
                    </p>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <FaUmbrellaBeach className="text-lg me-1" /> On private
                      beach
                    </p>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <TbAirConditioning className="text-lg me-1" /> Air
                      conditioning
                    </p>
                  </div>

                  <div>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <MdPool className="text-lg me-1" /> Pool
                    </p>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <MdNetworkWifi className="text-lg me-1" /> Free WiFi
                    </p>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <CgGym className="text-lg me-1" /> Gym
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-2 rounded--xl overflow-hidden p-5">
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
          <div className="border--2 border-[green] max-xl:max-w-[20rem]">
            <p className="mt-2 text-sm font-medium">
              The Walk, Jumeirah Beach Residence, Dubai, 643660
            </p>
            <div className="flex flex-col">
              <div>
                <h4 className="font-semibold mt-5">Explore the area</h4>
                <div className="flex max-sm:flex-col justify-between gap-1 mt-2">
                  <div className="">
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <FaPersonWalking className="text-lg me-1" /> The Walk
                      (1-min walk)
                    </p>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <FaUmbrellaBeach className="text-lg me-1" /> Marina Beach
                      (3-min walk)
                    </p>
                    <p className="text-sm flex justify-start items-center gap-1 mt-2">
                      <MdStoreMallDirectory className="text-lg me-1" /> Dubai
                      Marina Mall (17-min walk)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[red] h-fit col-span-2 overflow-hidden p--5 mt-5">
        <h4 className="text-xl lg:text-2xl font-bold">Choose your room</h4>

        <div
          className={`border--2 border-[red] w-full bg-secondary-color p-2 rounded--xl flex max-lg:flex-col items-center gap-5 my-5`}
        >
          <Field
            type="date"
            placeHolder={"Going to?"}
            className={"rounded-xl"}
            bgColor={"bg-white"}
            styles={{ border: "2px solid #D1D5DB" }}
          />
          <p className="text-lg font-bold"> To </p>
          <Field
            type="date"
            placeHolder={"Going to?"}
            className={"rounded-xl"}
            bgColor={"bg-white"}
            styles={{ border: "2px solid #D1D5DB" }}
          />
          <select
            name=""
            id=""
            className="w-full h-[3.2rem] border-2 border-[#D1D5DB] rounded-lg outline-none pl-2rounded-xl"
          >
            <option value="travellors"> Travellors </option>
            <option value="adults"> Adults </option>
            <option value="children"> Childrens </option>
          </select>
          <Button
            name={"Search Now"}
            className={`max-sm:px-2 px-0 rounded-[10rem]`}
            bgcolor={"bg-primary-color"}
            pClass={
              "text-white max-xl:text-sm font-semibold min-w-[4rem] h-[1.3rem] max-sm:min-w-[2.8rem] px-0"
            }
          />
        </div>

        <div className="border--2 border-[olive] w-full h-fit py-4">
          <Swiper
            breakpoints={breakpoints_swiper}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper border--2 border-[red] w-full h-full"
          >
            {hotel_room_data?.map((item) => (
              <SwiperSlide
                className="border--2 border-[blue] h-full my-4 bg-white rounded-xl p-1 box_shadow_primary"
                key={item.id}
              >
                <div className=" w-full h-fit rounded-xl  overflow-hidden">
                  <div className="w-full h-[18rem]">
                    <img
                      src={item.img}
                      alt="maso_1.jpeg"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-2">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <small className="text-sm font-medium">{item.slug}</small>
                    <div className="flex flex-col">
                      <div>
                        <div className="flex max-sm:flex-col justify-between gap-1 mt-1">
                          <div className="">
                            <p className="text-sm flex justify-start items-center gap-1 mt-2">
                              {item.features[0].icon} {item.features[0].name}
                              ft
                            </p>
                            <p className="text-sm flex justify-start items-center gap-1 mt-2">
                              {item.features[1].icon} {item.features[1].name}
                            </p>
                            <p className="text-sm flex justify-start items-center gap-1 mt-2">
                              {item.features[2].icon} {item.features[2].name}
                            </p>
                            <p className="text-sm flex justify-start items-center gap-1 mt-2">
                              {item.features[3].icon} {item.features[3].name}
                            </p>
                            <p className="text-sm flex justify-start items-center gap-1 mt-2">
                              {item.features[4].icon} {item.features[4].name}
                            </p>
                            <p className="text-sm flex justify-start items-center gap-1 mt-2">
                              {item.features[5].icon} {item.features[5].name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border-[1px] border-[#80808054] w-full my-3"></div>
                      <small className="text-sm font-bold">
                        {item.sub_title}
                      </small>
                      <div>
                        <div className="flex flex-col justify-between gap-1 mt-1">
                          <div className="w-full flex justify-between items-center gap-1 mt-2">
                            <div className="flex items-center">
                              <input type="radio" className="me-2" />
                              <small className="text-sm">
                                {item.extras[0].name}
                              </small>
                            </div>
                            <p className="text-sm"> {item.extras[0].total} </p>
                          </div>
                          <div className="w-full flex justify-between items-center gap-1 mt-2">
                            <div className="flex items-center">
                              <input type="radio" className="me-2" />
                              <small className="text-sm">
                                {item.extras[1].name}
                              </small>
                            </div>
                            <p className="text-sm"> {item.extras[1].total} </p>
                          </div>
                          <div className="w-full flex justify-between items-center gap-1 mt-2">
                            <div className="flex items-center">
                              <input type="radio" className="me-2" />
                              <small className="text-sm">
                                {item.extras[2].name}
                              </small>
                            </div>
                            <p className="text-sm"> {item.extras[2].total} </p>
                          </div>

                          <div className="w-full flex justify-between items-center gap-1 mt-5">
                            <div className="flex flex-col items--center">
                              <h4 className="font-bold">{item.price}</h4>
                              <small className="text-xs font-medium">
                                {item.discount}
                              </small>
                              <small className="text-xs font-medium">
                                {item.tax}
                              </small>
                            </div>

                            {pathNameStart === true ? (
                              <Button
                                name={"Add to cart"}
                                className={`max-sm:px-2 px-0 max-w-[8rem]`}
                                bgcolor={"bg-primary-color"}
                                pClass={
                                  "text-[#fff] text-sm font-bold max-xl:text-sm font-semibold min-w-[5rem] h-[1.3rem] max-sm:min-w-[2.8rem] px-0"
                                }
                                onClick={() => router.push('/plan-a-trip?type=flight')}
                              />
                            ) : (
                              <AlertDialogPri
                                btn_name={"Add to cart"}
                                title={"Are you sure?"}
                                desc={"You will be redirected to the cart page"}
                                className={
                                  "text-[#fff]"
                                }
                                addToCart={handleSaveData}
                              />
                            )}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">About this area</h4>
              <small className="text-lg font-bold mt-4">Dubai</small>
              <small className="font--semibold text-sm">
                Located on a private beach, Rixos Premium Dubai JBR is in Dubai
                Marina, a neighborhood in Dubai. Dubai Marina Mall and Mall of
                the Emirates are worth checking out if shopping is on the
                agenda, while those wishing to experience the area's natural
                beauty can explore Marina Beach. Traveling with kids? Consider
                Thrill Zone and Wild Wadi Water Park.
              </small>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
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
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <FaLocationDot className="text-lg me-1" /> What's nearby
                </p>
                <p className="text-sm ps-7">
                  In Dubai Marina The Walk - 1 min walk Marina Beach - 3 min
                  walk Dubai Marina Mall - 17 min walk Skydive Dubai - 6 min
                  drive Ibn Battuta Mall - 6 min drive Souk Madinat Jumeirah -
                  11 min drive Wild Wadi Water Park - 11 min drive Burj Al Arab
                  - 12 min drive Madinat Jumeirah - 12 min drive Ski Dubai - 11
                  min drive
                </p>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-xl me-1" />{" "}
                  Restaurants
                </p>
                <p className="text-sm ps-7">
                  Godiva Cafe - 1 min walk Il Caffe di Roma - 2 min walk ستاربكس
                  - 2 min walk Lock, Stock & Barrel – JBR The Walk - 2 min walk
                  Black Tap Craft Burgers & Shakes - JBR - 1 min walk
                </p>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <FaCarAlt className="text-xl me-1" /> Getting around
                </p>
                <p className="text-sm ps-7">
                  Jumeirah Beach Residence 1 Tram Stop - 6 min walk <br />
                  Dubai Intl. Airport (DXB) - 36 min drive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">
                About this property
              </h4>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <h4 className="text-xl lg:text-2xl font-bold">
            Rixos Premium Dubai JBR
          </h4>
          <small>Luxury family-friendly hotel near Marina Beach</small> <br />{" "}
          <br />
          <small>
            Rixos Premium Dubai JBR is located close to Dubai Marina Mall, and
            provides a nightclub, a beach bar, and a poolside bar. With
            amenities like a private beach and sun loungers, this hotel is the
            perfect place to soak up the sun. Treat yourself to a massage or a
            manicure/pedicure at Natureland Spa, the onsite spa. Be sure to
            enjoy a meal at any of the 9 onsite restaurants, which feature
            American cuisine and more. In addition to a terrace and shopping on
            site, guests can connect to free in-room WiFi.
          </small>{" "}
          <br /> <br />
          <small>You'll also enjoy the following perks during your stay:</small>
          <ul className="list-disc ps-5">
            <li>
              {" "}
              <small>
                {" "}
                An outdoor pool and a children's pool, with sun loungers{" "}
              </small>{" "}
            </li>
            <li>
              {" "}
              <small> Free self parking and valet parking </small>{" "}
            </li>
            <li>
              {" "}
              <small>
                {" "}
                Buffet breakfast (surcharge), bike rentals, and a roundtrip
                airport shuttle (surcharge){" "}
              </small>{" "}
            </li>
            <li>
              {" "}
              <small>
                {" "}
                Babysitting (surcharge), tour/ticket assistance, and meeting
                rooms{" "}
              </small>{" "}
            </li>
            <li>
              {" "}
              <small>
                {" "}
                Guest reviews speak highly of the helpful staff Room features{" "}
              </small>{" "}
            </li>
          </ul>{" "}
          <br />
          <small>
            All 414 rooms have comforts such as 24-hour room service and premium
            bedding, in addition to perks like air conditioning and bathrobes.
            Guest reviews speak positively of the clean rooms at the property.
          </small>{" "}
          <br /> <br />
          <small>More amenities include:</small>
          <ul className="list-disc ps-5">
            <li>
              {" "}
              <small>
                {" "}
                Rollaway/extra beds (surcharge) and free cribs/infant beds{" "}
              </small>{" "}
            </li>
            <li>
              {" "}
              <small>
                {" "}
                Bathrooms with designer toiletries and deep soaking tubs{" "}
              </small>{" "}
            </li>
            <li>
              {" "}
              <small>
                {" "}
                48-inch flat-screen TVs with satellite channels{" "}
              </small>{" "}
            </li>
            <li>
              {" "}
              <small> Refrigerators, daily housekeeping, and desks </small>{" "}
            </li>
          </ul>
          <h4 className="text-xl lg:text-2xl font-bold mt-7">Languages</h4>
          <small>
            Arabic, English, Filipino, French, Georgian, German, Hindi, Italian,
            Lithuanian, Malay, Russian, Swahili, Turkish, Ukrainian, Urdu,
            Vietnamese
          </small>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">
                Property amenities
              </h4>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Food and
                  drink
                </p>
                <ul className="ms-7">
                  <li>
                    <small>
                      {" "}
                      Daily buffet breakfast available for a fee: AED 160 for
                      adults and AED 80 for children{" "}
                    </small>
                  </li>
                  <li>
                    <small>9 restaurants</small>
                  </li>
                  <li>
                    <small>A bar/lounge</small>
                  </li>
                  <li>
                    <small>A beach bar</small>
                  </li>
                  <li>
                    <small>A coffee shop/cafe</small>
                  </li>
                  <li>
                    <small>A poolside bar</small>
                  </li>
                  <li>
                    <small>Snack bar/deli</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <FaCarAlt className="text-lg me-1" /> Conveniences
                </p>
                <ul className="ms-7">
                  <li>
                    <small>24-hour front desk</small>
                  </li>
                  <li>
                    <small>ATM</small>
                  </li>
                  <li>
                    <small>ستاربكس - Free newspapers in lobby</small>
                  </li>
                  <li>
                    <small>Hair salon</small>
                  </li>
                  <li>
                    <small>Laundry facilities</small>
                  </li>
                  <li>
                    <small>Luggage storage</small>
                  </li>
                  <li>
                    <small>Safe at front desk</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdNetworkWifi className="text-lg me-1" /> Internet
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Available in all rooms: Free WiFi</small>
                  </li>
                  <li>
                    <small>Available in some public areas: Free WiFi</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdDinnerDining className="text-lg me-1" /> Concierge services
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Daily housekeeping</small>
                  </li>
                  <li>
                    <small>Dry cleaning/laundry service</small>
                  </li>
                  <li>
                    <small>Multilingual staff</small>
                  </li>
                  <li>
                    <small>Tour and ticket assistance</small>
                  </li>
                  <li>
                    <small>Turndown service</small>
                  </li>
                  <li>
                    <small>Wedding services</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdLocalParking className="text-lg me-1" /> Parking and
                  transportation
                </p>
                <ul className="ms-7">
                  <li>
                    <small>
                      24-hour roundtrip airport shuttle on request for a
                      surcharge
                    </small>
                  </li>
                  <li>
                    <small>Free self parking on site</small>
                  </li>
                  <li>
                    <small>Free valet parking on site</small>
                  </li>
                  <li>
                    <small>Wheelchair-accessible parking available</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <BsBagFill className="text-lg me-1" /> Business services
                </p>
                <ul className="ms-7">
                  <li>
                    <small>24-hour business center Meeting rooms</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <SiSmartthings className="text-lg me-1" /> Things to do
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Children's pool</small>
                  </li>
                  <li>
                    <small>Full-service spa</small>
                  </li>
                  <li>
                    <small>Health club</small>
                  </li>
                  <li>
                    <small>Nightclub</small>
                  </li>
                  <li>
                    <small>Outdoor pool</small>
                  </li>
                  <li>
                    <small>Playground</small>
                  </li>
                  <li>
                    <small>Sauna</small>
                  </li>
                  <li>
                    <small>Shopping</small>
                  </li>
                  <li>
                    <small>Steam room</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutdoorGrill className="text-lg me-1" /> Outdoors
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Beach loungers</small>
                  </li>
                  <li>
                    <small>Beach towels</small>
                  </li>
                  <li>
                    <small>Beach umbrellas</small>
                  </li>
                  <li>
                    <small>Garden</small>
                  </li>
                  <li>
                    <small>On a private beach</small>
                  </li>
                  <li>
                    <small>On the waterfront</small>
                  </li>
                  <li>
                    <small>Pool loungers</small>
                  </li>
                  <li>
                    <small>Terrace</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdFamilyRestroom className="text-lg me-1" /> Family friendly
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Babysitting (surcharge)</small>
                  </li>
                  <li>
                    <small>Children's pool</small>
                  </li>
                  <li>
                    <small>Free crib</small>
                  </li>
                  <li>
                    <small>In-room refrigerator</small>
                  </li>
                  <li>
                    <small>Laundry facilities</small>
                  </li>
                  <li>
                    <small>Outdoor pool</small>
                  </li>
                  <li>
                    <small>Playground</small>
                  </li>
                  <li>
                    <small>Rollaway/extra bed (surcharge)</small>
                  </li>
                  <li>
                    <small>Snack bar/deli</small>
                  </li>
                  <li>
                    <small>Soundproofed rooms</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdMiscellaneousServices className="text-lg me-1" />{" "}
                  Full-service spa
                </p>
                <ul className="ms-7">
                  <li>
                    <small>9 treatment rooms</small>
                  </li>
                  <li>
                    <small>Manicures/pedicures</small>
                  </li>
                  <li>
                    <small>Massage</small>
                  </li>
                  <li>
                    <small>Mud bath</small>
                  </li>
                  <li>
                    <small>Sauna</small>
                  </li>
                  <li>
                    <small>Spa open daily</small>
                  </li>
                  <li>
                    <small>Spa tub</small>
                  </li>
                  <li>
                    <small>Turkish bath</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">
                Featured restaurants on the property
              </h4>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Luigia
                  Ristorante
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Open for lunch and dinner</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Ammos
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Greek cuisine</small>
                  </li>
                  <li>
                    <small>Open for lunch and dinner</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> STK
                  Restaurant
                </p>
                <ul className="ms-7">
                  <li>
                    <small>American cuisine</small>
                  </li>
                  <li>
                    <small>Open for dinner</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Turquoise
                  Restaurant
                </p>
                <ul className="ms-7">
                  <li>
                    <small>
                      Local and international cuisine Open for breakfast, lunch,
                      and dinner
                    </small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Azure
                  Beach
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Open for light fare</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">Room amenities</h4>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Bedroom
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Blackout drapes</small>
                  </li>
                  <li>
                    <small>Free crib</small>
                  </li>
                  <li>
                    <small>Premium bedding</small>
                  </li>
                  <li>
                    <small>Rollaway/extra bed (surcharge)</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" />{" "}
                  Flat-screen TV with satellite channels
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Greek cuisine</small>
                  </li>
                  <li>
                    <small>Open for lunch and dinner</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Bathroom
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Bathrobes</small>
                  </li>
                  <li>
                    <small>Bidet</small>
                  </li>
                  <li>
                    <small>Deep soaking bathtub</small>
                  </li>
                  <li>
                    <small>Designer toiletries</small>
                  </li>
                  <li>
                    <small>Hair dryer</small>
                  </li>
                  <li>
                    <small>Private bathroom</small>
                  </li>
                  <li>
                    <small>Separate bathtub and shower</small>
                  </li>
                  <li>
                    <small>Slippers</small>
                  </li>
                  <li>
                    <small>Towels</small>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Food and
                  drink
                </p>
                <ul className="ms-7">
                  <li>
                    <small>24-hour room service</small>
                  </li>
                  <li>
                    <small>Free bottled water</small>
                  </li>
                  <li>
                    <small>Free minibar (limited items)</small>
                  </li>
                  <li>
                    <small>Refrigerator</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">Accessibility</h4>
              <small>
                If you have requests for specific accessibility needs, please
                contact the property using the information on the reservation
                confirmation received after booking.
              </small>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Common
                  areas
                </p>
                <ul className="ms-7">
                  <li>
                    <small>Elevator</small>
                  </li>
                  <li>
                    <small>Wheelchair-accessible parking</small>
                  </li>
                  <li>
                    <small>Premium bedding</small>
                  </li>
                  <li>
                    <small>Wheelchair-accessible path of travel</small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  <MdOutlineRestaurantMenu className="text-lg me-1" /> Rooms
                </p>
                <ul className="ms-7">
                  <li>
                    <small>
                      Accessible bathroom available in select rooms In-room
                      accessibility available in select rooms Roll-in shower
                      available in select rooms
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">Policies</h4>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1 gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Check-in
                </p>
                <ul className="">
                  <li>
                    <small>
                      Check-in start time: 3 PM; Check-in end time: 4 AM
                      Contactless check-in available Minimum check-in age: 18
                    </small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Check-out
                </p>
                <ul className="">
                  <li>
                    <small>Check-out before noon</small>
                  </li>
                  <li>
                    <small>Contactless check-out available</small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Special check-in instructions
                </p>
                <ul className="">
                  <li>
                    <small>
                      This property offers transfers from the airport
                      (surcharges may apply); guests must contact the property
                      with arrival details before travel, using the contact
                      information on the booking confirmation
                    </small>
                  </li>
                  <li>
                    <small>Front desk staff will greet guests on arrival</small>
                  </li>
                  <li>
                    <small>
                      For more details, please contact the property using the
                      information on the booking confirmation
                    </small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Access methods
                </p>
                <ul className="">
                  <li>
                    <small>Staffed front desk</small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Pets
                </p>
                <ul className="">
                  <li>
                    <small>Pets not allowed</small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Children and extra beds
                </p>
                <ul className="">
                  <li>
                    <small>Children are welcome</small>
                  </li>
                  <li>
                    <small>
                      1 child, up to the age of 1, can stay for free if using
                      existing beds when occupying the parent or guardian's room
                      Rollaway/extra beds are available for AED 300.0 per day
                      Free cribs are available on request at the property
                    </small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Property payment types
                </p>
                <ul className="flex max-sm:flex-col max-sm:justify-center justify-start items-center gap-5 flex-wrap">
                  <li>
                    <FaCcMastercard className="text-9xl" />
                  </li>
                  <li>
                    <FaCcDiscover className="text-9xl" />
                  </li>
                  <li>
                    <SiAmericanexpress className="text-8xl" />
                  </li>
                  <li>
                    <FaCcVisa className="text-8xl" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border--2 border-[navy] w-full h-fit grid grid-cols-1 gap-y-2 2xl:grid-cols-5 2xl:gap-3 mt-5 box_shadow_primary bg-white rounded-xl mb-10">
        <div className="border--2 border-[blue] h-fit h--[25.6rem] col-span-2 rounded--xl overflow-hidden">
          <div
            className="border--2 border-[green] w-full h-full h--[25rem] flex max-2xl:flex-col box_shadow_primary rounded--xl cursor-pointer"
            onClick={() => ""}
          >
            <div className="flex flex-col gap--1 p-5">
              <h4 className="text-xl lg:text-2xl font-bold">
                Important information
              </h4>
            </div>
          </div>
        </div>
        <div className="border--2 border-[blue] h-fit col-span-3 rounded--xl overflow-hidden p-5">
          <div className="border--2 border-[green] max-xl:max-w--[20rem]">
            <div className="grid grid-cols-1  gap-1 mt-2">
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Fees
                </p>
                <ul className="">
                  <li>
                    <small>
                      You'll be asked to pay the following charges at the
                      property:
                    </small>
                  </li>
                  <li>
                    <small>
                      A tax is imposed by the city: AED 20.00 per accommodation,
                      per night We have included all charges provided to us by
                      the property.
                    </small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  Optional extras
                </p>
                <ul className="">
                  <li>
                    <small>
                      Fee for buffet breakfast: approximately AED 160 for adults
                      and AED 80 for children
                    </small>
                  </li>
                  <li>
                    <small>
                      Airport shuttle fee: AED 240 per vehicle (one way)
                    </small>
                  </li>
                  <li>
                    <small>Rollaway bed fee: AED 300.0 per day</small>
                  </li>
                  <li>
                    <small>
                      The above list may not be comprehensive. Fees and deposits
                      may not include tax and are subject to change.
                    </small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  You need to know
                </p>
                <ul className="">
                  <li>
                    <small>
                      Extra-person charges may apply and vary depending on
                      property policy
                    </small>
                  </li>
                  <li>
                    <small>
                      Government-issued photo identification and a credit card,
                      debit card, or cash deposit may be required at check-in
                      for incidental chargesl
                    </small>
                  </li>
                  <li>
                    <small>
                      Special requests are subject to availability upon check-in
                      and may incur additional charges; special requests cannot
                      be guaranteed
                    </small>
                  </li>
                  <li>
                    <small>
                      The name on the credit card used at check-in to pay for
                      incidentals must be the primary name on the guestroom
                      reservation
                    </small>
                  </li>
                  <li>
                    <small>
                      This property accepts credit cards, debit cards, and cash
                    </small>
                  </li>
                  <li>
                    <small>Cashless transactions are available</small>
                  </li>
                  <li>
                    <small>
                      Safety features at this property include a carbon monoxide
                      detector, a fire extinguisher, a smoke detector, a
                      security system, a first aid kit, and window guards
                    </small>
                  </li>
                  <li>
                    <small>
                      This property affirms that it follows the cleaning and
                      disinfection practices of ALLSAFE (Accor Hotels)
                    </small>
                  </li>
                  <li>
                    <small>
                      Please note that cultural norms and guest policies may
                      differ by country and by property; the policies listed are
                      provided by the property
                    </small>
                  </li>
                  <li>
                    <small>
                      This property requires identification for all guests at
                      check-in, regardless of age.
                    </small>
                  </li>
                  <li>
                    <small>
                      No unregistered guests are allowed in guestrooms.
                    </small>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg flex justify-start items-center gap-1 mt-2 font-bold">
                  We should mention
                </p>
                <ul className="">
                  <li>
                    <small>
                      Only registered guests are allowed in the guestrooms
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelSinglePageComponent;
