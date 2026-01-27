import SpotlightCard from "./SpotlightCard";
import { RadialIntro } from "./RadialIntro";
import { FaGithub, FaReact, FaPython, FaJava, FaNode, FaFigma, FaDocker } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiTypescript, SiArduino, SiVite, SiMongodb, SiSupabase, SiCplusplus, SiCraftcms } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";

const techLogos = [
    <FaReact/>,
    <SiTypescript/>,
    <IoLogoJavascript/>,
    <FaPython/>,
    <FaGolang/>,
    <SiCplusplus/>,
    <FaJava/>,
    <SiVite/>,
    <FaNode />,
    <BsFiletypeSql/>,
    <SiMongodb/>,
    <BiLogoPostgresql/>,
    <SiSupabase/>,
    <FaDocker/>,
    <SiArduino/>,
    <SiCraftcms />,
    <FaGithub/>,
    <FaFigma />
];

const orbitItems = [
    {id: 0, name: "react", src:"src/assets/react.svg"},
    {id: 1, name: "react", src:"src/assets/react.svg"},
    {id: 2, name: "react", src:"src/assets/NRWlogo.png"},
    {id: 3, name: "react", src:"src/assets/MRlogo.jpg"},
    {id: 4, name: "react", src:"src/assets/flotE.jpg"}
];

// const softLogos: string[] = [

// ];


export default function SkillsSpotlight() {

    return (
        <div className="w-full flex flex-row justify-center gap-20">
            <SpotlightCard className="w-1/3 flex flex-col gap-10 border-white custom-spotlight-card bg-gradient-to-r from-orange-600 to-pink-600" spotlightColor="rgba(252, 159, 202, 0.72)">
                <div className="text-white text-2xl font-semibold">
                    TECHNICAL
                </div>
                <div className="flex flex-row flex-wrap gap-8 justify-center">
                    {techLogos.map((logo) => (
                        <div className="text-white text-5xl">
                            {logo}
                        </div>
                    ))}
                </div>
            </SpotlightCard>
            <RadialIntro orbitItems={orbitItems}></RadialIntro>
            
        </div>
    );
}