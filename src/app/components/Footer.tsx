'use client'
import { navigateTo } from '@/utils/helpers';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full relative h-56 text-white font-vt323" id="contact">
            <div className="p-2 flex flex-col justify-center align-middle bg-primary-1 bg-opacity-95 absolute bottom-0 w-full">
                <ul className="flex flex-row gap-2 text-xl justify-center xs:text-base">
                    <li className='footerLi'>
                        <Link onClick={navigateTo} href="#home">Home</Link>
                    </li>
                    <p>•</p>
                    <li className='footerLi'>
                    <Link onClick={navigateTo} href="#portfolio">Portfolio</Link>
                    </li>
                    <p>•</p>
                    <li className='footerLi'>
                        <Link onClick={navigateTo} href="#resume">Resume</Link>
                    </li>
                    <p>•</p>
                    <li className='footerLi'>
                        <a href="mailto:kieranlawrence2@gmail.com">Contact</a>
                    </li>
                </ul>
                <small className="flex justify-center text-gray-200 pb-1 text-base xs:text-sm">Code By Kieran © 2023</small>
            </div>
        </div>
    );
};
export default Footer;