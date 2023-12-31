import { portfolioItems } from "@/utils/data";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div id="portfolio" className="grid place-items-center w-full align-middle py-5 bg-primary-1 bg-opacity-80 xs:h-auto">
            <h1 className="text-3xl text-primary-2 font-bold w-fit text-center xs:mb-4 font-vt323">Portfolio</h1>
            <div className="cards xs:w-screen xs:p-0">
                {portfolioItems && portfolioItems.map((item) => (
                    <div className="bg-primary-1 text-primary-2 p-2 max-h-128 rounded-md xs:w-screen xs:px-5" key={item.id}>
                        <Link href={item.url ? `/portfolio-item/${item.url}` : '/#portfolio'} className="p-2 grid place-items-center">
                            <img src={item.imgPath} className="w-auto max-h-full aspect-video hover:scale-101 transition-all duration-100"></img>
                            <h1 className="xs:text-base text-xl text-gray-200 font-semibold">{`${item.name} • ${item.publishDate}`}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfolio