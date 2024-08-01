'use client'
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import DashboardLayout from "@/layout/DashboardLayout";
import { MdHomeRepairService } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import Button from "@/components/button/Button";
import { FaWallet } from "react-icons/fa";
import styles from '@/components/components.module.scss';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Page = () => {

    const gradient = {
        grad: 'linear-gradient(to right, #00b4b3, #00a7bc, #0099c1, #0089c2, #1078bc)',
    }
    const months = [
        'Six month', 'Three month', 'One month'
    ]
    const data_1 = [
        {
            name: 'Jan',
            pv: 10,
            amt: 24,
        },
        {
            name: 'Feb',
            pv: 13,
            amt: 22,
        },
        {
            name: 'Mar',
            pv: 98,
            amt: 100,
        },
        {
            name: 'Apr',
            pv: 39,
            amt: 200,
        },
        {
            name: 'May',
            pv: 48,
            amt: 300,
        },
        {
            name: 'Jun',
            pv: 38,
            amt: 500,
        },
        {
            name: 'Jul',
            pv: 43,
            amt: 1000,
        },
    ];

    const router = useRouter()

    return (
        <DashboardLayout>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2 text-text-primary-color'>
                    <h2>Howdy Admin</h2>
                    <p>Good Morning, Have a nice Day!</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center flex-wrap max-[850px]:justify-center justify-between gap-4">
                        {Array.from({ length: 4 })?.map((_item, i) => (
                            <div className="flex gap-16 box_shadow_primary py-4 px-6 max-[850px]:w-full w-[23rem] rounded-2xl justify-between" key={i}>
                                <span>
                                    <p className="font-semibold text-text-primary-color">2500</p>
                                    <p>Total orders</p>
                                </span>
                                <div className=" py-4 px-4 rounded-lg bg-primary-color w-fit">
                                    <FaCar color="white" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-8 flex-col gap-6 justify-between">
                        <div className={`col-span-6 box_shadow_primary rounded-xl border-2 border-gray-300`} >
                            <div className={` border--2 border-yellow-900 w-full sm:h-full h-[18rem] rounded-xl flex flex-col justify-center items-center gap-3`} style={{ backgroundImage: gradient.class === '' ? gradient.grad : gradient.class }}>

                                <div className='border--2 border-red-800 w-full h--[3rem] flex max-[400px]:flex-col justify-between items-center p-4 pb-0'>
                                    <h3 className={`text-text-primary-color max-[480px]:text-lg text-2xl font-semibold`}> Earnings </h3>

                                    <select name="" id="" className='outline-none bg-[#fff] max-[480px]:text-xs text-sm text-[#0797B7] rounded-xl p-1'>
                                        {
                                            months?.map((er, index) => (
                                                <option value={er} key={index}> {er} </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <ResponsiveContainer width="100%" height="99%" className={'p-4 ps-0'}>
                                    <AreaChart
                                        width={500}
                                        height={300}
                                        data={data_1}
                                        margin={{
                                            top: 0,
                                            right: 10,
                                            left: 0,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid />
                                        <XAxis dataKey="name" tick={{ fill: '#00A3B1' }} />
                                        <YAxis tick={{ fill: '#00A3B1' }} />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="pv" stroke="#00A3B1" activeDot={{ r: 5 }} strokeWidth={2} fill='#ffffff80' />
                                    </AreaChart>
                                </ResponsiveContainer>

                            </div>
                        </div>
                        <div className=' box_shadow_primary rounded-xl xl:col-span-2 col-span-5 flex items-center py-4 px-7 w-full justify-center flex-col gap-16'>
                            <Button icon={<FaWallet />} name={"Balance"} mainClass={"py-2 px-10 rounded-full active:scale-[0.97]"} pClass={"text-primary-color"} bgcolor={"bg-[#3B4E871F] "} />
                            <span className='flex items-center flex-col gap-4'>
                                <p className='text-primary-color'>Available Balance</p>
                                <h2 className='text-text-primary-color'>$ 41,500</h2>
                                <p className='text-gray-400'>Last Updated just now</p>
                            </span>
                            <Button name={"Withdraw"} mainClass={" py-2 px-10 rounded-full active:scale-[0.97]"} pClass={"text-white"} bgcolor={"bg-primary-color"} />
                        </div>
                    </div>
                </div>
                <div className='py-4 px-6 border border-gray-300 rounded-xl'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2 text-text-primary-color'>
                            <h1>Orders</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <div className='w-full h-[20rem] overflow-auto'>
                            <table className='xl:w-full w-[50rem]'>
                                <tbody className='mb-4'>
                                    <tr>
                                        <th className='text-start font-bold'>ID</th>
                                        <th className='text-start font-bold'>Name</th>
                                        <th className='text-start font-bold'>Service</th>
                                        <th className='text-start font-bold'>Revenue</th>
                                        <th className='text-start font-bold'>Percentage</th>
                                        <th className='text-start font-bold'>Email</th>
                                        <th className='text-start font-bold'>Status</th>
                                    </tr>
                                </tbody>
                                <tbody className='border-t-2 '>
                                    {Array.from({ length: 30 })?.map((_item, i) => (
                                        <tr key={i}
                                            onClick={() => router.push(`/orders/order-detail/${i}`)}
                                            className='border-b-2 cursor-pointer active:scale-[0.98]'>
                                            <td className='py-4 text-text-primary-color font-semibold '>6548</td>
                                            <td className='py-4 text-text-primary-color font-semibold'>Maria Anders</td>
                                            <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                            <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                            <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                            <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                            <td className='py-4 text-text-primary-color font-semibold'>
                                                <Button name={"Active"} mainClass={"py-1 px-6 text-white rounded-full"} bgcolor={"bg-primary-color"} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Page;