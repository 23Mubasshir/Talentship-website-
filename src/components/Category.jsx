import React, { useEffect, useState } from 'react'
import Siderbar from './Siderbar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";

const Category = () => {

    const API='http://localhost:7000/api/category'

    const [category,setcategory] = useState([]);

    const fetchUsers = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          if (data.length > 0) {
            setcategory(data);
          }
        } catch (e) {
          console.error(e);
        }
      };   

    const handleDelete = (id) => {
        axios.delete(`http://localhost:7000/api/category/${id}`)
        .then(res =>{
          setcategory(prevCategories => prevCategories.filter(category => category._id !== id));
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
            <Link to='/addCategory'  className='btn btn-outline-success btn-sm my-2'>Add Category</Link>
                <div className='card'>
                    <h5 className='card-header'>All Category</h5>
                    <div className='card-body' class="table-responsive">
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center'>Category Name</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {category.map((item) => {
                                const {categoryName} = item
                                return(
                                <tr>
                                <td className='text-center' value={item._id} >{categoryName}</td> 
                                <td className='text-center'>
                                    <Link to={`/updateCategory/${item._id}`} className='btn btn-secondary btn-sm ms-2  mb-2'>Edit</Link>
                                    <button className='btn btn-danger btn-sm ms-2 mb-2' onClick={(e) => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                            )})}

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

export default Category
