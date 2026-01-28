import BounceCards from '../atoms/BounceCards'

const images = [
  "src/assets/IMG_1817.jpg",
  "src/assets/IMG_8185.jpg",
  "src/assets/IMG_9855.jpg",
  "src/assets/IMG_8126.jpg",
  "src/assets/IMG_2637.jpg"
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