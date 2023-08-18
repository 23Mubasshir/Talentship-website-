import React from 'react'
import ss from './assets/ss.gif'
import sy from './assets/sy.gif'
import tr from './assets/tr.gif'

const CapabilityIII = () => {
  return (
    <div>
      <div>
      <div>
      <div class="container mb-5">
     <div class="row">
         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={ss}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Strategy & Corporate Finance</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#ss">Read More</button>
                     </div>
                    </div>
         </div>

         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={sy}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Sustainability</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#sy">Read More</button>
                     </div>
                    </div>
         </div>

         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={tr}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Transform</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#tr">Read More</button>
                     </div>
                    </div>
         </div>
     </div>
 </div>






 <div class="modal fade" id="ss" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">💲 Strategy & Corporate Finance 💲</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body m-1">
      Strategic decision-making is at the core of sustainable growth and financial success. Our Strategy & Corporate Finance capability is designed to help you make sound strategic choices and optimize your financial performance.<br/><br/>

We begin by gaining a deep understanding of your organization's vision, mission, and objectives. This knowledge forms the foundation of our strategy development process, ensuring alignment with your long-term goals.<br/><br/>

Our team of experts conducts thorough market analysis and competitive intelligence to identify growth opportunities and potential threats. This enables us to develop actionable strategies that create a competitive advantage.<br/><br/>

Financial management is a critical aspect of our capability. We work with your organization to optimize capital allocation, manage cash flow, and enhance profitability. Our expertise in financial modeling and forecasting empowers you to make data-driven decisions.<br/><br/>

Our approach to strategy and corporate finance is dynamic, and we continuously monitor market trends and industry dynamics. This allows us to adapt strategies in response to changing circumstances, ensuring that your organization remains agile and resilient.<br/><br/>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="sy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">🔋 Sustainability 🔋</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body m-1">
      The pursuit of sustainability has become a strategic imperative for businesses worldwide. Our Sustainability capability is focused on helping your organization embrace environmental and social responsibility to drive positive impact.<br/><br/>

We believe that sustainability goes beyond compliance; it is about integrating responsible practices into every aspect of your business. Our team collaborates with your organization to identify opportunities for sustainability improvements across your value chain.<br/><br/>

Environmental sustainability is a key focus of our capability. From energy efficiency to waste reduction, we help you adopt eco-friendly practices that minimize your carbon footprint and conserve natural resources.<br/><br/>

Social responsibility is equally important. We work with your organization to address social challenges, promote community engagement, and foster ethical practices that positively impact society.<br/><br/>

Our Sustainability capability extends to supply chain management, where we help you identify sustainable sourcing opportunities and build strong partnerships with suppliers who share your commitment to responsible practices.<br/><br/>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="tr" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">🔝 Transformation 🔝</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      In an ever-evolving business landscape, organizations must embrace change and embrace transformation to remain competitive. Our Transformation capability is designed to help you navigate transformative journeys that drive long-term success.<br/><br/>

We start by understanding your organization's goals and challenges. This knowledge informs our approach to change management, ensuring that the transformation process aligns with your strategic vision.<br/><br/>

      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default CapabilityIII
