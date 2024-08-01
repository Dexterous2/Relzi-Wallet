"use client"
import Button from '@/components/button/Button'
import DashboardLayout from '@/layout/DashboardLayout'
import Image from 'next/image'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { FaWallet } from "react-icons/fa";
import { BarChart, Bar, Rectangle, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import styles from '@/components/components.module.scss';
import { MdDelete, MdOutlineWallet, MdOutlineWifi } from "react-icons/md";
import { BsSimFill } from "react-icons/bs";

const page = () => {

    const data_1 = [
        {
            name: 'Jan',
            pv: 2400,
        },
        {
            name: 'Feb',
            pv: 1398,
        },
        {
            name: 'Mar',
            pv: 9800,
        },
        {
            name: 'Apr',
            pv: 3908,
        },
        {
            name: 'May',
            pv: 4800,
        },
        {
            name: 'Jun',
            pv: 3800,
        },
        {
            name: 'Jul',
            pv: 4300,
        },
    ];

    const gradient = {
        grad: 'radial-gradient(circle, #00d1d0, #00bcd3, #00a6d2, #0090ca, #1078bc)',
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip bg-transparent hover:bg-white fill-none">
                    <p className="label bg-white rounded-md p-2 text-[#0797B7]">{`${label} : ${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <DashboardLayout icon={<MdOutlineWallet color='white' size={32} />} pageName="Wallet">
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2 text-text-primary-color'>
                    <h1>Wallet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-7 flex-col gap-3 justify-between'>
                        <div className=' box_shadow_primary rounded-xl xl:col-span-2 col-span-5 flex items-center py-4 px-7 w-full justify-center flex-col gap-16'>
                            <Button icon={<FaWallet />} name={"Balance"} mainClass={"py-2 px-10 rounded-full active:scale-[0.97]"} pClass={"text-primary-color"} bgcolor={"bg-[#3B4E871F] "} />
                            <span className='flex items-center flex-col gap-4'>
                                <p className='text-primary-color'>Available Balance</p>
                                <h2 className='text-text-primary-color'>$ 41,500</h2>
                                <p className='text-gray-400'>Last Updated just now</p>
                            </span>
                            <Button name={"Withdraw"} mainClass={" py-2 px-10 rounded-full active:scale-[0.97]"} pClass={"text-white"} bgcolor={"bg-primary-color"} />
                        </div>
                        <div className={`${styles.card} rounded-xl col-span-5 `}
                            style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                            <div className={`
                          w-full h-[20rem] rounded-xl flex flex-col justify-center items-center gap-3 p-4 max-sm:p-1`} >

                                <div className=' w-full h--[3rem] flex max-[400px]:flex-col justify-between items-center p-4 pb-0'>
                                    <h3 className={`text-[#fff] max-[480px]:text-lg text-2xl font-semibold`}> Overview </h3>
                                </div>

                                <ResponsiveContainer width="100%" height="99%" className={'max-sm:p-1 ps-0'}>
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={data_1}
                                        margin={{
                                            top: 0,
                                            right: 0,
                                            left: 0,
                                            bottom: 5,
                                        }}
                                    >
                                        <XAxis dataKey="name" axisLine={false} tick={{ fill: 'white', stroke: '0' }} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar dataKey="pv" fill="transparent" stroke="white" radius={10} barSize={35} activeBar={<Rectangle fill="white" stroke="" />} />
                                    </BarChart>
                                </ResponsiveContainer>

                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-7 gap-3 justify-between '>
                        <div className=' box_shadow_primary rounded-xl xl:col-span-3 col-span-5 flex items-start py-4 px-7 w-full justify-start flex-col gap-8'>
                            <h3 className='text-text-primary-color'>Recent Summary</h3>
                            <div className='w-full flex flex-col gap-2'>
                                <span className='border-l-2 border-primary-color pl-4 flex justify-between w-full'>
                                    <span className='flex flex-col gap-1'>
                                        <p className='font-semibold text-text-primary-color'>Lorem Ipsum Dolor Sit Amet Jis Herif Serik Kelonam.</p>
                                        <p className='text-gray-400'>22 DEC 7:20 AM</p>
                                    </span>
                                    <MdDelete size={28} color='gray' className='cursor-pointer' />

                                </span>
                                <span className='border-l-2 border-primary-color pl-4 flex justify-between w-full'>
                                    <span className='flex flex-col gap-1'>
                                        <p className='font-semibold text-text-primary-color'>Lorem Ipsum Dolor Sit Amet Jis Herif Serik Kelonam.</p>
                                        <p className='text-gray-400'>22 DEC 7:20 AM</p>
                                    </span>
                                    <MdDelete size={28} color='gray' className='cursor-pointer' />
                                </span>
                                <span className='border-l-2 border-primary-color pl-4 flex justify-between w-full'>
                                    <span className='flex flex-col gap-1'>
                                        <p className='font-semibold text-text-primary-color'>Lorem Ipsum Dolor Sit Amet Jis Herif Serik Kelonam.</p>
                                        <p className='text-gray-400'>22 DEC 7:20 AM</p>
                                    </span>
                                    <MdDelete size={28} color='gray' className='cursor-pointer' />
                                </span>

                            </div>
                        </div>
                        <div className=' box_shadow_primary rounded-xl xl:col-span-4 col-span-5 flex items-start py-4 px-7 w-full justify-center gap-4 2xl:flex-row xl:flex-col-reverse max-[1025px]:flex-row max-[990px]:flex-col-reverse'>
                            <div className='flex flex-col gap-6 bg-gray-200 px-8 py-3 rounded-xl 2xl:w-[30rem] xl:w-fit max-[1025px]:w-[30rem] max-[990px]:w-fit max-sm:w-full'>
                                <p className='text-text-primary-color font-semibold'>Card Details</p>
                                <div className='flex flex-col gap-2'>

                                    <span className='flex items-center gap-2'>
                                        <p className='text-gray-400'>Holder Name:</p>
                                        <p className='text-text-primary-color font-semibold'>Viking Burrito</p>
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <p className='text-gray-400'>Card Type:</p>
                                        <p className='text-text-primary-color font-semibold'>Debit</p>
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <p className='text-gray-400'>Card Name:</p>
                                        <p className='text-text-primary-color font-semibold'>Visa</p>
                                    </span>
                                </div>
                                <Button name={"Add Card"} bgcolor={"bg-primary-color"} pClass={"text-white"} mainClass={"py-2 px-3 rounded-xl active:scale-[0.97] w-fit"} />
                            </div>
                            <div className='bg-primary-color flex justify-between sm:gap-24 gap-4 px-8 py-4 rounded-xl text-white w-full h-full '
                                style={{ backgroundImage: 'linear-gradient(to right top, #00A3B1, #00A3B1, #49bdc7, #00A3B1, #00A3B1)', }}>
                                <div className='flex flex-col items-start gap-24'>
                                    <div>
                                        <h2>Visa</h2>
                                    </div>
                                    <div className='flex flex-col items-start gap-2'>
                                        <p>
                                            1234 5678 9456 2315
                                        </p>
                                        <span className='flex items-center gap-2'>
                                            <p>Jack Lewis</p>
                                            <p>06/23</p>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start justify-end gap-4'>
                                    <MdOutlineWifi className='text-white text-4xl rotate-90' />
                                    <BsSimFill className='text-white text-4xl rotate-90' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default page
