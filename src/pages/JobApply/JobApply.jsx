import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams()
    console.log(id)
    const {user} = useAuth()
    console.log(user)


    const handleApplyNow = e =>{
        e.preventDefault()

        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn, github, resume)
        const application = {
            id,
            applicant : user.email,
            linkedIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Application has been successfully",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }



    return (
        <div className='container mx-auto'> 
            <h1 className="text-4xl">Job Apply  for you</h1>
            <form onSubmit={handleApplyNow}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
               

                <label className="label">LinkedIn</label>
                <input type="url" name='linkedIn' className="input" placeholder="linkedIn profile" />

                <label className="label">Github</label>
                <input type="url" name='github' className="input" placeholder="github profile" />

                <label className="label">Resume</label>
                <input type="url" name='resume' className="input" placeholder="resume" />

                <input type="submit" className='btn' value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;