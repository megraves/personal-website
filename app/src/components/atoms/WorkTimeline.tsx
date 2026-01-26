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
                "Hosted educational sessions introducing high school and middle school students to robotics, electronics, programming, and soldering.",
                "Assisted students in weeklong workshop academies as they build their own drones, underwater rovers, and silicon jellyfish robots."
            ]
        },
        {
            key: 3,
            company: "MassRobotics",
            title: "Software Development Intern",
            location: "Boston, MA",
            when: "January 2025 - April 2025",
            bullets: [
                "Built a Python script to filter and present robot company locations on the MassRobotics Ecosystem Map."
            ]
            
        },
        {
            key: 2,
            company: "National Robotics Week",
            title: "Software Developer",
            location: "Boston, MA",
            when: "January 2025 - Present",
            image: "src/assets/NRWlogo.png",
            bullets: []

        }
    ];

    return (
        <div className="flex flex-row justify-center">
            <div className="text-gray-500 flex flex-col gap-5 p-2">
                {experiences.map((item) => (
                    <Timeline>
                        <TimelineItem >
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
                                                <div className="flex flex-row gap-2">
                                                    <IoIosArrowForward className="text-4xl"/>
                                                    {bullet}
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