import { jobHistoryItems } from "@/utils/data"
const Resume = () => {
    return (
        <div className="flex justify-between align-middle p-1 gap-2 h-192" id="resume">
            <div className="w-1/2 h-full flex flex-col gap-2">
                <div className="h-1/2 bg-primary-1 mt-2">
                    <div className="p-2">
                        <h1 className="font-bold text-center">My Favourite Tech</h1>
                        My choice tech stack for personal projects is GENERALLY (but not always): <br />
                        <ul className="list-disc px-5">
                            <li>React (Next JS)</li>
                            <li>Typescript</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MySQL</li>
                        </ul>
                    </div><br />
                    <div className="p-2">
                        Some other tech that I love and/or have built at scale with:
                        <ul className="list-disc px-5">
                            <li>Python</li>
                            <li>Java</li>
                            <li>Express</li>
                            <li>PHP</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>          
                </div>
                <div className="h-1/2 bg-primary-1 mb-2">
                    <h1 className="text-xl font-bold text-center">Education</h1>
                    <h2>X Qualification</h2><h3>X Date</h3><h4>X qualification Number</h4>
                </div>
            </div>
            <div className="w-1/2">
                <div className="scrollableContainer">
                    {jobHistoryItems && jobHistoryItems.map((jobItem) => (
                        <div key={jobItem.id} className="bg-primary-1 h-72 p-2 my-2">
                            <h1 className=" font-bold text-xl">{jobItem.title}</h1>
                            <div className="flex gap-2">
                                <h2 className="text-blue-900 font-bold text-lg">{jobItem.company}</h2><h3 className="text-gray-200 text-base">• {jobItem.periodWorked}</h3>
                            </div>
                            <p>{jobItem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Resume