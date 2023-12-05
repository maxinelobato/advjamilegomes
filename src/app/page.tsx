import ButtonFloat from './components/ButtonFloat'
import HowWeHelp from './components/HowWeHelp'
// import Hero from './components/Hero'
import Advantages from './components/Advantages'
import HowItWorks from './components/HowItWorks'
import Faq from './components/Faq'
import Footer from './components/Footer'
import AboutJamile from './components/AboutJamile'
import HeroVideo from './components/HeroVideo'
import GoogleBusiness from './components/GoogleBusiness'
export default function Home () {
  return (
    <>
      {/* <Hero /> */}
      <HeroVideo/>
      <HowWeHelp />
      <Advantages />
      <HowItWorks />
      <AboutJamile/>
      <GoogleBusiness/>
      <Faq />
      <Footer/>
      <ButtonFloat />
    </>
  )
}
