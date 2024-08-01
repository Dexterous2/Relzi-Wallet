import React from 'react'
import UserLayout from "@/layout/SearchLayout";
import { FaSnowflake, FaUser } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { FaCarAlt } from "react-icons/fa";
import { TbSettingsCheck } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import Button from "@/components/button/Button";

function RentACar() {
    return (
        <div className="bg-white-color py-4 w-full p-5 rounded-md">

            <div className="flex flex-col gap-2">
                <h2>
                    Midsize SUV
                </h2>
                <p>
                    Nissan X-Trail or similar
                </p>
            </div>

            <div className="flex md:flex-row flex-col-reverse justify-between items-center sm:gap-3 gap-8 lg:py-0 py-4">
                <div className="flex gap-4 ">
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-4 ">
                            <FaUser className="text-lg" />  5 Passengers
                        </li>
                        <li className="flex gap-4">
                            <FaSnowflake className="text-lg" />  Test 1
                        </li>
                        <li className="flex gap-4">
                            <SlSpeedometer className="text-lg" />  Test 1
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-4">
                            <FaCarAlt className="text-lg" />  5 Doors
                        </li>
                        <li className="flex gap-4">
                            <TbSettingsCheck className="text-lg" />  Automatic
                        </li>
                        <li className="flex gap-4">
                            <BsFillFuelPumpFill className="text-lg" />  Fuel: full to full
                        </li>
                    </ul>
                </div>

                <div>
                    <Image src="/image/main/ship.png" className='rounded-xl' width={250} height={250} />
                </div>
            </div>

            <div className="pt-[2rem] pb-[1rem]">
                <hr />
            </div>

            <div>
                <h3 className="pb-3">
                    Traveler ratings
                </h3>
                <div className="flex md:gap-0 gap-2 md:flex-row flex-col justify-between md:items-end">
                    <div>
                        <p>
                            66% positive ratings
                        </p>
                        <p>Vehicle condition and price as expected</p>
                    </div>
                    <div>
                        <p className="text-primary-color">111 ratings</p>
                    </div>
                </div>
            </div>


            <div className="py-5">
                <h3 className="pb-3">
                    Car rental location
                </h3>
                <h4 className="pb-3 font-bold">
                    Pick-up & Drop-off
                </h4>
                <div className="flex md:gap-0 gap-2 md:flex-row flex-col justify-between md:items-end">

                    <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
                        <ul className="flex flex-col justify-center gap-3">
                            <li className="flex gap-4 items-start">
                                <div>
                                    <LuCalendarDays className="text-lg w--[3rem]" />
                                </div>
                                <p>
                                    Thu, Dec 7, 10:30am - Fri, Dec 8, 10:30am
                                </p>

                            </li>
                            <li className="flex gap-4 items-start">
                                <div>
                                    <LuCalendarDays className="text-lg mt-1 w--[3rem]" />
                                </div>
                                <p>
                                    DXB Airport
                                    Dubai International Airport Arrivals Terminal 1, Dubai, ARE XX
                                </p>

                            </li>

                        </ul>

                        <ul className="flex flex-col justify-start gap-3">
                            <li className="flex gap-4 items-start ">
                                <div>
                                    <FaRegClock className="text-lg mt-1 w--[3rem]" />
                                </div>
                                <p>
                                    Hours of operation

                                    Thu 12:01am - 11:59pm

                                    Fri 12:01am - 11:59pm
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div>
                                    <FaCarAlt className="text-lg mt-1 w--[3rem]" />
                                </div>
                                <p>
                                    Counter and car in terminal
                                    Rental car counter and car in the airport
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className="pb-3">
                <h3 className="py-3">
                    $ 75 per day
                </h3>
                <h4 className="text-primary-color font-bold ">
                    Free cancellation
                </h4>
                <p>Pay at pick-up</p>
                <p>Reserve without a credit card</p>
            </div>

            <div className="pt-3">
                <h3 className="">
                    Price details
                </h3>
                <h4 className="text-primary-color font-bold ">
                    Pay at pick-up
                </h4>

                <div className="py-3 flex justify-between">
                    <span>
                        <p>
                            Car rental fee x 1 day <br />
                            $74.60 per day
                        </p>
                    </span>

                    <h4>
                        $ 75.60
                    </h4>
                </div>
                <div className="py-3 flex justify-between">
                    <p>
                        Taxes and fees
                    </p>

                    <p>
                        Included
                    </p>
                </div>
            </div>

            <div className="pt-[2rem] pb-[1rem]">
                <hr />
            </div>

            <div className="flex justify-between">
                <h4 className='text-xl font-bold'>
                    Total
                </h4>

                <h4 className='text-xl font-bold'>
                    $74.60
                </h4>
            </div>

        </div>
    )
}

export default RentACar
