import React, { useState } from 'react'
import Siderbar from '../components/Siderbar'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [categoryName,setcategoryName] = useState("");
  const navigate = useNavigate();

  const formSubmit=(e)=>{
    e.preventDefault()
    const categorytData={categoryName};

    fetch('http://localhost:7000/api/category',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(categorytData)
    }).then((res) => {
        Swal.fire({
            title:'Category Added',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
        navigate('/category')
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Siderbar />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h3 className='card-header'>Add Category</h3>
                <div className='card-body'>
                     <div className="mb-3">
                        <label for="title" className="form-label">Category Name</label>
                        <input type="text" value={categoryName} onChange={(e) => setcategoryName(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default AddCategory
