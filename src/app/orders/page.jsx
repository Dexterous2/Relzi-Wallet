"use client"
import Button from '@/components/button/Button';
import DashboardLayout from '@/layout/DashboardLayout'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import ReactPaginate from 'react-paginate';

const page = () => {
    const [itemOffset, setItemOffset] = useState(0);

    const fakeArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 20

    ];

    const endOffset = itemOffset + 8;
    const pageCount = Math.ceil(fakeArray?.length / 8);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 8) % fakeArray?.length;
        setItemOffset(newOffset);
    };

    const router = useRouter()

    return (
        <DashboardLayout icon={<FaCartShopping color='white' size={32} />} pageName="Orders">
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2 text-text-primary-color'>
                    <h1>Orders</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='w-full overflow-x-auto'>
                    <table className='xl:w-full w-[50rem]'>
                        <tbody className='mb-4'>
                            <tr>
                                <th className='text-start font-bold'>ID</th>
                                <th className='text-start font-bold'>Name</th>
                                <th className='text-start font-bold'>Service</th>
                                <th className='text-start font-bold'>Revenue</th>
                                <th className='text-start font-bold'>Percentage</th>
                                <th className='text-start font-bold'>Email</th>
                                <th className='text-center font-bold'>Status</th>
                            </tr>
                        </tbody>
                        <tbody className='border-t-2'>
                            {Array.from({ length: 30 })?.slice(itemOffset, endOffset)?.map((_item, i) => (
                                <tr key={i} onClick={() => router.push(`/orders/order-detail/${i}`)} className='cursor-pointer active:scale-[0.98]'>
                                    <td className='py-4 text-text-primary-color font-semibold '>6548</td>
                                    <td className='py-4 text-text-primary-color font-semibold'>Maria Anders</td>
                                    <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                    <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                    <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                    <td className='py-4 text-text-primary-color font-semibold'>Germany</td>
                                    <td className='py-4 text-text-primary-color font-semibold flex justify-center'>
                                        <Button name={"Active"} mainClass={"py-1 px-6 text-white rounded-full"} bgcolor={"bg-primary-color"} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                {fakeArray?.length >= 6 && (
                    <ReactPaginate
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        previousLabel={"←"}
                        nextLabel={"→"}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                    />
                )}
            </div>
        </DashboardLayout>
    )
}

export default page
