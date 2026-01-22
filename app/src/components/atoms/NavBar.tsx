// A navigation bar at the top of the page used to navigate to different scrolling locations

import Button from "./Button";

export default function NavBar() {
    return (
        <div className="sticky top-0 z-50 w-full flex flex-row justify-end p-5 gap-10 border-b border-white font-medium text-white bg-gradient-to-r from-orange-600 to-pink-600">
            <Button content="ABOUT" route="" isLink={false}></Button>
            <Button content="PORTFOLIO" route="" isLink={false}></Button>
            <Button content="WORK" route="" isLink={false}></Button>
            <Button content="SKILLS" route="" isLink={false}></Button>
            <Button content="CONTACT" route="" isLink={false}></Button>
        </div>
    ); 
}