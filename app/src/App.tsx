import NavBar from "./components/atoms/NavBar";
import Profile from "./components/atoms/Profile";
import SectionCard from "./components/atoms/SectionCard";
import DownloadButton from "./components/atoms/DownloadButton";
import PortfolioSlider from "./components/atoms/PortfolioSlider";
import WorkTimeline from "./components/atoms/WorkTimeline";

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Profile></Profile>
      <SectionCard title="ABOUT">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2 gap-5">
            <span className="text-2xl text-gray-600">My name is Macy Graves</span>
            <span className="text-gray-500"> I am a graduate student with experience in building React web apps, database and system architecture, and agile software engineering techniques. I have some experience with low-level programming with Golang, C/C++, and Assembly through project-based learning. I am a former Division 1 student-athlete currently pursuing my MS in Computer Science online with UMass Amherst.</span>
            <DownloadButton fileName="src/assets/MacyGravesResume.pdf"></DownloadButton>
          </div>
        </div>
      </SectionCard>
      <SectionCard title="PORTFOLIO">
        <PortfolioSlider></PortfolioSlider>
      </SectionCard>
      <SectionCard title="WORK">
        <WorkTimeline></WorkTimeline>
      </SectionCard>
      <SectionCard title="SKILLS">

      </SectionCard>
      <SectionCard title="CONTACT">
        Message goes into database or emailed
      </SectionCard>
    </div>
  )
}

export default App
