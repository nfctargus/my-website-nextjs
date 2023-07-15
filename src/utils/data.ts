export type PortfolioItem = {
    id:number;
    name:string;
    imgPath:string;
    publishDate:string;
    url?:string;
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
        imgPath:"./shard.png",
        publishDate:"Dec 2022",
        url:'obsidian'
    },
    {
        id:1,
        name:"Book Collections",
        imgPath:"./medialibrary.png",
        publishDate:"Feb 2023",
        url:'books'
    },
    {
        id:2,
        name:"Skol",
        imgPath:"./skol.png",
        publishDate:"Jun 2023",
        url:'chats'
    },
    {
        id:3,
        name:"Portfolio Website",
        imgPath:"./thiswebsite.png",
        publishDate:"Jul 2023",
        url:'portfolio'
    },
/*     {
        id:3,
        name:"Coming Soon",
        imgPath:"./comingsoon.png",
        publishDate:"2023",
        url:'upcoming',
    }, */
]
export const jobHistoryItems:JobItem[] = [
    {
        id:0,
        title:"Associate Systems Engineer",
        company:"Kinetic IT",
        periodWorked:"Jun 2022 - Current",
        description:"I started this role working in an Operations Centre team, my role included Data Center support, server maintenance, as well as reviewing and creating scripts in PowerShell. In early 2023 I was given an opportunity to move into a Service Optimisation team with a focus on creating scripts, automating tasks for other teams and improving/revising existing scripts."
    },
    {
        id:1,
        title:"Desktops Technician",
        company:"Kinetic IT",
        periodWorked:"Dec 2022 - Jun 2022",
        description:"I provided onsite and remote support for users to troubleshoot and rectify computer hardware & software issues. During my time in Desktops, I built scripts to automate tasks which sparked my interest in coding again, leading me to build 'Improved Obsidian', my Minecraft mod."
    },
    {
        id:2,
        title:"Service Desk Technician",
        company:"Kinetic IT",
        periodWorked:"Feb 2020 - Dec 2022",
        description:"As a Service Desk Technician I provided over the phone technical support to upwards of 50 people a day. After only being in the role and the industry for 6 months I was training new team members, resolving complex tickets and managing high priority incidents as needed. I got to interact with a lot of people and built some great relationships in this role."
    },
    {
        id:3,
        title:"Service Consultant",
        company:"Mandurah Mazda",
        periodWorked:"Feb 2014 - Feb 2020",
        description:"After finishing my Diploma at the end of 2013, I was unsuccessful in finding a developer role and ended up getting a job at Mandurah Mazda. I'm a big car guy, so I was really happy for quite some time. I built an amazing relationship with my customers at Mazda and was always commended on my outstanding service. I even occassionaly got my hands dirty in the workshop which was fun! However, coding was always in the back of my mind, so with a push from friends and family I got an entry level job in IT with the hope of one day becoming a Software Developer."
    },
]
