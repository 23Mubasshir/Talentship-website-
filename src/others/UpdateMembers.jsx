import React, { useEffect, useState } from 'react'
import Siderbar from '../components/Siderbar'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';
import { format } from 'date-fns';

const UpdateMembers = () => {

    const {id} = useParams();

    const API ="http://localhost:7000/api/category";
    const API1 ="http://localhost:7000/api/project";
    const API2 ="http://localhost:7000/api/members";

    const [fname,setfname] = useState();
    const [lname,setlname] = useState();
    const [joinDate,setjoinDate] = useState();
    const [leaveDate,setleaveDate] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:7000/api/members/'+id)
        .then(result => {
            setfname(result.data.fname)
            setlname(result.data.lname)
            setjoinDate(result.data.joinDate)
            setleaveDate(result.data.leaveDate)
        })
        .catch(err => console.error(err))
      }, [])

      const updateForm = (e) => {
        e.preventDefault();
        axios.put('http://localhost:7000/api/members/'+id,{fname,lname,joinDate,leaveDate})
        .then(result => {
          Swal.fire({
            title:'Member Updated',
            icon:'success',
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
          navigate('/members')
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
                <h3 className='card-header'>Update Member</h3>
                <div className='card-body'>
                     <div className="mb-3">
                        <label for="title" className="form-label">Project Name</label>
                        <input value={fname} onChange={(e) => setfname(e.target.value)} type="text"  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Client Name</label>
                        <input value={lname} onChange={(e) => setlname(e.target.value)} type="text"  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Join Date</label>
                        <input value={joinDate} onChange={(e) => setjoinDate(e.target.value)} type="text"  name='title' className="form-control"/>
                    </div><div className="mb-3">
                        <label for="title" className="form-label">Leave Date</label>
                        <input value={leaveDate} onChange={(e) => setleaveDate(e.target.value)} type="text"  name='title' className="form-control"/>
                    </div>
                    <button type="button" onClick={updateForm} className="btn btn-primary">Update</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default UpdateMembers
