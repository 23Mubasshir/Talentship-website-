import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectView = () => {
  const { id } = useParams();
  const [projectname, setprojectName] = useState();
  const [clientName, setclientName] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/project/" + id)
      .then((result) => {
        setprojectName(result.data.projectname);
        setclientName(result.data.clientName);
      })
      .catch((err) => console.error(err));
  }, []);

  const API = "http://localhost:7000/api/project";

  const [project, setproject] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setproject(data);
        console.log(data.membersInvoleProject.fname);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <div>
      <div class="container">
        <h1 class="my-4">{projectname}</h1>
        <div class="row">
          <div class="col-md-7">
            <img
              class="img-fluid"
              src="https://via.placeholder.com/750x500"
              alt=""
            />
          </div>

          <div class="col-md-5">
            <h3 class="my-3">{projectname} Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. Sed
              dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
              ultricies, justo eu convallis placerat, felis enim.
            </p>
            <h3 class="my-3">Client : {clientName}</h3>
          </div>
        </div>
        <h3 class="my-4">Related Projects</h3>

        <div class="row">
          {project.map((item) => {
            const { membersInvoleProject } = item;
            return (
              <>
              {membersInvoleProject.map((member) => (
                    <div class="col-md-3 col-sm-6 mb-4" key={item._id}>
                    <a>
                      <img
                        class="img-fluid"
                        src="https://via.placeholder.com/500x300"
                        alt=""
                      />
                    <h1 key={member._id}>{member.fname}</h1>
                    </a>
              </div>
                  ))}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
