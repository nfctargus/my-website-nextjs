'use client'

import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Obsidian = () => {
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
                <h1 className='text-primary-2 text-3xl font-bold text-center mb-4'>Improved Obsidian</h1>
                <div className='h-3/4 w-full p-2 grid place-items-center xs:p-0 xs:hidden'>
                    <img className='max-h-full max-w-full aspect-standard' src='../shard.png'></img>
                </div>
                <ul className='flex justify-center gap-4 h-fit py-2 xs:text-sm flex-wrap'>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Java</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Modding</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Gaming</li>  
                </ul>
                <div className='text-white text-lg rounded-md p-2 grid place-items-center xs:text-base'>                  
                    <p className='w-2/3 xs:w-full text-justify'>Improved Obsidian is a minecraft mod that I made in Java which has over 800 downloads. I developed it to suit the Fabric modding platform and also plan to keep it updated in line with the most recent versions of Minecraft.</p>
                    <div className="sidebar-icon group">
                        <a href='https://github.com/nfctargus/improved-obsidian-1.19'><AiFillGithub size={34} /></a>
                        <span className="sidebar-tooltip group-hover:scale-100">Link to Github Repo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Obsidian;