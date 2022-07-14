import Navbar from './Navbar'
import Hero from './Hero'
// import Speakers from '../../Components/Speakers/Speakers'
// import Team from '../../Components/Teams/Teams'
import Footer from '../../Components/Footer/Footer'
import FAQ from '../../Components/FAQ/FAQ'
import Sponsors from '../../Components/Sponsors/Sponsors'
import About from '../../Components/About/About'
import Coc from '../../Components/Coc/Coc'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Speakers /> */}
      {/* <Team /> */}
      <Coc />
      <FAQ />
      <Sponsors />
      <Footer />
    </>
  )
}

export default Dashboard