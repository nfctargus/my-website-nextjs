'use client'

import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Upcoming = () => {
    return (
        <div className='grid place-items-center h-screen w-screen'>
            <div className='h-3/4 w-11/12 bg-primary-1 p-5 bg-opacity-95 text-primary-2 flex flex-col justify-center align-middle'>
                <div className='relative mr-auto'>
                    <div className='sidebar-icon group'>
                        <Link href={'https://nfctargus.github.io/my-website-nextjs/'}><BsFillArrowLeftCircleFill size={34}/></Link>
                        <span className="sidebar-tooltip group-hover:scale-100">
                            Back
                        </span>
                    </div>
                </div>
                <h1 className='text-primary-2 text-3xl font-bold text-center mb-4'>Coming Soon</h1>
                <div className='h-3/4 w-full p-2 grid place-items-center xs:p-0'>
                    <img className='max-h-full max-w-full aspect-standard' src='../comingsoon.png'></img>
                </div>
                <ul className='flex justify-center gap-4 max-h-16 py-2 xs:text-sm'>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>NextJS</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Tailwind CSS</li>  
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>NextJS</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>TypeORM</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>MySQL</li>
                </ul>
                <div className='text-white text-lg rounded-md p-2 grid place-items-center xs:text-base'>                  
                <p className='w-2/3 xs:w-full'>Something I will be working on in the near future, stay tuned!</p>
                </div>
            </div>
        </div>
    )
}
export default Upcoming;