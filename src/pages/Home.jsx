import BlogSec from "../components/homeSec/BlogSec"
import Cards from "../components/homeSec/Cards"
import GetAQuote from "../components/homeSec/GetAQuote"
import Hero from "../components/homeSec/Hero"
import HowWeWork from "../components/homeSec/HowWeWork"
import ServicesSec from "../components/homeSec/ServicesSec"
import Status from "../components/homeSec/Status"
import WhoWeAre from "../components/homeSec/WhoWeAre"
import Cta from "../components/sections/Cta"
import HappyCustomers from "../components/sections/HappyCustomers"
import TeamSec from "../components/sections/TeamSec"

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <WhoWeAre />
      <Status />
      <ServicesSec />
      <HowWeWork />
      <HappyCustomers />
      <Cta />
      <BlogSec />
      <GetAQuote />
      <TeamSec />
    </>
  )
}

export default Home