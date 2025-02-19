import AboutSection from '../components/AboutSection'
import BrowseProperties from '../components/BrowseProperties'
import ExploreFeatures from '../components/ExploreFeatures'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PropertiesByCities from '../components/PropertiesByCities'
import PropertiesSection from '../components/PropertiesSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreFeatures />
      <PropertiesSection />
      <AboutSection />
      <BrowseProperties />
      {/* <PropertiesByCities /> */}
      <Footer />
    </>
  )
}
