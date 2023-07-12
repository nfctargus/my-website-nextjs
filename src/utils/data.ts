export type PortfolioItem = {
    id:number;
    name:string;
    imgPath:string;
    highlights:string[];
    details:string;
    publishDate:string;
}
type JobItem = {
    id:number;
    title:string;
    company:string;
    periodWorked:string;
    description:string;
}
export const portfolioItems:PortfolioItem[] = [
    {
        id:0,
        name:"Improved Obsidian",
        imgPath:"./lake.jpg",
        highlights:["Java","Modding","Gaming"],
        details:"Improved Obsidian is a minecraft mod that I made in Java which has over 1000 downloads. I developed it to suit 2 different modding platforms and also actively update it to keep in line with the most up to date versions of Minecraft.",
        publishDate:"December 2022"
    },
    {
        id:1,
        name:"Book Collections",
        imgPath:"./grass.jpg",
        highlights:["Angular","APIs","MongoDB"],
        details:"A tool to keep track of your book collection. Data is stored in MongoDB and is fetched from the Google Books API. I wrote this project in Angular and NodeJS. Working with an API was completely new to me and this was a great introduction to working with APIs",
        publishDate:"Feb 2023"
    },
    {
        id:2,
        name:"Skal",
        imgPath:"./desert.jpg",
        highlights:["It's hot outside"],
        details:"A detailed overview containing information about the project, things I learned, the ups and downs and some highlights",
        publishDate:"Jul 2023"
    },
    {
        id:3,
        name:"Portfolio Website",
        imgPath:"./bridge.jpg",
        highlights:["Pretty plants, wow"],
        details:"I made this website using NextJS, and it is actually my second iteration of my website. The source code to this as well as my first iteration made in React can be found on my GitHub or linked below!",
        publishDate:"Aug 2023"
    },
]
export const jobHistoryItems:JobItem[] = [
    {
        id:0,
        title:"Associate Systems Engineer",
        company:"Kinetic IT",
        periodWorked:"Jun 2022 - Current",
        description:"I started this role working in an Operations Centre team, my role included Data Center support, server maintenance, as well as reviewing and creating scripts in PowerShell. In early 2023 I was given an opportunity to move into a Service Optimisation team with a focus on creating scripts, automating tasks for other teams and improving revising existing scripts."
    },
    {
        id:1,
        title:"Desktops Technician",
        company:"Kinetic IT",
        periodWorked:"Dec 2022 - Jun 2022",
        description:"I provided onsite and remote support for users to troubleshoot and rectify computer hardware & software issues. During my time in Desktops, I built scripts to automate tasks which sparked my interest in coding again, leading me to build Improved Obsidian - my Minecraft mod."
    },
    {
        id:2,
        title:"Service Desk Technician",
        company:"Company Name",
        periodWorked:"Feb 2020 - Dec 2022",
        description:"As a Service Desk Technician I provided over the phone technical support to upwards of 50 people a day. After only being in the role and the industry for a 6 months I was training new team members, resolving complex tickets and managed high priority incidents as needed. I got to interact with a lot of people and built some great relationships in this role."
    },
    {
        id:3,
        title:"Service Consultant",
        company:"Mandurah Mazda",
        periodWorked:"Feb 2014 - Feb 2020",
        description:"After finishing my Diploma at the end of 2013, I was unsuccessful in finding a developer role and ended up getting a job at Mandurah Mazda. I'm a big car guy, so I was really happy for quite some time. Coding was always in the back of my mind, so with a push from friends and family I got an entry level job in IT with the hope of one day becoming a Software Devloper. I built an amazing relationship with my customers at Mazda and was always commended on my outstanding service. I even occassionaly got my hands dirty in the workshop which was fun!"
    },
]