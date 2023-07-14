'use client'

import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Obsidian = () => {
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
                <h1 className='text-feature-1 text-3xl text-center mt-4'>Improved Obsidian</h1>
                <img className='max-h-full p-4 aspect-standard' src='../shard.png'></img>
                <ul className='flex gap-4 max-h-16'>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Java</li>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Modding</li>
                        <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Gaming</li>     
                </ul>
                <div className='text-white rounded-md p-2 w-3/4'>                  
                    <p>Improved Obsidian is a minecraft mod that I made in Java which has over 1000 downloads. I developed it to suit 2 different modding platforms and also actively update it to keep in line with the most up to date versions of Minecraft.</p>
                    <p>My original iteration was built on the Fabric framework but I have since built it to suit the Forge framework.</p>         
                </div>
            </div>
        </div>
    )
}
export default Obsidian;