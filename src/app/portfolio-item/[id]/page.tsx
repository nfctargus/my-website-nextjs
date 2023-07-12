'use client'

import { useParams } from 'next/navigation';
import { portfolioItems } from "@/utils/data";

export default function PortfolioItem() {
    const params = useParams();
    const currentItem = portfolioItems.find((item) => item.id === parseInt(params.id))
    return (
        <div className='grid place-items-center h-screen w-screen'>
            <div className='h-3/4 w-11/12 bg-primary-1 p-5 bg-opacity-95 text-primary-2'>
                <h1 className='text-feature-1 text-3xl text-center mt-4'>{currentItem?.name}</h1>
            </div>
        </div>
    );
}
