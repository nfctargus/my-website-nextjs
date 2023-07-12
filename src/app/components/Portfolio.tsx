import { portfolioItems } from "@/utils/data";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div id="portfolio" className="bg-primary-1 py-5 bg-opacity-95">
            <div className="cards">
                {portfolioItems && portfolioItems.map((item) => (
                    <div className="bg-primary-2 text-primary-2 p-2 max-h-112 rounded-md" key={item.id}>
                        <Link href={`/portfolio-item/${item.id}`} className="p-2 grid place-items-center">
                            <img src={item.imgPath} className="h-full w-full aspect-standard hover:scale-101 transition-all duration-100"></img>
                            <h1 className="text-xl text-gray-200 font-semibold">{`${item.name} • ${item.publishDate}`}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfolio