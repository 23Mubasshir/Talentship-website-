import React, { useEffect, useState } from 'react'
import Siderbar from './Siderbar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";

const Projects = () => {

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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:7000/api/project/${id}`)
        .then(res =>{
          setproject(prevCategories => prevCategories.filter(project => project._id !== id));
          Swal.fire({
            title:'Category Deleted',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
        })
        .catch((err) => console.error(err))
      }

      useEffect(() => {
        fetchUsers(API);
    },[]);

  return (
    <div>
      <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Siderbar />
            </aside>
            <section className='col-md-9'>
            <Link to='/addProject'  className='btn btn-outline-success btn-sm my-2'>Add Project</Link>
                <div className='card'>
                    <h5 className='card-header'>All Projects</h5>
                    <div className='card-body' class="table-responsive">
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center'>Domain Name</th>
                                    <th className='text-center'>Project Name</th>
                                    <th className='text-center'>Client Name</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {project.map((item) => {
                              const { projectname, clientName, whichcategoryprojectlies } = item;
                              const categoryName = whichcategoryprojectlies ? whichcategoryprojectlies.categoryName : 'N/A';
                              return (
                                  <tr key={item._id}>
                                      <td className='text-center'>{categoryName}</td> 
                                      <td className='text-center'>{projectname}</td>
                                      <td className='text-center'>{clientName}</td>
                                      <td className='text-center'>
                                          <Link to={`/updateProject/${item._id}`} className='btn btn-secondary btn-sm ms-2 mb-2'>Edit</Link>
                                          <button className='btn btn-danger btn-sm ms-2 mb-2' onClick={(e) => handleDelete(item._id)}>Delete</button>
                                      </td>
                                  </tr>
                              );
                          })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
  )
}

export default Projects
