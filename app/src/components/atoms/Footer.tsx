import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
    
    return(
        <div className="w-full flex flex-col items-center p-10 text-gray-600">
            <div className="flex flex-row justify-center">
                <span className="text-sm">made with ♥️ by megraves on</span>
                <Button content={<FaGithub/>} isLink={true} route="https://github.com/megraves/personal-website/" className="text-md"/>
            </div> 
            <span className="text-sm">last modified 1/28/2026</span>
            <span className="text-sm">© 2026</span>
        </div>
    );
}