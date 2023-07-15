'use client'

import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Portfolio = () => {
    return (
        <div className='grid place-items-center h-screen w-screen'>
            <div className='h-3/4 w-11/12 bg-primary-1 p-5 bg-opacity-95 text-primary-2 flex flex-col justify-center align-middle xs:h-fit'>
                <div className='relative mr-auto'>
                    <div className='sidebar-icon group'>
                        <Link href={'https://nfctargus.github.io/my-website-nextjs/'}><BsFillArrowLeftCircleFill size={34}/></Link>
                        <span className="sidebar-tooltip group-hover:scale-100">
                            Back
                        </span>
                    </div>
                </div>
                <h1 className='text-primary-2 text-3xl font-bold text-center mb-4'>Portfolio Website</h1>
                <div className='h-3/4 w-full p-2 grid place-items-center xs:p-0'>
                    <img className='max-h-full max-w-full aspect-standard' src='../thiswebsite.png'></img>
                </div>
                <ul className='flex justify-center gap-4 h-fit py-2 xs:text-sm flex-wrap'>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>NextJS</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>TypeScript</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Tailwind CSS</li>  
                </ul>
                <div className='text-white text-lg rounded-md p-2 grid place-items-center xs:text-base max-h-56 overflow-y-scroll'>                  
                    <p className='w-2/3 xs:w-full'>I made this website using NextJS, and it is actually my second iteration of my website. The source code to this as well as my first iteration made in React can be found on my GitHub!</p>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;