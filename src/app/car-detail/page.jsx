'use client'

import CarSinglePage from '@/components/CarSinglePage/CarSinglePage'
import Button from '@/components/button/Button'
import { AlertDialogPri } from '@/components/dialogbox/dialogBox';
import UserLayout from '@/layout/UserLayout'
import { addData } from '@/redux/feature/order';
import React, { useEffect, useState } from 'react'
import { IoIosCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const selector = useSelector((state) => state?.orders);
    const [ordersData, setOrdersData] = useState([])

    const dispatch = useDispatch()

    const testObject = {
        id: 1,
        title: "Economy",
        type: '(car)',
        qty: 1,
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        price: 34000,
    };

    useEffect(() => {
        dispatch(addData(ordersData));
    }, [ordersData]);

    useEffect(() => {
        if (selector.data && selector.data.length > 0) {
            setOrdersData(selector?.data)
        }
    }, [selector?.data]);

    const handleSaveData = () => {
        setOrdersData((prev) => [...prev, testObject])
    };

    return (
        <UserLayout ordersData={ordersData} setOrdersData={setOrdersData}>
            <div className="flex xl:flex-row flex-col justify-between lg:gap-8 gap-0 lg:py-[2rem] py-[1rem] w-full">
                <div className="flex flex-col gap-8 w-full">
                    <CarSinglePage />
                </div>
                <div className='flex xl:flex-col sm:flex-row flex-col xl:justify-start justify-between items-center gap-3'>
                    <div className="bg-white-color py-4 p-5 h-fit rounded-xl mt-4 sm:w-[25rem] w-full box_shadow_primary">
                        <div className='flex flex-col gap-1 '>
                            <span className='flex items-end gap-1'>
                                <h2>$42</h2>
                                <p>per day</p>
                            </span>
                            <p className='text-text-primary-color font-semibold'>Free cancellation</p>
                            <p>Pay at pick-up</p>
                            <p>Reserve without a credit card</p>
                        </div>
                        <div className='py-4'>
                            <hr />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h5 className='font-semibold'>Additional benefits with this car rental</h5>
                            <p className='flex items-center gap-1'><IoIosCheckmark size={24} />Online check-in</p>
                            <p className='flex items-center gap-1'><IoIosCheckmark size={24} />Free upgrade included</p>
                        </div>
                    </div>
                    <div className="bg-white-color py-4 p-5 h-fit rounded-xl mt-4 sm:w-[25rem] w-full box_shadow_primary ">
                        <div className='flex flex-col gap-4 '>
                            <span className='flex flex-col items-start gap-1 font-semibold'>
                                <h2>Price details</h2>
                                <p className='text-text-primary-color'>Pay at pick-up</p>
                            </span>
                            <span className='flex justify-between items-start'>
                                <span className='flex flex-col'>
                                    <p>Car rental fee x 1 day</p>
                                    <p>$41.26 per day</p>
                                </span>
                                <p>$41.26
                                </p>
                            </span>
                            <span className='flex justify-between items-start'>
                                <p>Taxes and fees</p>
                                <p>$17.78</p>
                            </span>
                        </div>
                        <div className='py-4'>
                            <hr />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='flex justify-between items-start'>
                                <h4 className='font-semibold'>Total</h4>
                                <h4 className='font-semibold'>$17.78</h4>
                            </span>
                            <span className='flex justify-between items-start'>
                                <p>Pay at pick-up</p>
                                <p>$59.04</p>
                            </span>
                            <span className='flex justify-between items-start'>
                                <p>Pay now</p>
                                <p>$78.45</p>
                            </span>
                            <div className='pt-4'>
                                {/* <Button name={"Pay now"} bgcolor={"bg-text-primary-color"} pClass={"text-white"} /> */}

                                <AlertDialogPri btn_name={'Add to cart'} title={'Are you sure?'} desc={'You will be redirected to the cart page'} addToCart={handleSaveData} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}

export default page
