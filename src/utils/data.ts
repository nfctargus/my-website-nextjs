type PortfolioItem = {
    id:number;
    name:string;
    imgPath:string;
    description:string;
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
        name:"Example Item 1",
        imgPath:"./lake.jpg",
        description:"A brief overview of an item.",
        publishDate:"July 2022"
    },
    {
        id:1,
        name:"Example Item 2",
        imgPath:"./grass.jpg",
        description:"An example of my thing I plan on putting here in due course.",
        publishDate:"August 2022"
    },
    {
        id:2,
        name:"Example Item 3",
        imgPath:"./desert.jpg",
        description:"It's hot outside",
        publishDate:"December 2022"
    },
    {
        id:3,
        name:"Example Item 4",
        imgPath:"./plants.jpg",
        description:"Pretty plants, wow",
        publishDate:"February 2023"
    },
]
export const jobHistoryItems:JobItem[] = [
    {
        id:0,
        title:"Newest Job",
        company:"Company Name",
        periodWorked:"Feb 2014 - Current",
        description:"Job responsibilities, etc"
    },
    {
        id:1,
        title:"Middle Job",
        company:"Company Name",
        periodWorked:"Feb 2014 - Feb 2020",
        description:"Job responsibilities, etc"
    },
    {
        id:2,
        title:"Middle Job",
        company:"Company Name",
        periodWorked:"Feb 2014 - Feb 2020",
        description:"Job responsibilities, etc"
    },
    {
        id:3,
        title:"Oldest Job",
        company:"Company Name",
        periodWorked:"Feb 2014 - Feb 2020",
        description:"Job responsibilities, etc"
    },
]