// A button to download my resume
import { BsDownload } from "react-icons/bs";

type Props = {
    fileName: string
}

export default function DownloadButton({fileName}: Props) {

    return (
        <div className="w-fit h-fit rounded-xl relative p-px bg-gradient-to-r from-orange-600 to-pink-600">
            <div className="w-fit p-2 rounded-xl justify-center bg-white">
                <a href={fileName} download="MacyGravesResume.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3 items-center">
                    <span className="text-lg text-gray-600 font-medium">Download Resume</span>
                    <BsDownload className=""></BsDownload>
                </a>
            </div>
        </div>
    );
}