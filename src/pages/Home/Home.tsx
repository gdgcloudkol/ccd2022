import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Speakers from '../../Components/Speakers/Speakers'
import Team from '../../Components/Teams/Teams'
import Footer from '../../Components/Footer/Footer'
import FAQ from '../../Components/FAQ/FAQ'
import Sponsors from '../../Components/Sponsors/Sponsors'
import About from '../../Components/About/About'
import Coc from '../../Components/Coc/Coc'
import Partners from '../../Components/Partners/Partners'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Coc />
      <FAQ />
      <Sponsors />
      <Partners />
      <Team />
      <Footer />
    </>
  )
}

export default Home
