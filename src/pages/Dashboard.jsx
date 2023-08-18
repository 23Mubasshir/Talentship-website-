import React, { useEffect, useState } from 'react'
import Siderbar from '../components/Siderbar';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [totalMembers, setTotalMembers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  const [projects, setProjects] = useState([]);
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:7000/api/category')
      .then(response => {
        const data = response.data;
        setCategories(data);

        const totalCategoryMembers = data.reduce((acc, category) => {
          return acc + category.membersInvolvecategory.length;
        }, 0);
        setTotalMembers(totalCategoryMembers);

        const totalCatCount = data.length;
        setTotalCategories(totalCatCount);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:7000/api/project')
      .then(response => {
        const data = response.data;
        setProjects(data);

        const totalProjectCount = data.length;
        setTotalProjects(totalProjectCount);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Siderbar />
            </aside>
            <section className='col-md-9'>
                <div className='row mt-3'>
                  <h4>Dashboard</h4>
                  <div className='col-md-4 mt-3'>
                    <div className='card border-primary'>
                      <h5 className='card-header bg-warning text-white'>Total Domains</h5>
                      <div className='card-body'>
                        <h3><Link to="/category" className='text-warning'>{totalCategories}<i class="bi bi-journals text-warning"></i></Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 mt-3'>
                    <div className='card border-primary'>
                      <h5 className='card-header bg-success text-white'>Total Projects</h5>
                      <div className='card-body'>
                        <h3><Link to="/projects" className='text-success'>{totalProjects}<i class="bi bi-people-fill"></i></Link></h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 mt-3'>
                    <div className='card border-primary'>
                      <h5 className='card-header bg-info text-white'>Total Members</h5>
                      <div className='card-body'>
                        <h3><Link to="/members">{totalMembers}<i class="bi bi-stickies-fill"></i></Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>


    </div>
    </div>
  )
}

export default Dashboard
