'use client'
import { navigateTo } from '@/utils/helpers';
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full absolute bottom-0 h-56 text-white font-karla" id="contact">
            <div className="p-2 flex flex-col justify-center align-middle bg-primary-1 bg-opacity-95 absolute bottom-0 w-full">
                <div className="flex flex-col text-center align-middle h-full p-5">
                    <h1 className="font-semibold capitalize text-lg">Get in touch</h1>
                    <p>You can reach me at <a href="mailto:kieranlawrence2@gmail.com">kieranlawrence2@gmail.com</a></p>
                </div>
                <ul className="flex flex-row gap-2 text-lg justify-center">
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
                <small className="flex justify-center text-gray-200">© 2023</small>
            </div>
        </div>
    );
};
export default Footer;