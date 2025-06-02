import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const VewApplication = () => {
  const { id } = useParams();
  const applications = useLoaderData();

  const handleChangeApply = (e, application) => {
    console.log(e.target.value, application);

    axios
      .patch(`http://localhost:3000/applications/${application}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(id);
  return (
    <div>
      <h1 className="text-4xl">
        {applications.length} Applications for : {id}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application) => (
              <tr key={application._id} className="bg-base-200">
                <th>1</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleChangeApply(e, application._id)}
                    defaultValue={application.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Interview</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VewApplication;
