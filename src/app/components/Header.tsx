'use client'

import { createRef, useEffect, useState } from 'react';
import Link from "next/link";
import { navigateTo } from '@/utils/helpers';

const Header = () => {
    const ref = createRef<HTMLDivElement>();
    const [showMenu,setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }
    const handleMenuItemClick = () => {
        navigateTo
        setShowMenu(false);
    }
    useEffect(() => {
        const handleClick = (e:MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setShowMenu(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    },[ref])
    return (
        <div className="fixed top-0 left-0 h-min p-5 w-full bg-none z-50 font-vt323 snap-y snap-mandatory">
            <div ref={ref} className='group w-1/5 snap-center'>
                <div  onClick={handleMenuClick} className={`cursor-pointer rounded-full ${showMenu ? 'hover:bg-gray-800' : 'bg-gray-800'} w-14 h-14 group/{bars} hover:bg-feature-1 transition-all duration-150 ease-linear`}>
                    <span className={`${showMenu ? "animate-moveAndSpin2" : "animate-moveAndSpin4"} activeMenuBar group-hover/{bars}:bg-white `}></span>
                    <span className={`${showMenu ? "animate-disappear" : "animate-appear"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                    <span className={`${showMenu ? "animate-moveAndSpin1" : "animate-moveAndSpin3"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                </div>
                <div className={`menu -z-10 fixed top-0 left-0 ${showMenu ? 'scale-100' : 'scale-0'} transition-all duration-150 ease-linear origin-top-left`}>
                    <ul className='text-white p-24 leading-8 text-2xl xs:text-xl'>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#home">Home</Link></li>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#portfolio">Portfolio</Link></li>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#resume">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Header