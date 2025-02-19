import AboutSection from '../components/AboutSection'
import ExploreFeatures from '../components/ExploreFeatures'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PropertiesSection from '../components/PropertiesSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreFeatures />
      <PropertiesSection />
      <AboutSection />
      <Footer />
    </>
  )
}
