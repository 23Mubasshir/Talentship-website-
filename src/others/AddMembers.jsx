import React, { useEffect, useState } from 'react'
import Siderbar from '../components/Siderbar'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddMembers = () => {
    const API ="http://localhost:7000/api/category";
    const API1 ="http://localhost:7000/api/project";

  const [cat,setcat] = useState([]);
  const [whichcategory,setcategory] = useState('');

  const [pro,setpro] = useState([]);
  const [whichProject,setproject] = useState('');

  const [fname,setfname] = useState("");
  const [lname,setlname] = useState("");
  const [joinDate,setjoinDate] = useState("");
  const [leaveDate,setleaveDate] = useState("");
    const navigate = useNavigate();

  const fetchData = async (url1,url2) => {
    try{

      const res1 = await fetch(url1);
      const data1 = await res1.json();
      if(data1.length > 0){
        setcat(data1);
      }

      const res2 = await fetch(url2);
      const data2 = await res2.json();
      if(data2.length > 0){
        setpro(data2);
      }
    }catch(e){
      console.error(e);
    }
}

const formSubmit = (e) => {
    const memberData = {whichcategory,whichProject,fname,lname,joinDate,leaveDate};

    fetch('http://localhost:7000/api/members',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(memberData)
    }).then((res)=>{
      Swal.fire({
        title:'Member Added',
        icon:'success',
        toast:true,
        timer:3000,
        position:'top-right',
        timerProgressBar: true,
        showConfirmButton: false
    });
    navigate('/members')
    }).catch((err)=>{
      console.log(err);
    })
  }

useEffect(() => {
    fetchData(API,API1)
  },[]);

  return (
    <div className='container my-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Siderbar />
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h3 className='card-header'>Add Member</h3>
                <div className='card-body'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label py-1">Member Domain</label>
                        <select  value={whichcategory} onChange={e => {setcategory(e.target.value)}} className="form-select"  aria-label="Default select example">
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
                        <label htmlFor="exampleInputEmail1" className="form-label py-1">Member Projects</label>
                        <select value={whichProject} onChange={e => {setproject(e.target.value)}}  className="form-select"  aria-label="Default select example">
                        <option selected value = "">Select Member Project</option>
                        { pro.map((item,index) => { 
                        return(
                            <option key={index} value={item._id}>
                                {item.projectname}
                            </option>
                        )
                         })}   
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">First Name</label>
                        <input type="text" value={fname} onChange={(e) => setfname(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Last Name</label>
                        <input type="text" value={lname} onChange={(e) => setlname(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Join Date</label>
                        <input type="text" value={joinDate} onChange={(e) => setjoinDate(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Leave Date</label>
                        <input type="text" value={leaveDate} onChange={(e) => setleaveDate(e.target.value)}  name='title' className="form-control"/>
                    </div>
                    <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default AddMembers