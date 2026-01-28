import { FaGithub } from "react-icons/fa";
import Button from "./Button";

export default function Footer() {
    
    return(
        <div className="w-full flex flex-row items-center justify-between p-8 text-gray-600">
            <span className="text-sm">last modified 1/28/2026</span>
            <div className="flex flex-row">
                <span className="text-sm">made with ♥️ by megraves on</span>
                <Button content={<FaGithub/>} isLink={true} route="https://github.com/megraves/personal-website/" className="text-md"/>
            </div> 
            <span className="text-sm">© 2026 Macy Graves</span>
        </div>
    );
}