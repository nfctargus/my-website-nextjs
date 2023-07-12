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
        //setShowMenu(false);
    }
    useEffect(() => {
        const handleClick = (e:MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setShowMenu(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    },[ref])
    return (
        <div className="fixed top-0 left-0 h-min p-5 w-full bg-none z-50">
            <div ref={ref} className='group w-1/5'>
                <div  onClick={handleMenuClick} className={`cursor-pointer rounded-full ${showMenu ? 'hover:bg-gray-800' : 'bg-gray-800'} w-14 h-14 group/{bars} hover:bg-feature-1 transition-all duration-150 ease-linear`}>
                    <span className={`${showMenu ? "animate-moveAndSpin2" : "animate-moveAndSpin4"} activeMenuBar group-hover/{bars}:bg-white `}></span>
                    <span className={`${showMenu ? "animate-disappear" : "animate-appear"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                    <span className={`${showMenu ? "animate-moveAndSpin1" : "animate-moveAndSpin3"} activeMenuBar group-hover/{bars}:bg-white`}></span>
                </div>
                <div className={`-z-10 rounded-br-full bg-gray-800 fixed top-0 left-0 h-64 w-64 ${showMenu ? 'scale-100' : 'scale-0'} transition-all duration-150 ease-linear origin-top-left`}>
                    <ul className='text-white p-20 leading-6 text-lg'>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#home">Home</Link></li>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#portfolio">Portfolio</Link></li>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#resume">Resume</Link></li>
                        <li className='menuListItem'><Link onClick={handleMenuItemClick} href="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Header