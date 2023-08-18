import React, { useEffect, useState } from 'react'
import Siderbar from '../components/Siderbar'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateProjects = () => {
    const {id} = useParams();
    const [projectname,setprojectName] = useState();
    const [clientName,setclientName] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:7000/api/project/'+id)
        .then(result => {
          setprojectName(result.data.projectname)
          setclientName(result.data.clientName)
        })
        .catch(err => console.error(err))
      }, [])

      const updateForm = (e) => {
        e.preventDefault();
        axios.put('http://localhost:7000/api/project/'+id,{projectname,clientName})
        .then(result => {
          Swal.fire({
            title:'Project Updated',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
          navigate('/projects')
        })
        .catch(err => console.error)
      }

  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Siderbar />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h3 className='card-header'>Update Project</h3>
                <div className='card-body'>
                     <div className="mb-3">
                        <label for="title" className="form-label">Project Name</label>
                        <input value={projectname} onChange={(e) => setprojectName(e.target.value)} type="text"  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Client Name</label>
                        <input value={clientName} onChange={(e) => setclientName(e.target.value)} type="text"  name='title' className="form-control"/>
                    </div>
                    <button type="button" onClick={updateForm} className="btn btn-primary">Update</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default UpdateProjects
