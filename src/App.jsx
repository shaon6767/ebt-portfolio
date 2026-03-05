import Banner from "./components/Banner"
import Blog from "./components/Blog"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import MySkill from "./components/MySkill"
import Navbar from "./components/Navbar"
import Plans from "./components/Plans"
import Portfolio from "./components/Portfolio"
import Projects from "./components/Projects"
import Service from "./components/Service"
import Skills from "./components/Skills"
import Text from "./components/Text"

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Text/>
    <Experience/>
    <Projects/>
    <Service/>
    <Skills/>
    <Education/>
    <Portfolio/>
    <MySkill/>
    <Plans/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App