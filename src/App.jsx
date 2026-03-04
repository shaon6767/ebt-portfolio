import Banner from "./components/Banner"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Plans from "./components/Plans"
import Portfolio from "./components/Portfolio"
import Projects from "./components/Projects"
import Service from "./components/Service"
import Skills from "./components/Skills"

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Experience/>
    <Projects/>
    <Service/>
    <Skills/>
    <Education/>
    <Portfolio/>
    <Plans/>
    </>
  )
}

export default App