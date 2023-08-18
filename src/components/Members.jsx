import React, { useEffect, useState } from 'react'
import Siderbar from './Siderbar'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";
import { format } from 'date-fns';

const Members = () => {

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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:7000/api/members/${id}`)
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
            <Link to='/addMember'  className='btn btn-outline-success btn-sm my-2'>Add Member</Link>
                <div className='card'>
                    <h5 className='card-header'>All Members</h5>
                    <div className='card-body' class="table-responsive">
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th className='text-center'>Domain</th>
                                    <th className='text-center'>Name</th>
                                    <th className='text-center'>Join Date</th>
                                    <th className='text-center'>Leave Date</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {project.map((item) => {
                                const {whichcategory,fname,lname,joinDate,leaveDate} = item
                                const formattedJoinDate = format(new Date(joinDate), 'MMMM dd, yyyy');
                                const formattedLeaveDate = format(new Date(leaveDate), 'MMMM dd, yyyy');
                                const categoryName = whichcategory ? whichcategory.categoryName : 'N/A';
                                
                                return(
                                <tr>
                                <td className='text-center' value={item._id} >{categoryName}</td> 
                                <td className='text-center' value={item._id} >{fname} {lname}</td> 
                                <td className='text-center' value={item._id} >{formattedJoinDate}</td> 
                                <td className='text-center' value={item._id} >{formattedLeaveDate}</td> 
                                <td className='text-center'>
                                    <Link to={`/updateMember/${item._id}`} className='btn btn-secondary btn-sm ms-2  mb-2'>Edit</Link>
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

export default Members
