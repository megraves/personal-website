import BounceCards from '../atoms/BounceCards'
import SoccerIMG from '../../assets/IMG_1817.jpg';
import StudentsIMG from '../../assets/IMG_8185.jpg';
import CaptainIMG from '../../assets/IMG_9855.jpg';
import PresentingIMG from '../../assets/IMG_8126.jpg';
import MicIMG from '../../assets/IMG_2637.jpg';


const images = [
  SoccerIMG,
  StudentsIMG,
  CaptainIMG,
  PresentingIMG,
  MicIMG
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

export default function PhotoGallery() {
    return (
        <BounceCards
        className="custom-bounceCards"
        images={images}
        containerWidth={500}
        containerHeight={250}
        animationDelay={1}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={transformStyles}
        enableHover
        />
    );
}