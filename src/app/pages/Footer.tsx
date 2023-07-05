const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 h-2/4 w-screen m-0 bg-gray-100 text-gray-900">
            <div className="fixed bottom-0 left-0 w-screen m-0 p-2 flex justify-center align-middle bg-gray-700">
                <ul className="flex flex-row gap-2 text-white">
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
            </div>
        </div>
    );
};
export default Footer;