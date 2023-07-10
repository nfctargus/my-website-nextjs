const Footer = () => {
    return (
        <div className="w-full absolute bottom-0 h-56 text-white font-karla" id="contact">
            <div className="p-2 flex flex-col justify-center align-middle bg-gray-700 absolute bottom-0 w-full">
                <div className="flex flex-col text-center align-middle h-full p-5">
                    <h1 className="font-semibold capitalize text-lg">Get in touch</h1>
                    <p>Slide into my emails at firstname@gmail.com</p>
                </div>
                <ul className="flex flex-row gap-2 text-lg justify-center">
                    <li>
                        <a>Home</a>
                    </li>
                    <p>•</p>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <p>•</p>
                    <li>
                        <a>Resume</a>
                    </li>
                    <p>•</p>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
                <small className="flex justify-center text-gray-200">© 2023</small>
            </div>
        </div>
    );
};
export default Footer;