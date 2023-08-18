import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { logIn } = useUserAuth();
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
    <div>
      <section>
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div class="divider d-flex align-items-center my-4">
                <h4 class="text-center fw-bold text-center mb-0">🔑Login</h4>
              </div>
              {error && 
            <div class="alert alert-danger" role="alert">
                {error}
            </div>
        }
              <div class="form-outline mb-2">
                <label class="form-label mt-1" for="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div class="form-outline mb-2">
                <label class="form-label mt-1" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div class="text-center text-lg-start mt-4">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                class="img-fluid my-5"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
