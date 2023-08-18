import React from 'react'
import os from './assets/os.gif'
import po from './assets/po.gif'
import rr from './assets/rr.gif'

const CapabilityII = () => {
  return (
    <div>
      <div>
      <div class="container">
     <div class="row">
         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={os}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Operations</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#op">Read More</button>
                     </div>
                    </div>
         </div>

         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={po}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">People & Organizational Performance</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#po">Read More</button>
                     </div>
                    </div>
         </div>

         <div class="col-md-4 my-4">
             <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image picture" src={rr}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">Risk & Resilience</h3>
                         <button type="button" class="btn btn-outline-dark text-white" data-bs-toggle="modal" data-bs-target="#rr">Read More</button>
                     </div>
                    </div>
         </div>
     </div>
 </div>






 <div class="modal fade" id="op" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">👨‍💻 Operations 👩‍💻</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body m-1">
      In today's rapidly changing business landscape, operational efficiency is vital for sustainable success. Our Operations capability is designed to help you streamline processes, improve productivity, and optimize resource utilization.<br/><br/>

We begin by conducting a comprehensive assessment of your current operations to identify areas for improvement. Our team leverages data-driven analysis to pinpoint bottlenecks, inefficiencies, and opportunities for optimization.<br/><br/>

With a deep understanding of your industry and best practices, we develop tailored strategies to enhance operational performance. This may involve process reengineering, technology adoption, and workforce training to ensure seamless implementation.<br/><br/>

Continuous improvement is a core principle of our approach. We work with your teams to foster a culture of innovation and efficiency, empowering them to identify and implement ongoing operational enhancements.<br/><br/>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="po" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">👥 People & Organizational Performance 👥</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body m-1">
      Your people are your most valuable asset, and their performance directly impacts your organization's success. Our People & Organizational Performance capability is dedicated to unlocking the full potential of your workforce.<br/><br/>

We believe that a high-performance culture begins with strong leadership. Our team of organizational development experts works with your leaders to strengthen their capabilities, enabling them to inspire and guide their teams effectively.<br/><br/>

Talent development is a key focus of our capability. We design comprehensive training programs that address skill gaps and empower your employees to excel in their roles.<br/><br/>

Employee engagement is another critical factor in organizational performance. Our approach to engagement is holistic, encompassing factors such as work-life balance, career development, and recognition.<br/><br/>

We understand that diversity and inclusion are essential for driving innovation and creativity. Our capability supports you in fostering a diverse and inclusive workplace that celebrates individuality and promotes collaboration.<br/><br/>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="rr" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">💹 Risk & Resilience 💹</h5>
        <button type="button" class="btn-close mx-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      In a rapidly changing world, organizations face an increasing array of risks that can impact their operations and reputation. Our Risk & Resilience capability is designed to help you identify, assess, and manage these risks effectively.<br/><br/>

We start by conducting a comprehensive risk assessment, examining both internal and external factors that may pose threats to your organization. Our experts analyze data and trends to identify emerging risks and potential vulnerabilities.<br/><br/>

Based on the risk assessment, we develop tailored risk management strategies and contingency plans. Our goal is to minimize potential disruptions and equip your organization with the resilience to bounce back from adverse events.<br/><br/>

We believe in proactive risk management, and our team works closely with your organization to implement risk mitigation strategies. By integrating risk management into your decision-making processes, we help you make informed choices that protect your organization's interests.<br/><br/>

      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default CapabilityII
