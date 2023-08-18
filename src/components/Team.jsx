import React, { useEffect, useState } from 'react'
import './card.css'
import axios from 'axios';
import { format } from 'date-fns';

const Team = () => {
  const API='http://localhost:7000/api/members'

  const [project,setproject] = useState([]);

  const fetchUsers = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length > 0) {
          setproject(data);
        }
      } catch (e) {
        console.error(e);
      }
    };   

    useEffect(() => {
      fetchUsers(API);
  },[]);

  return (
    <div>
    <div class="container py-2">
  <h2 class="font-weight-bold mb-2">Our Team</h2>
  <p class="font-italic text-muted mb-4">Every member is a piece of the puzzle. Collectively, we create a masterpiece</p>
  <div class="row pb-5 mb-4">
  {project.map((item) => {
      const {whichcategory,fname,lname,joinDate,leaveDate} = item;
      const formattedJoinDate = format(new Date(joinDate), 'MMMM dd, yyyy');
      const formattedLeaveDate = format(new Date(leaveDate), 'MMMM dd, yyyy');
      const categoryName = whichcategory ? whichcategory.categoryName : 'N/A';
      return(
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div class="meet card shadow-sm border-0 rounded mb-4">
        <div class="card-body p-0"><img src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg" alt="" class="w-100 card-img-top"/>
          <div class="p-4">
            <h5 class="mb-0">{fname} {lname}</h5>
            <p class="small text-muted">{categoryName}</p>
            
          </div>
        </div>
      </div>
    </div>
  )})}
    </div>
</div>
    </div>
  )
}

export default Team