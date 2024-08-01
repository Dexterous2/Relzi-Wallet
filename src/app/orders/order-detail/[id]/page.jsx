import DashboardLayout from '@/layout/DashboardLayout'
import Image from 'next/image'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { FaPerson } from "react-icons/fa6";
const page = () => {
    return (
        <DashboardLayout icon={<FaCartShopping color='white' size={32} />} pageName="Orders Detail">
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2 text-text-primary-color'>
                    <h1>Orders Detail</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-7 2xl:gap-8 gap-4 mb-8'>
                    <div className='pt-4 px-8 box_shadow_primary flex flex-col gap-8  rounded-2xl  pb-16 col-span-4 w-full'>
                        <h2 className='text-text-primary-color'>Order’s Summary</h2>
                        <div className='flex flex-col gap-8'>
                            {/* <div className='flex flex-col gap-4 py-4 border-b-2'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-2 '>
                                        <Image src={"/image/Dummy/Card/user_1.png"} width={100} height={100} className='rounded-xl ' />
                                        <span className='flex flex-col gap-2 text-gray-500'>
                                            <p className='font-semibold'>Suite Reservation</p>
                                            <p>Lorem Ipsum Dolor Sit amet.</p>
                                        </span>
                                    </div>
                                    <p className='font-semibold'>499.00$</p>
                                </div>
                                <div className='text-text-primary-color flex items-center gap-4'>
                                    <div className='flex items-center gap-2'>

                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                    </div>
                                    <span className='flex items-center gap-1'> <FaPerson /> 24 Dec 2024 - 28 Dec 2024</span>
                                </div>
                            </div> */}
                            <div className='flex flex-col gap-4 py-4 border-b-2'>
                                <div className='flex sm:items-center items-start sm:flex-row flex-col sm:gap-0 gap-4 justify-between w-full'>
                                    <div className='flex items-center gap-2 '>
                                        <Image src={"/image/Dummy/Card/user_1.png"} width={100} height={100} className='rounded-xl sm:w-[6rem] sm:h-[6rem] w-[5rem] h-[5rem]' />
                                        <span className='flex flex-col gap-2 text-gray-500'>
                                            <p className='font-semibold'>Suite Reservation</p>
                                            <p>Lorem Ipsum Dolor Sit amet.</p>
                                        </span>
                                    </div>
                                    <p className='font-semibold'>499.00$</p>
                                </div>
                                <div className='text-text-primary-color flex sm:items-center items-start sm:gap-4 gap-2 sm:flex-row flex-col'>
                                    <div className='flex items-center gap-2'>

                                        <span className='flex items--center gap-1'>
                                            <FaPerson />
                                            2</span>
                                        <span className='flex items--center gap-1'>
                                            <FaPerson />
                                            2</span>
                                    </div>
                                    <span className='flex items--center gap-1'> <FaPerson /> 24 Dec 2024 - 28 Dec 2024</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 py-4 border-b-2'>
                                <div className='flex sm:items-center items-start sm:flex-row flex-col sm:gap-0 gap-4 justify-between w-full'>
                                    <div className='flex items-center gap-2 '>
                                        <Image src={"/image/Dummy/Card/user_1.png"} width={100} height={100} className='rounded-xl sm:w-[6rem] sm:h-[6rem] w-[5rem] h-[5rem]' />
                                        <span className='flex flex-col gap-2 text-gray-500'>
                                            <p className='font-semibold'>Suite Reservation</p>
                                            <p>Lorem Ipsum Dolor Sit amet.</p>
                                        </span>
                                    </div>
                                    <p className='font-semibold'>499.00$</p>
                                </div>
                                <div className='text-text-primary-color flex sm:items-center items-start sm:gap-4 gap-2 sm:flex-row flex-col'>
                                    <div className='flex items-center gap-2'>

                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                    </div>
                                    <span className='flex items-center gap-1'> <FaPerson /> 24 Dec 2024 - 28 Dec 2024</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 py-4 border-b-2'>
                                <div className='flex sm:items-center items-start sm:flex-row flex-col sm:gap-0 gap-4 justify-between w-full'>
                                    <div className='flex items-center gap-2 '>
                                        <Image src={"/image/Dummy/Card/user_1.png"} width={100} height={100} className='rounded-xl sm:w-[6rem] sm:h-[6rem] w-[5rem] h-[5rem]' />
                                        <span className='flex flex-col gap-2 text-gray-500'>
                                            <p className='font-semibold'>Suite Reservation</p>
                                            <p>Lorem Ipsum Dolor Sit amet.</p>
                                        </span>
                                    </div>
                                    <p className='font-semibold'>499.00$</p>
                                </div>
                                <div className='text-text-primary-color flex sm:items-center items-start sm:gap-4 gap-2 sm:flex-row flex-col'>
                                    <div className='flex items-center gap-2'>

                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                    </div>
                                    <span className='flex items-center gap-1'> <FaPerson /> 24 Dec 2024 - 28 Dec 2024</span>
                                </div>
                            </div>
                            {/* <div className='flex flex-col gap-4 py-4 border-b-2'>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-2 '>
                                        <Image src={"/image/Dummy/Card/user_1.png"} width={100} height={100} className='rounded-xl ' />
                                        <span className='flex flex-col gap-2 text-gray-500'>
                                            <p className='font-semibold'>Suite Reservation</p>
                                            <p>Lorem Ipsum Dolor Sit amet.</p>
                                        </span>
                                    </div>
                                    <p className='font-semibold'>499.00$</p>
                                </div>
                                <div className='text-text-primary-color flex items-center gap-4'>
                                    <div className='flex items-center gap-2'>

                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                        <span className='flex items-center gap-1'>
                                            <FaPerson />
                                            2</span>
                                    </div>
                                    <span className='flex items-center gap-1'> <FaPerson /> 24 Dec 2024 - 28 Dec 2024</span>
                                </div>
                            </div> */}
                            <div className='flex flex-col gap-2 w-full border-b-2 pb-4'>
                                <span className='flex items-center justify-between text-text-primary-color'>
                                    <p>Subtotal</p>
                                    <p>1200$</p>
                                </span>
                                <span className='flex items-center justify-between text-text-primary-color'>
                                    <p>Fee</p>
                                    <p>+ 7%</p>
                                </span>
                            </div>
                            <div className='flex flex-col gap-2 w-full '>
                                <span className='flex items-center justify-between text-text-primary-color'>
                                    <h3 className='font-semibold'>Total</h3>
                                    <p>1200$</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='box_shadow_primary py-4 px-8 w-full col-span-3 rounded-2xl h-fit flex flex-col items-start gap-4'>
                        <h3 className='text-text-primary-color '>Order’s Specifics</h3>
                        <div className='flex flex-col gap-1'>
                            <span className='flex gap-1'>
                                <p className='text-gray-400'>Order ID:</p>
                                <p className='text-gray-500 font-semibold'>56485</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-gray-400'>Client’s Name:</p>
                                <p className='text-gray-500 font-semibold'>Joseph Campbell</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-gray-400'>Contact Number:</p>
                                <p className='text-gray-500 font-semibold'>+1 4564 65165</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-gray-400'>Booking Date:</p>
                                <p className='text-gray-500 font-semibold'>24 Dec 2024</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-gray-400'>Client’s Email:</p>
                                <p className='text-gray-500 font-semibold'>example@example.com</p>
                            </span>
                            <span className='flex gap-1'>
                                <p className='text-gray-400'>Order’s Status:</p>
                                <p className='text-gray-500 font-semibold'>Active</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default page
