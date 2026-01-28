// A navigation bar at the top of the page used to navigate to different scrolling locations
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function NavBar() {
    return (
        <div className="sticky top-0 z-50 w-full flex flex-row justify-between p-5 border-b border-white font-medium text-white bg-gradient-to-r from-orange-600 to-pink-600">
            <div className="aspect-square rounded object-fit h-6">
                <AnchorLink href="#PROFILE" offset={100}>
                    <img src="src/assets/MGlogo.png"></img>
                </AnchorLink>
            </div>
            <div className="flex flex-row gap-10">
                <AnchorLink href="#ABOUT" offset={50}>ABOUT</AnchorLink>
                <AnchorLink href="#PORTFOLIO" offset={50}>PORTFOLIO</AnchorLink>
                <AnchorLink href="#WORK" offset={50}>WORK</AnchorLink>
                <AnchorLink href="#SKILLS" offset={50}>SKILLS</AnchorLink>
                <AnchorLink href="#CONTACT" offset={50}>CONTACT</AnchorLink>
            </div>
        </div>
    ); 
}