'use client'

import { useParams } from 'next/navigation';
import { portfolioItems } from "@/utils/data";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Link from "next/link";

export default function PortfolioItem() {
    const params = useParams();
    const currentItem = portfolioItems.find((item) => item.id === parseInt(params.id))
    return (
        <>
            
            <div className='grid place-items-center h-screen w-screen'>
                <div className='h-3/4 w-11/12 bg-primary-1 p-5 bg-opacity-95 text-primary-2 grid place-items-center'>
                    <div className='relative mr-auto'>
                        <div className='sidebar-icon group'>
                            <Link href={'/'}><BsFillArrowLeftCircleFill size={34}/></Link>
                            <span className="sidebar-tooltip group-hover:scale-100">
                                Back
                            </span>
                        </div>
                    </div>
                    <h1 className='text-feature-1 text-3xl text-center mt-4'>{currentItem?.name}</h1>
                    <img className='max-h-full p-4 aspect-standard' src={currentItem?.imgPath}></img>
                    <ul className='flex gap-4 max-h-16 overflow-scroll'>
                        {currentItem?.highlights.map((highlight) => (
                            <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>{highlight}</li>
                        ))}
                    </ul>
                    <div className='text-white rounded-md p-2 w-3/4'>
                        {currentItem?.details.map((detail) => (
                            <p>{detail}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
        
    );
}
