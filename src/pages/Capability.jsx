import React from 'react'
import mk from './assets/mk.gif'
import ip from './assets/ip.gif'
import mq from './assets/mq.gif'

const Capability = () => {
  return (
    <div className='mt-5'>
      <div class="text-center">
        <h1>Our Capabilities</h1>
    </div>
      <div class="container">
     <div class="row">
         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={mk}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Digital Growth, Marketing & Sales</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#maketing">Read More</button>
                     </div>
                    </div>
         </div>
         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={ip}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Implementation</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#imp">Read More</button>
                     </div>
                    </div>
         </div>
         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={mq}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">M&A (Mergers & Acquisitions)</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#ma">Read More</button>
                     </div>
                    </div>
         </div>
     </div>
 </div>






 <div class="modal fade" id="maketing" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">📈 Digital Growth, Marketing & Sales 📈</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body m-1">
      In today's fast-paced and digital-centric world, businesses need to stay ahead of the curve to reach their target audiences effectively and drive growth. Our Digital Growth, Marketing, and Sales capability empowers your business to navigate the dynamic digital landscape with confidence.<br/><br/>

We understand that a robust digital strategy is critical for success. Our team of experts collaborates closely with you to develop customized digital growth plans tailored to your specific goals and target market. From optimizing your online presence to devising data-driven marketing campaigns, we focus on driving measurable results.<br/><br/>

Our marketing expertise spans across various digital channels, including social media, search engine optimization (SEO), content marketing, email marketing, and paid advertising. We identify the right mix of channels that resonate with your audience and amplify your brand's message effectively.<br/><br/>

Additionally, our sales strategies are designed to convert leads into loyal customers. Through lead generation, customer relationship management (CRM) optimization, and sales funnel management, we help you capitalize on every opportunity to drive revenue growth.<br/><br/>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="imp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">🛠️ Implementation 🛠️</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body m-1">
      Turning visionary ideas into reality requires meticulous planning and seamless execution. Our Implementation capability ensures that your strategic plans are implemented effectively across your organization.<br/><br/>

We start by understanding your business objectives and evaluating your current resources and capabilities. This assessment helps us identify potential challenges and opportunities, enabling us to create a detailed implementation roadmap.<br/><br/>

Our experienced consultants work closely with your team to provide guidance and support throughout the implementation process. From project management to change management, we ensure that every step is carefully executed, minimizing disruption and maximizing efficiency.<br/><br/>

We believe that success lies in aligning your people, processes, and technology with the strategic goals. By integrating these elements seamlessly, we enable your organization to achieve sustainable growth and transformative change.<br/><br/>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="ma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">🤝 M&A (Mergers & Acquisitions) 🤝</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      In today's globalized and highly competitive business landscape, Mergers and Acquisitions (M&A) have become integral strategies for growth and market expansion. However, the M&A process is complex and presents unique challenges that require careful navigation.<br/><br/>

Our M&A capability is rooted in extensive industry knowledge and experience. Whether you are looking to acquire another company or merge with an existing one, we provide comprehensive support at every stage of the process.<br/><br/>

We begin by conducting thorough due diligence to assess the target company's financial health, market position, and potential synergies. Our financial experts analyze the risks and benefits, enabling you to make informed decisions.<br/><br/>

Throughout the negotiation and deal structuring phase, we act as your strategic advisors, ensuring that your interests are protected and that the transaction is structured to maximize value.<br/>

Post-merger integration is a critical aspect of M&A success. Our consultants work closely with your teams to align cultures, streamline operations, and identify opportunities for growth. Our focus is on creating a harmonious and efficient post-merger environment that drives success.<br/>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Capability
