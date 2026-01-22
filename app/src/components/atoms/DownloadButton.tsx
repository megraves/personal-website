// A button to download my resume
import { BsDownload } from "react-icons/bs";

export default function DownloadButton() {

    const handleDownload = () => {
        //TODO
    }

    return (
        <div className="w-fit h-fit rounded-xl relative p-px bg-gradient-to-r from-orange-600 to-pink-600">
            <div className="w-fit p-2 rounded-xl justify-center bg-white">
                <button className="flex flex-row gap-3 items-center" value="download" onClick={() => handleDownload()}>
                    <span className="text-lg text-gray-600 font-semibold">Download Resume</span>
                    <BsDownload className=""></BsDownload>
                </button>
            </div>
        </div>
    );
}