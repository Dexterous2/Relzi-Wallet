"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import Button from "../button/Button";

const HotelComponent = () => {
  const hotelCardData = [
    {
      id: 1,
      name: "Rixos Premium Dubai JBR",
      image: "/image/main/hotel.jpeg",
      star: <FaStar className="text-[#FBBF24]" />,
      location: "Jumeirah Beach Residence",
      facilities: {
        icon: <MdPool />,
        name: "Pool",
        description: "Winter Specials, Stay 3 Pay Less",
      },
      description:
        "A Michelin Star restaurant and refined luxury in the worlds tallest building. Stay 3 or 4 nights in October for big savings.",
      refund: "Fully refundable",
      reserve: "Reserve now, pay later",
      cash: "Earn $27.44 in OneKeyCash",
      rating: 9.2,
      wonderful: "Wonderful",
      review: "730 reviews",
      discount: "We have 5 left at 40% off at",
      del_price: "$1,144",
      price: "$686",
      total: "$1,692 total",
      tax: "includes taxes & fees",
    },
    {
      id: 2,
      name: "Rixos Premium Dubai JBR",
      image: "/image/main/hotel.jpeg",
      star: <FaStar className="text-[#FBBF24]" />,
      location: "Jumeirah Beach Residence",
      facilities: {
        icon: <MdPool />,
        name: "Pool",
        description: "Winter Specials, Stay 3 Pay Less",
      },
      description:
        "A Michelin Star restaurant and refined luxury in the worlds tallest building. Stay 3 or 4 nights in October for big savings.",
      refund: "Fully refundable",
      reserve: "Reserve now, pay later",
      cash: "Earn $27.44 in OneKeyCash",
      rating: 9.2,
      wonderful: "Wonderful",
      review: "730 reviews",
      discount: "We have 5 left at 40% off at",
      del_price: "$1,144",
      price: "$686",
      total: "$1,692 total",
      tax: "includes taxes & fees",
    },
    {
      id: 3,
      name: "Rixos Premium Dubai JBR",
      image: "/image/main/hotel.jpeg",
      star: <FaStar className="text-[#FBBF24]" />,
      location: "Jumeirah Beach Residence",
      facilities: {
        icon: <MdPool />,
        name: "Pool",
        description: "Winter Specials, Stay 3 Pay Less",
      },
      description:
        "A Michelin Star restaurant and refined luxury in the worlds tallest building. Stay 3 or 4 nights in October for big savings.",
      refund: "Fully refundable",
      reserve: "Reserve now, pay later",
      cash: "Earn $27.44 in OneKeyCash",
      rating: 9.2,
      wonderful: "Wonderful",
      review: "730 reviews",
      discount: "We have 5 left at 40% off at",
      del_price: "$1,144",
      price: "$686",
      total: "$1,692 total",
      tax: "includes taxes & fees",
    },
    {
      id: 4,
      name: "Rixos Premium Dubai JBR",
      image: "/image/main/hotel.jpeg",
      star: <FaStar className="text-[#FBBF24]" />,
      location: "Jumeirah Beach Residence",
      facilities: {
        icon: <MdPool />,
        name: "Pool",
        description: "Winter Specials, Stay 3 Pay Less",
      },
      description:
        "A Michelin Star restaurant and refined luxury in the worlds tallest building. Stay 3 or 4 nights in October for big savings.",
      refund: "Fully refundable",
      reserve: "Reserve now, pay later",
      cash: "Earn $27.44 in OneKeyCash",
      rating: 9.2,
      wonderful: "Wonderful",
      review: "730 reviews",
      discount: "We have 5 left at 40% off at",
      del_price: "$1,144",
      price: "$686",
      total: "$1,692 total",
      tax: "includes taxes & fees",
    },
    {
      id: 5,
      name: "Rixos Premium Dubai JBR",
      image: "/image/main/hotel.jpeg",
      star: <FaStar className="text-[#FBBF24]" />,
      location: "Jumeirah Beach Residence",
      facilities: {
        icon: <MdPool />,
        name: "Pool",
        description: "Winter Specials, Stay 3 Pay Less",
      },
      description:
        "A Michelin Star restaurant and refined luxury in the worlds tallest building. Stay 3 or 4 nights in October for big savings.",
      refund: "Fully refundable",
      reserve: "Reserve now, pay later",
      cash: "Earn $27.44 in OneKeyCash",
      rating: 9.2,
      wonderful: "Wonderful",
      review: "730 reviews",
      discount: "We have 5 left at 40% off at",
      del_price: "$1,144",
      price: "$686",
      total: "$1,692 total",
      tax: "includes taxes & fees",
    },
  ];

  const pathName = usePathname();
  const pathNameStart = pathName.startsWith("/plan-a-trip");

  const router = useRouter();

  return (
    <>
      <div className="border--2 border-[orange] w-full h-fit xl:col-span-5 2xl:col-span-5 flex flex-col items-end">

        {pathNameStart === true ? (
          <Button
            name={"Skip"}
            className={"max-w-[8rem] mr-5 mb-2"}
            onClick={() => router.push("/plan-a-trip?type=flight")}
          />
        ) : (
          ""
        )}

        <div className="w-full xl:col-span-5 2xl:col-span-5 flex flex-col gap-3 mb-5 overflow-auto px-4 py-3 h-[80vh]">
          {hotelCardData?.map((item) => (
            <div
              className="border--2 border-[green] w-full h--full h--[25rem] flex max-2xl:flex-col bg-white rounded-md cursor-pointer"
              key={item.id}
              onClick={() =>
                router.push(
                  `${pathName === "/plan-a-trip"
                    ? `/plan-a-trip/${item?.id}`
                    : `/search/${item?.id}`
                  }`
                )
              }
            >
              <img
                src={`${item.image}`}
                alt="hotel.jpeg"
                className="max-2xl:w-[18rem] max-2xl:h-[20rem] w-[20rem] max-h-full rounded-lg p-1"
              />

              <div className="flex flex-col gap-1 p-5">
                <h4 className="text-xl lg:text-2xl font-bold text-text-primary-color">{item.name}</h4>
                <div className="flex gap-1">
                  {item.star}
                  {item.star}
                  {item.star}
                  {item.star}
                  {item.star}
                </div>
                <small>{item.location}</small>
                <p className="text-sm flex justify-start items-center gap-1 mt-2">
                  {" "}
                  {item.facilities.icon} {item.facilities.name}
                </p>
                <small className="font-semibold">
                  {item.facilities.description}
                </small>{" "}
                <br />
                <small>{item.description}</small>
                <div>
                  <div className="flex flex-col gap-0 mt-2">
                    <small className="text-primary-color font-medium">
                      {item.refund}
                    </small>
                    <small className="text-primary-color font-medium">
                      {item.reserve}
                    </small>
                    <small className="text-primary-color font-medium">
                      {item.cash}
                    </small>

                    <div className="flex justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                      <div className="min-w-fit flex items-end gap-2 mt-2 max-sm:mt-4">
                        <p className="bg-primary-color text-sm text-white px-2 py-2 rounded-lg">
                          {item.rating}
                        </p>
                        <div className="flex flex-col gap-0">
                          <small className="font-semibold">
                            {item.wonderful}
                          </small>
                          <small>{item.review}</small>
                        </div>
                      </div>

                      <div className="min-w-fit flex flex-col justify-normal items-end max-sm:items-start">
                        <p className="bg-primary-color text-white text-xs px-3 py-2 rounded-lg">
                          {item.discount}
                        </p>
                        <div className="my-2">
                          <small className="text-sm ">
                            {" "}
                            <del> {item.del_price} </del>{" "}
                          </small>
                          <small className="text-base font-bold ms-1">
                            {item.price}
                          </small>
                        </div>
                        <small className="text-sm font-medium">
                          {item.total}
                        </small>
                        <small className="text-sm font-medium">
                          {item.tax}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelComponent;
