import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const AllProjects = () => {
  const API='http://localhost:7000/api/project'

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
  <div class="container pt-2">
  <h2 class="font-weight-bold mb-2">Our Projects</h2>
  <p class="font-italic text-muted mb-4">Every project is a journey, and our team is the compass that guides it to success</p>
  </div>
<section id="gallery">
  <div class="container">
    <div class="row">
    {project.map((item) => {
      const { projectname } = item;
      return (
    <div class="meet col-lg-4 mb-4">
          <Link to={`/projectDetail/${item._id}`} style={{textDecoration:'none'}} className='text-dark'>
    <div class="card">
      <img src="https://images.ctfassets.net/gg4ddi543f5b/a1SpK5iekgPkS9a5u7AK1/9f85516296960fb97dac7161b6d37be4/website-project-management-blog.png" alt="" class="card-img-top"/>
      <div class="card-body text-center">
        <h5 class="card-title">{projectname}</h5>
      </div>
     </div>
     </Link>
    </div>
    );
  })}
  </div>
</div>
</section>
    </div>
  )
}

export default AllProjects
