import React from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleApplyJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // job salaryRange
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // job requirements
    const requirementsString = newJob.requirements;
    const requirementDirty = requirementsString.split(",");
    const requirementClean = requirementDirty.map(req => req.trim());
    newJob.requirements = requirementClean;
    // jon responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.status = "active";
    console.log(newJob);

    // save to the database
    axios
      .post("https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/jobs", newJob)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
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

  return (
    <div className="container mx-auto  ">
      <h1>please add job </h1>
      <form onSubmit={handleApplyJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic details</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="location"
          />
          <label className="label">Company logo</label>
          <input
            type="text"
            name="company_logo"
            className="input"
            placeholder="Company logo URl"
          />
        </fieldset>
        {/* job Type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">JOb Type</legend>

          <div className="filter">
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="On_site"
              value="on_site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>

        {/* job category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job category </legend>

          <select
            defaultValue="Job category"
            name="category"
            className="select"
          >
            <option disabled={true}>job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">DEADLINE</legend>
          <input type="datetime-local" name="deadline" className="input" />
        </fieldset>
        {/*Salary Rang */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Rang </legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
            <div>
              <label className="label">Minimum salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="minimum salary"
              />
            </div>

            <div>
              <label className="label">Max salary </label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Max salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="select currency"
                name="currency"
                className="select"
              >
                <option disabled={true}>select currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend"> Job Description </legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>
        {/* Job Requirement */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirement </legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Job Requirement (separate by coma)"
          ></textarea>
        </fieldset>
        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities </legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Job Responsibilities (separate by coma)"
          ></textarea>
        </fieldset>

        {/* Hr related info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="input"
            placeholder="HR Email"
          />
        </fieldset>
        <input type="submit" className="btn " value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
