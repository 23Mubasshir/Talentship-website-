import React, { useEffect, useState } from 'react'
import Siderbar from '../components/Siderbar'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddProjects = () => {

  const API ="http://localhost:7000/api/category";
  const API1='http://localhost:7000/api/members'

  const [cat,setcat] = useState([]);
  const [whichcategoryprojectlies,setwhichcategoryprojectlies] = useState('');

  const [projectname,setProject] = useState("");
  const [clientName,setClient] = useState("");
  const navigate = useNavigate();

  const fetchData = async (url1) => {
    try{

      const res1 = await fetch(url1);
      const data1 = await res1.json();
      if(data1.length > 0){
        setcat(data1);
      }
    }catch(e){
      console.error(e);
    }
}

  const formSubmit=(e)=>{
    e.preventDefault()
    const projectData={whichcategoryprojectlies,projectname,clientName};
    fetch('http://localhost:7000/api/project',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(projectData)
    }).then((res) => {
        Swal.fire({
            title:'Project Added',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
        navigate('/projects')
    }).catch((err)=>{
      console.log(err)
    })
  };

  useEffect(() => {
    fetchData(API)
  },[]);

  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Siderbar />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h3 className='card-header'>Add Project</h3>
                <div className='card-body'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label py-1">Project Domain</label>
                        <select  value={whichcategoryprojectlies} onChange={e => {setwhichcategoryprojectlies(e.target.value)}} className="form-select"  aria-label="Default select example">
                        <option selected value = "">Select Member Domain</option>
                        { cat.map((item,index) => { 
                        return(
                            <option key={index} value={item._id}>
                                {item.categoryName}
                            </option>
                        )
                         })}   
                        </select>
                    </div>
                     <div className="mb-3">
                        <label for="title" className="form-label">Project Name</label>
                        <input type="text" value={projectname} onChange={(e) => setProject(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Client Name</label>
                        <input type="text" value={clientName} onChange={(e) => setClient(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default AddProjects
