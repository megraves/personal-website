import Button from "../atoms/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Profile() {

    return (
        <section id="PROFILE">
        <div className={`w-full h-150 flex items-center lg:p-50 text-white bg-gradient-to-r from-orange-600 to-pink-600`}>
            <div className="flex flex-row items-center gap-5 p-5">
                <img src="src/assets/grad_headshot.jpg" className="w-2/5 aspect-square rounded-full object-cover" alt="Profile Photo" />
                <div className="flex flex-col gap-5 p-5"> 
                    <h1 className="text-2xl font-light">Hi, I'm</h1>
                    <h2 className="text-5xl lg:text-8xl">Macy Graves</h2>
                    <div className="flex flex-row gap-2 items-center">
                        <h1 className="text-lg lg:text-2xl font-light">LET'S CONNECT</h1>
                        <IoIosArrowForward className="text-xl lg:text-2xl"/>
                        <Button content={<FaLinkedin className="text-3xl lg:text-4xl"/>} isLink={true} route="https://www.linkedin.com/in/macy-graves" />
                        <Button content={<MdEmail className="text-3xl lg:text-4xl"/>} isLink={true} route="mailto:macyygraves@gmail.com" />
                        <Button content={<FaGithub className="text-3xl lg:text-4xl"/>} isLink={true} route="https://github.com/megraves" />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}