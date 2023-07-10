'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    const [showMenu,setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }
    const navigateTo = (e:React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const sectionId = href.replace(/.*\#/, "");
        const element = document.getElementById(sectionId);
        element && element.scrollIntoView({behavior:"smooth"});
    }
    return (
        <div className="fixed top-0 left-0 h-min p-5 flex flex-row justify-between align-middle w-full bg-primary-1 z-50 shadow-sm">
            <div className='group w-1/5'>
                <div onClick={handleMenuClick} className={`cursor-pointer rounded-full ${showMenu ? 'bg-gray-800' : 'bg-gray-800'} w-12 h-12 flex flex-col justify-center align-middle m-0 p-0 group/{bars}`}>
                    <span className={`${showMenu ? "animate-moveAndSpin2" : "animate-moveAndSpin4"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                    <span className={`${showMenu ? "animate-disappear" : "animate-appear"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                    <span className={`${showMenu ? "animate-moveAndSpin1" : "animate-moveAndSpin3"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                </div>
                <div className={`-z-10 rounded-br-full bg-gray-800 fixed top-0 left-0 h-64 w-64 ${showMenu ? 'scale-100' : 'scale-0'} transition-all duration-150 ease-linear origin-top-left`}>
                    <ul className='text-white p-16'>
                        <li className='menuListItem'><Link onClick={navigateTo} href="#home">Home</Link></li>
                        <li className='menuListItem'><Link onClick={navigateTo} href="#portfolio">Portfolio</Link></li>
                        <li className='menuListItem'><Link onClick={navigateTo} href="#resume">Resume</Link></li>
                        <li className='menuListItem'><Link onClick={navigateTo} href="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            
            <h1 className="w-4/5 font-cherryBomb font-bold text-5xl">HEADER</h1>
        </div>
    )
};
export default Header