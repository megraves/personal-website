// A navigation bar at the top of the page used to navigate to different scrolling locations

import Button from "./Button";

export default function NavBar() {
    return (
        <div className="w-full flex flex-row justify-end p-5 gap-10 border-b border-white font-medium text-white bg-gradient-to-r from-orange-600 to-pink-600">
            <Button content="About" isIcon={false} route="" isLink={false}></Button>
            <Button content="Portfolio" isIcon={false} route="" isLink={false}></Button>
            <Button content="Work" isIcon={false} route="" isLink={false}></Button>
            <Button content="Skills" isIcon={false} route="" isLink={false}></Button>
            <Button content="Contact" isIcon={false} route="" isLink={false}></Button>
        </div>
    ); 
}