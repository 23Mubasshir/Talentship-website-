import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div>
            <div class="py-5 service-32">
                <div class="container">
                    <div class="row wrap-feature-32">
                        <div class="col-md-6"> <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/features/feature32/img1.jpg" class="img-fluid" width="100%" /> </div>
                        <div class="col-md-6 align-self-center">
                            <span class="badge badge-info rounded-pill px-3 py-1 font-weight-light">About Us</span>
                            <h3 class="my-3">Who We Are ?</h3>
                            <p class="my-3">
At our core, we are an organization that embraces progress and innovation. Our clients are visionaries, always pushing the boundaries, testing new ideas, and challenging the status quo. They strive for transformative change that has the power to shape everything around us. We are their partners, standing shoulder to shoulder, supporting them every step of the way.
</p><p>
<p class="mt-3">Who We Are:
At our core, we are an organization that embraces progress and innovation. Our clients are visionaries, always pushing the boundaries, testing new ideas, and challenging the status quo. They strive for transformative change that has the power to shape everything around us. We are their partners, standing shoulder to shoulder, supporting them every step of the way.
</p>
</p>
                            <Link class="btn btn-brand btn-md rounded-pill mt-3" to='/contact'><span>Contact Us</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
