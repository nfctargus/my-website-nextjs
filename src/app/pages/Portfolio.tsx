import { portfolioItems } from "@/utils/data"
const Portfodivo = () => {
    return (
        <div>
            <div className="cards">
                {portfolioItems && portfolioItems.map((item) => (
                    <div className="card group" key={item.id}>
                        <img src={item.imgPath} className="object-contain max-w-full max-h-full opacity-100 transition-all duration-300 text-center cursor-pointer"></img>
                        <h1 className="text-xl text-gray-200 font-semibold">{`${item.name} • ${item.publishDate}`}</h1>
                        <div className="transition-all duration-300 opacity-0 absolute mt-auto group-hover:opacity-100">
                            <div className="bg-black text-white py-4 px-8">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfodivo