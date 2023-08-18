import React, { useEffect } from 'react'
import logo from './logo.jpeg'
import AboutCard from './AboutCard'
import About from './About'
import Capability from './Capability'
import CapabilityII from './CapabilityII'
import CapabilityIII from './CapabilityIII'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <section id="hero" class="my-2 d-flex align-items-center text-center">
        <div class="container mb-5">
            <div class="row">
                <div class="col-12 my-5">
                    <img src={logo} height="90" alt="logo" className='my-3'/>
                    <h5 class="text-dark my-3">Welcome to, <br/>Talentship Global Advisory Forum</h5>
                    <h1 class="text-uppercase text-dark my-3">Unlocking Potential, Empowering Communities</h1>
                    <p>At Talentship Global Advisory Forum, we believe in harnessing unique talents and untapped potential for the greater good. Our non-profit startup is dedicated to empowering individuals, organizations, and communities through expert advisory services and collaboration. Join us in envisioning a future where everyone thrives.</p>
                <div>
                        <Link to='/contact' class="btn btn-brand my-3">Be In Touch</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <AboutCard/>
      <About />
      <Capability/>
      <CapabilityII/>
      <CapabilityIII/>
      <Contact />
      <Footer></Footer>
    </div>
  )
}

export default Home
