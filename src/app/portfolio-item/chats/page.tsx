'use client'

import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Books = () => {
    return (
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
                <h1 className='text-feature-1 text-3xl text-center mt-4'>Skol</h1>
                <img className='max-h-full p-4 aspect-standard' src='../bridge.jpg'></img>
                <ul className='flex gap-4 max-h-16'>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>TypeScript</li>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>NestJS</li>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Socket.IO</li>     
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Redux</li>     
                </ul>
                <div className='text-white rounded-md p-2 w-3/4'>                  
                    <p>A detailed overview containing information about the project, things I learned, the ups and downs and some highlights</p>
                </div>
            </div>
        </div>
    )
}
export default Books;