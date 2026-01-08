import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Journey from "./components/Journey"
import Prep from "./components/Prep"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
// import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tech />
      <Journey />
      <Prep />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
