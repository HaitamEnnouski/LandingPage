import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Companies from "./components/Companies"
import Service from "./components/Service"
import ChooseUs from "./components/ChooseUs"
import Metrics from "./components/Metrics"
import Testimonial from "./components/Testimonial"
import Pricing from "./components/Pricing"
import Quotes from "./components/Quotes"
import Footer from "./components/Footer"



const App = () => (
  <div  className="overflow-hidden">
    <Nav></Nav>
    <div>
      <Hero></Hero>
      <Companies></Companies>
      <Service></Service>
      <ChooseUs ></ChooseUs>
      <Metrics></Metrics>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Quotes></Quotes>
      <Footer></Footer>
    </div>
  </div>
  
)
export default App