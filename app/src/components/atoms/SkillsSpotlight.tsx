import SpotlightCard from "./SpotlightCard";
import { FaGithub, FaReact, FaPython, FaJava, FaNode, FaFigma, FaDocker } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiTypescript, SiArduino, SiVite, SiMongodb, SiSupabase, SiCplusplus, SiCraftcms } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";

const techLogos = [
    {key: 0, val: <FaReact/>},
    {key: 1, val: <SiTypescript/>},
    {key: 2, val: <IoLogoJavascript/>},
    {key: 3, val: <FaPython/>},
    {key: 4, val: <FaGolang/>},
    {key: 5, val: <SiCplusplus/>},
    {key: 6, val: <FaJava/>},
    {key: 7, val: <SiVite/>},
    {key: 8, val: <FaNode />},
    {key: 9, val: <BsFiletypeSql/>},
    {key: 10, val: <SiMongodb/>},
    {key: 20, val: <BiLogoPostgresql/>},
    {key: 30, val: <SiSupabase/>},
    {key: 40, val: <FaDocker/>},
    {key: 50, val: <SiArduino/>},
    {key: 60, val: <SiCraftcms />},
    {key: 70, val: <FaGithub/>},
    {key: 80, val: <FaFigma />}
];

const softSkills = [
    {
        key: 0,
        name: "Leadership",
        examples: [
            {key: 0, val: ""},
            {key: 1, val: ""}
        ]
    }
];


export default function SkillsSpotlight() {

    return (
        <div className="w-full flex flex-row justify-center gap-20">
            <SpotlightCard className="w-1/3 flex flex-col gap-10 border-white custom-spotlight-card bg-gradient-to-r from-orange-600 to-pink-600" spotlightColor="rgba(252, 159, 202, 0.72)">
                <div className="text-white text-2xl font-semibold">
                    TECHNICAL
                </div>
                <div className="flex flex-row flex-wrap gap-8 justify-center">
                    {techLogos.map((logo) => (
                        <div key={logo.key} className="text-white text-5xl">
                            {logo.val}
                        </div>
                    ))}
                </div>
            </SpotlightCard>
            
            <div className="w-1/3 flex flex-col gap-10 border-white custom-spotlight-card bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-px">
                <SpotlightCard className="w-full h-full flex flex-col gap-10 bg-white custom-spotlight-card border-white" spotlightColor="rgba(252, 159, 202, 0.72)">
                    <span className="w-fit text-2xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text inline-block">
                        SOFT
                    </span>
                    <div className="flex flex-row flex-wrap gap-8 justify-center w-fit text-2xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text inline-block">
                        
                    </div>
                </SpotlightCard>
            </div>
            
        </div>
    );
}