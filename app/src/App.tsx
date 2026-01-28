import NavBar from "./components/atoms/NavBar";
import Profile from "./components/molecules/Profile";
import SectionCard from "./components/atoms/SectionCard";
import DownloadButton from "./components/atoms/DownloadButton";
import PortfolioSlider from "./components/molecules/PortfolioSlider";
import WorkTimeline from "./components/molecules/WorkTimeline";
import PhotoGallery from "./components/molecules/PhotoGallery";
import SkillsSpotlight from "./components/molecules/SkillsSpotlight";
import ContactForm from "./components/molecules/ContactForm";
import Footer from "./components/atoms/Footer";
import Resume from "./assets/MacyGravesResume.pdf";

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Profile></Profile>
      <SectionCard title="ABOUT">
        <div className="w-full flex flex-row justify-between flex-wrap pr-30">
          <div className="flex flex-col w-1/2 gap-5">
            <span className="text-2xl text-gray-600">My name is Macy Graves</span>
            <span className="text-gray-500"> I am a graduate student with experience in building React web apps, database and system architecture, and agile software engineering techniques. I have experience programming with Javascript, Typescript, Python, Java, and Golang. I have some experience in lower-level programming with C/C++ and Assembly through project-based learning. I am a former Division 1 student-athlete currently pursuing my MS in Computer Science online with UMass Amherst.</span>
            <DownloadButton fileName={Resume}></DownloadButton>
          </div>
          <PhotoGallery></PhotoGallery>
        </div>
      </SectionCard>
      <SectionCard title="PORTFOLIO">
        <PortfolioSlider/>
      </SectionCard>
      <SectionCard title="WORK">
        <WorkTimeline/>
      </SectionCard>
      <SectionCard title="SKILLS">
        <SkillsSpotlight/>
      </SectionCard>
      <SectionCard title="CONTACT">
        <ContactForm></ContactForm>
      </SectionCard>
      <Footer/>
    </div>
  )
}

export default App
