'use client'

import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Chats = () => {
    return (
        <div className='grid place-items-center h-screen w-screen'>
            <div className='h-4/5 w-11/12 bg-primary-1 p-5 bg-opacity-95 text-primary-2 flex flex-col justify-center align-middle xs:h-fit'>
                <div className='relative mr-auto'>
                    <div className='sidebar-icon group'>
                        <Link href={'https://nfctargus.github.io/my-website-nextjs/'}><BsFillArrowLeftCircleFill size={34}/></Link>
                        <span className="sidebar-tooltip group-hover:scale-100">
                            Back
                        </span>
                    </div>
                </div>
                <h1 className='text-primary-2 text-3xl font-bold text-center mb-4'>Skol</h1>
                <div className='h-3/4 w-full p-2 grid place-items-center xs:p-0 xs:hidden'>
                    <img className='max-h-full max-w-full aspect-standard' src='../skol.png'></img>
                </div>
                <ul className='flex justify-center gap-4 h-fit py-2 xs:text-sm flex-wrap'>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>TypeScript</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>NestJS</li>
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Socket.IO</li>     
                    <li className='rounded-md bg-feature-2 text-white font-semibold px-2 py-1'>Redux</li>
                </ul>
                <div className='text-white text-lg rounded-md p-2 grid place-items-center xs:text-base max-h-56 xs:overflow-y-scroll'>                  
                    <p className='w-2/3 xs:w-full text-justify'>Skol is a real time chat application I designed and built. I followed several online tutorial series to learn the key concepts needed to build this chat application. In fact, I actually gave up and started from scratch several times until I was finally able to complete it. My application features all the basic features you would expect to see in a chat application such as adding/removing friends, chatting with those friends via private chats, creating group chats and then personalising those group chats. You can leave a group, edit messages, delete messages and even delete messages from other users in a group (as long as you are the group creator)</p>
                    <div className="sidebar-icon group">
                        <a href='https://github.com/nfctargus/skol-backend'><AiFillGithub size={34} /></a>
                        <span className="sidebar-tooltip group-hover:scale-100">Link to Github Repo</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chats;