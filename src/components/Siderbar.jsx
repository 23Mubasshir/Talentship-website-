import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Siderbar = () => {
    const {user,logOut} = useUserAuth();
    const navigate = useNavigate();

  const handleSubmit = async () => {
    try{
      await logOut();
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <div className='card'>
                    <div className='list-group list-group-flush'>
                        <Link to='/dashboard' className='list-group-item list-group-item-action'> Dashboard</Link>
                        <Link to='/category' className='list-group-item list-group-item-action'>Domains</Link>
                        <Link to='/projects' className='list-group-item list-group-item-action'> Projects </Link>
                        <Link to='/members' className='list-group-item list-group-item-action'> Members </Link>
                        <Link to='/addadmin' className='list-group-item list-group-item-action'> Add other Admin  </Link>
                        <button onClick={handleSubmit} className='list-group-item list-group-item-action text-danger'> Logout </button>
                    </div>
         </div>
    </div>
  )
}

export default Siderbar
