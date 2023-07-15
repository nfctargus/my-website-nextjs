'use client'
import { navigateTo } from '@/utils/helpers';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full absolute bottom-0 h-56 text-white font-vt323" id="contact">
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
                <small className="flex justify-center text-gray-200 text-[11px] xs:text-[10px]">Background Art credit to <br /> <a href='https://www.instagram.com/mat.pixelart/' className='px-2 underline text-feature-2 hover:text-white transition-all duration-150'> @matt.pixelart</a> on Instagram</small>
            </div>
        </div>
    );
};
export default Footer;