import Button from '@/components/button/Button'
import DashboardLayout from '@/layout/DashboardLayout'
import Image from 'next/image'
import React from 'react'
import { FaCarAlt } from 'react-icons/fa'
import { MdEdit } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Field from '@/components/inputFIeld/Field'
import { CgProfile } from 'react-icons/cg'

const page = () => {
    return (
        <DashboardLayout icon={<CgProfile size={32} color='text-primary-color' />} pageName={"Profile"}>
            <div className='flex flex-col gap-8 items-center'>
                <div className='bg-[#00a3b142] w-full sm:h-[20rem] h-[15rem] rounded-3xl relative top-[5rem]'>
                    <div className='flex flex-col gap-3 items-center text-primary-color py-16 absolute bottom-[-1rem]  right-[50%] translate-x-[50%]'>
                        <Image src={"/image/Dummy/Card/user_1.png"} width={100} height={80} className='rounded-full sm:w-[12rem] sm:h-[12rem] w-[8rem] h-[8rem]' />
                        <h2>Michael Corleone</h2>
                        <h5 className='font-semibold'>Super Admin</h5>
                        <Button name={"Edit Profile"} mainClass={"w-fit py-2 px-4 rounded-xl active:scale-[0.95]"} bgcolor={"bg-primary-color"} pClass={"text-white"} />
                    </div>
                </div>
                <div className='bg-white 2xl:w-[70%] w-full sm:h-[20rem] h-[30rem] rounded-3xl relative top-[5rem] profile_shadow p-8 flex flex-col gap-4 justify-around'>
                    <h2 className='text-text-primary-color'>Platform Fee</h2>
                    <div className='flex gap-4 items-center flex-wrap'>
                        <span className='bg-[#00a3b142] py-2 px-6 flex items-center gap-4 2xl:w-[31rem] xl:w-[27rem] w-full rounded-2xl text-primary-color justify-between sm:flex-row flex-col'>
                            <span className='flex items-center gap-4'>
                                <FaCarAlt size={32} />
                                <p>Car Rental Fee</p>
                            </span>
                            <span className='flex items-center gap-4'>
                                <span className='bg-white flex items-center rounded-xl overflow-hidden'>
                                    <Field type="number" customClass='outline-none w-[6rem]  px-2 py-2' />
                                    <span className='flex flex-col'>
                                        <IoMdArrowDropup size={20} />
                                        <IoMdArrowDropdown size={20} />
                                    </span>
                                </span>
                                <p>%</p>
                                <MdEdit />
                            </span>
                        </span>
                        <span className='bg-[#00a3b142] py-2 px-6 flex items-center gap-4 2xl:w-[31rem] xl:w-[27rem] w-full rounded-2xl text-primary-color justify-between sm:flex-row flex-col'>
                            <span className='flex items-center gap-4'>
                                <FaCarAlt size={32} />
                                <p>Car Rental Fee</p>
                            </span>
                            <span className='flex items-center gap-4'>
                                <span className='bg-white flex items-center rounded-xl overflow-hidden'>
                                    <Field type="number" customClass='outline-none w-[6rem]  px-2 py-2' />
                                    <span className='flex flex-col'>
                                        <IoMdArrowDropup size={20} />
                                        <IoMdArrowDropdown size={20} />
                                    </span>
                                </span>
                                <p>%</p>
                                <MdEdit />
                            </span>
                        </span>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <span className='bg-[#00a3b142] py-2 px-6 flex items-center gap-4 2xl:w-[31rem] xl:w-[27rem] w-full rounded-2xl text-primary-color justify-between sm:flex-row flex-col'>
                            <span className='flex items-center gap-4'>
                                <FaCarAlt size={32} />
                                <p>Car Rental Fee</p>
                            </span>
                            <span className='flex items-center gap-4'>
                                <span className='bg-white flex items-center rounded-xl overflow-hidden'>
                                    <Field type="number" customClass='outline-none w-[6rem]  px-2 py-2' />
                                    <span className='flex flex-col'>
                                        <IoMdArrowDropup size={20} />
                                        <IoMdArrowDropdown size={20} />
                                    </span>
                                </span>
                                <p>%</p>
                                <MdEdit />
                            </span>
                        </span>


                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default page
