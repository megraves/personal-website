import { Carousel } from 'primereact/carousel';
import PortfolioCard from "./PortfolioCard";
import Button from "./Button";
import { FaGithub } from 'react-icons/fa';
import { IoMdOpen } from "react-icons/io";

export default function PortfolioSlider() {
    const projects = [
        <PortfolioCard
            title="Campus Quest Web Application"
            description="Using React, Vite, Tailwind, and Supabase, we created a web application to encourage college students to attend campus events through a gamified treasure hunt. Students can see a map of campus events and attend them to collect various treasures. This was created as a semester project for COMPSCI 520 Theory & Practice of Software Engineering."
            image="src/assets/campusQuest.png"
            content={
                <div className='flex flex-row gap-5'>
                    <Button content={<FaGithub className="text-4xl"/>} isLink={true} route="https://github.com/megraves/cs520" className="text-3xl"/>
                </div>
            }
        />,
        <PortfolioCard 
            title="RISC-V-like ISA Simulator" 
            description="Using Golang, we designed an simulated a general-purpose instruction set architecture inspired by the RISC-V architecture with operations for integers. We simulated our design using Golang and the BubbleTea library to create a TUI. Its performance was analyzed on three different cache configurations over two benchmarks. This was created as a group project for COMPSCI 535 Computer Architecture at UMass Amherst." 
            image="src/assets/ISAProject.png" 
            content={
                <div className='flex flex-row gap-5'>
                    <Button content={<FaGithub className="text-4xl"/>} isLink={true} route="https://github.com/leon332157/risc-y-8" className="text-3xl"/>
                    <Button content={<IoMdOpen className="text-4xl" />} isLink={true} route="https://docs.google.com/document/d/1ZFalnY6I0NLIUkEPmOWCo4ulSufR1E7AH0zdvXMQF-0/edit?usp=sharing" />
                </div>
            }
        />,
        <PortfolioCard
            title="Malware Detection with ML"
            description="Simulated malware in a large set of benign PDF files to then train and test a simple machine learning model to detect common malware patterns. The model was built using Scikit-learn in Python. Its performance was compared to a Yara scan using the yara-python library."
            image="src/assets/MLKaggle.png"
            content={
                <div className='flex flex-row gap-5'>
                    <Button content={<IoMdOpen className="text-4xl" />} isLink={true} route="https://docs.google.com/presentation/d/1BVeOGvFjlfyIVD5Y3tHpO_4xpcWG47_0mZTIpuRNB1o/edit?usp=sharing" />
                </div>
            }
        />,
        <PortfolioCard
            title="HireMap Web Application"
            description="HireMap is a web-based application designed to help job seekers manage their job applications efficiently. It provides a centralized platform to keep users organized and prepared throughout the job search journey. It was built from scratch using HTML, CSS, DOM logic, and IndexedDB with a Dockerized microservice-based architecture as a semester-long group project for COMPSCI 326 Web Development at UMass Amherst."
            image="src/assets/hireMap.jpg"
            content={
                <div className='flex flex-row gap-5'>
                    <Button content={<FaGithub className="text-4xl"/>} isLink={true} route="https://github.com/edwintran235/326-team9" className="text-3xl"/>
                </div>
            }
        />,
        <PortfolioCard
            title="flotE React Web Application"
            description="flotE is a web application for timekeeping sailing regattas, storing, and viewing the results. It was built with React, Node.js, and MongoDB using RESTful API techniques. This was a semester-long group project for COMPSCI 320 Software Engineering at UMass Amherst."
            image="src/assets/flotE.jpg"
            content={
                <div className="flex flex-row gap-5">
                    <Button content={<FaGithub className="text-4xl"/>} isLink={true} route="https://github.com/CS320-Group-1/CS320-Group1" className="text-3xl"/>
                </div>
            }
        />,
        <PortfolioCard 
            title="Arduino RNG Slot Machine" 
            description="Experimented generating random numbers with an Arduino Nano Sense 33 BLE and various Adafruit I/O devices including a microphone, speaker, amplifier, and servo motors. The generated numbers resulted in random spins for a physical slot machine with a fun sound experience. This was a semester-long project for COMPSCI 335 How Computers Work at UMass Amherst."
            image="src/assets/slotMachine.jpg" 
            content=""
        />
    ];

    const template = (v: React.ReactNode) => {
        return (
            <div className="flex flex-row h-full justify-center items-center p-2">
                {v}
            </div>
        );
    }

    return (
        <div className="pr-carousel">
            <Carousel 
                value={projects} 
                itemTemplate={template} 
                className="p-5" 
                numVisible={1} 
                autoplayInterval={0} 
                showIndicators 
                circular>
            </Carousel>
        </div>
    );
}