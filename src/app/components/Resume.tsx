import { jobHistoryItems } from "@/utils/data"
const Resume = () => {
    return (
        <div className="flex justify-between align-middle p-1 gap-2 h-196" id="resume">
            <div className="w-1/2 h-full flex flex-col gap-2">
                <div className="grid place-items-center"><h1 className="text-xl text-primary-2 font-bold w-fit bg-primary-1 py-2 px-3 rounded-md bg-opacity-95 text-center">Relevant Skills</h1></div>
                <div className="max-h-1/2 bg-primary-1 rounded-md">
                    <div className="p-2 max-h-56">
                        <h1 className="font-bold text-center text-primary-2 text-xl">My Favourite Tech</h1>
                        <h2 className="text-feature-1 font-semibold px-1">Some of my favourite tech is: </h2>
                        <ul className="list-disc px-5 text-primary-3">
                            <li>Express</li>
                            <li>Next</li>
                            <li>Node</li>
                            <li>React</li>
                            <li>TypeORM</li>
                        </ul>
                    </div><br />
                    <div className="p-2 max-h-56">
                        <h2 className="text-feature-1 font-semibold px-1">This is some other tech that I am familiar with but haven't use regularly: </h2>
                        <ul className="list-disc px-5 text-primary-3">
                            <li>Angular</li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Tailwind CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>          
                </div>
                <div className="max-h-1/2 bg-primary-1 rounded-md px-1 py-2">
                    <h1 className="font-bold text-center text-primary-2 text-xl">Education</h1>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Microsoft Azure Fundamentals</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2022</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• AZ-900</h3>
                        </div>
                    </div>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Diploma of Software Development</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2013</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• ICA12345</h3>
                        </div>
                    </div>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Certificate III in Information Technology</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2012</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• ICA12345</h3>
                        </div>
                    </div>
                    <h1 className="font-bold text-center text-primary-2 text-xl pt-4">Non Accredited Training</h1>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">MERN Stack Real Time Chat App</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2023</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• <a className="underline" href="https://www.udemy.com/course/mern-stack-real-time-chat-app-with-express-react-mongodb/">Udemy</a></h3>
                        </div>
                        <p className="text-primary-3">This course taught me the fundamental concepts that go into a Chat Application and led me to create my own</p>
                    </div>
                    <div className="educationItem">
                        <div className="flex gap-2">
                            <h2 className="text-feature-1 font-bold">Online Food Store Using Angular</h2>
                            <h3 className="text-primary-3 align-middle leading-7">• 2023</h3>
                            <h3 className="text-primary-3 align-middle leading-7">• <a className="underline" href="https://www.youtube.com/playlist?list=PLpaspowtqj-dA0cRZ1yEZBv0iwdOru-SC">YouTube</a></h3>
                        </div>
                        <p className="text-primary-3">A really excellent tutorial series for Angular & MongoDB</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 pb-5">
                <div className="grid place-items-center"><h1 className="text-xl text-primary-2 font-bold w-fit bg-primary-1 py-2 px-3 rounded-md bg-opacity-95">Work History</h1></div>
                <div className="scrollableContainer">
                    {jobHistoryItems && jobHistoryItems.map((jobItem) => (
                        <div key={jobItem.id} className="bg-primary-1 h-72 p-2 mt-2 rounded-md">
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
    )
}
export default Resume