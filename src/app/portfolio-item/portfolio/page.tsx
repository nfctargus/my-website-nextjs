'use client'

import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Portfolio = () => {
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
                <h1 className='text-feature-1 text-3xl text-center mt-4'>Portfolio Website</h1>
                <img className='max-h-full p-4 aspect-standard' src='../thiswebsite.png'></img>
                <ul className='flex gap-4 max-h-16'>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>NextJS</li>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>TypeScript</li>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Tailwind CSS</li>     
                </ul>
                <div className='text-white rounded-md p-2 w-3/4'>                  
                    <p>I made this website using NextJS, and it is actually my second iteration of my website. The source code to this as well as my first iteration made in React can be found on my GitHub!</p>
        
                </div>
            </div>
        </div>
    )
}
export default Portfolio;