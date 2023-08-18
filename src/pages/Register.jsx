import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Siderbar from "../components/Siderbar";

const Register = () => {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const{signUp} = useUserAuth();
    const [error,seterror] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        seterror("");
        try{
            await signUp(email,password);
            navigate('/login');
        }catch(err){
            seterror(err.message);
        }
    }

  return (
    <div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3'>
            <Siderbar/>
        </aside>
        <section className='col-md-9'>
            <div className='card'>
                <h3 className='card-header'>Add Another Admin</h3>
                <div className='card-body'>
                {error && 
            <div class="alert alert-danger" role="alert">
                {error}
            </div>
        }
                     <div className="mb-3">
                        <label for="title" className="form-label">Admin Email</label>
                        <input
                  type="email"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  autoComplete="off"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label">Admin Password</label>
                        <input
                  type="password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  autoComplete="off"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
};

export default Register;
