import { FC } from 'react';
import { AiFillGithub,AiFillLinkedin,AiFillMail } from 'react-icons/ai';
const Hero = () => {
    return (
        <div className="w-full h-3/4 flex justify-center align-middle p-0" id='home'>
            {/* <h1 className='text-white absolute t-0 l-0 text-4xl py-5'>Code by Kieran</h1> */}
            <svg className="w-1/2 h-1/5 ml-40 my-20 pl-40 py-20" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <mask id="svg-mask">
                        <path fill="rgba(255, 255, 255, 1)" width="100%" height="100%" d="M18.9,-31.7C21.2,-24.3,17.5,-14.4,17.4,-7.4C17.3,-0.4,20.7,3.7,21.8,9.2C22.9,14.6,21.7,21.4,17.7,26.3C13.7,31.2,6.8,34.3,-0.7,35.2C-8.2,36.2,-16.4,35.1,-20.9,30.3C-25.3,25.5,-26,17.1,-29.1,9.1C-32.2,1.1,-37.8,-6.5,-37.7,-13.9C-37.6,-21.3,-31.8,-28.6,-24.6,-34.3C-17.3,-40.1,-8.7,-44.5,-0.2,-44.2C8.3,-43.9,16.6,-39.1,18.9,-31.7Z" transform="translate(50 50)" strokeWidth="0"></path>
                    </mask>
                </defs>
                <image href="./smee.png" width="100%" height="100%" mask="url(#svg-mask)" />
            </svg>
            <div className="w-1/2 flex align-middle flex-col h-full m-auto mr-40">
                <h1 className="text-5xl font-semibold pb-2 text-white">Hey, i'm Kieran</h1>
                <h2 className="text-xl text-primary-2 pr-20">I'm a Software Developer based in Perth, WA. <br />
                    I'm an easy going guy that loves to learn new things and generally just kick goals. <br />
                    If I'm not in front of a screen you'll probably find me under a car!
                </h2>
                <ul className='flex gap-4'>
                    <a href='https://github.com'><SocialIcons icon={<AiFillGithub size={34} />} text='GitHub' /></a>
                    <a href='https://linkedin.com'><SocialIcons icon={<AiFillLinkedin size={34} />} text='LinkedIn' /></a>
                    <a href="mailto:kieranlawrence2@gmail.com"><SocialIcons icon={<AiFillMail size={34} />} text='Email Me' /></a>
                </ul>
            </div>
        </div>
    )
}
type Props = {
    icon:any;
    text:string;
}
const SocialIcons:FC<Props> = ({icon,text}) => {
    return (
        <li>
            <div className="sidebar-icon group">
                {icon}
                <span className="sidebar-tooltip group-hover:scale-100">
                    {text}
                </span>
            </div>
        </li>
    )
}

export default Hero