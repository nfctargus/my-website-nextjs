import { jobHistoryItems } from "@/utils/data"
const WorkHistory = () => {
    return (
        <div className="grid place-items-center w-full align-middle py-5 bg-primary-1 bg-opacity-80 text-justify snap-center" id="resume">
            <div className="w-full h-192 grid place-items-center overflow-y-scroll">
                <div className="grid place-items-center w-1/2 xs:w-screen">
                    <h1 className="text-2xl text-primary-2 font-bold w-fit text-center">Work History</h1>
                    <div className="h-full">
                        {jobHistoryItems && jobHistoryItems.map((jobItem) => (
                            <div key={jobItem.id} className="bg-primary-1 h-auto p-4 mt-2 rounded-md xs:text-justify xs:px-6">
                                <h1 className="font-bold text-xl text-primary-2">{jobItem.title}</h1>
                                <div className="flex gap-2">
                                    <h2 className="text-feature-1 font-bold text-lg">{jobItem.company}</h2>
                                    <h3 className="text-primary-3 align-middle leading-7">• {jobItem.periodWorked}</h3>
                                </div>
                                <p className="text-primary-3">{jobItem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>            
            </div>
        </div>
    )
}
export default WorkHistory;