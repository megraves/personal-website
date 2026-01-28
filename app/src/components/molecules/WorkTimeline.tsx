import { IoIosArrowForward } from "react-icons/io";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from "@mui/lab";


export default function WorkTimeline() {

    const experiences = [
        {
            key: 1,
            company: "MassRobotics",
            title: "STEM Intern",
            location: "Boston, MA",
            when: "May 2024 - July 2024",
            image: "src/assets/MRlogo.jpg", //TODO: add image of me presenting to students
            bullets: [
                {key: 0, val: "Hosted educational sessions introducing high school and middle school students to robotics, electronics, programming, and soldering."},
                {key: 1, val: "Assisted students in weeklong workshop academies as they build their own drones, underwater rovers, and silicon jellyfish robots."}
            ]
        },
        {
            key: 3,
            company: "MassRobotics",
            title: "Software Development Intern",
            location: "Boston, MA",
            when: "January 2025 - April 2025",
            bullets: [
                {key: 0, val: "Built a Python script to filter and present robot company locations on the MassRobotics Ecosystem Map."}
            ]
            
        },
        {
            key: 2,
            company: "National Robotics Week",
            title: "Software Developer",
            location: "Boston, MA",
            when: "January 2025 - Present",
            image: "src/assets/NRWlogo.png",
            bullets: [
                {key: 0, val: "Overhauled and created content for the National Robotics Week 2025 and 2026 website."},
                {key: 1, val: "Debugged search filters and component cards in PHP and Twig to accurately show new content."},
                {key: 2, val: "Deployed changes using Craft CMS, SFTP and SSH."}
            ]

        }
    ];

    return (
        <div className="flex flex-row justify-center">
            <div className="text-gray-500 flex flex-col gap-5 p-2">
                {experiences.map((item) => (
                    <Timeline key={item.key}>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <div className="flex flex-row justify-end pr-5">
                                    { item.image ? <img src={item.image} alt="Company Logo" className="w-2/3 object-scale-down" /> : <></>}
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator >
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <h1 className="text-gray-600 text-xl">{item.title}</h1>
                                        <span className="italic">{item.when}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                            {item.bullets.map((bullet) => (
                                                <div key={bullet.key} className="flex flex-row gap-2">
                                                    <IoIosArrowForward size={18} className="shrink-0 mt-1"/>
                                                    {bullet.val}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline> 
                ))}
            </div>
        </div>
    );
}