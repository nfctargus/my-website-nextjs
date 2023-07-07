import { LuMenu } from 'react-icons/lu';
const Header = () => {

    const handleMenuClick = () => {

    }
    return (
        <div className="fixed top-0 left-0 h-min p-5 flex flex-row justify-between align-middle w-full">
            <div className='group w-1/5'>
                <LuMenu size='32' className='z-10 rounded-full relative flex items-center justify-center h-12 w-12 p-2 bg-gray-400 dark:bg-gray-800 text-green-500 hover:text-white hover:bg-green-600 transition-all duration-300 ease-linear cursor-pointer shadow-lg'/>
                <div className='rounded-br-full bg-gray-800 fixed top-0 left-0 h-64 w-64 scale-0 group-hover:scale-100 transition-all duration-100 ease-linear origin-top-left'>
                    <ul className='text-white p-16'>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>Resume</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            
            <h1 className="w-4/5 font-cherryBomb font-bold text-5xl">HEADER</h1>
        </div>
    )
};
export default Header