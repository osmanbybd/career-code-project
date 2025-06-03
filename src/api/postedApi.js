export const jobsCreatedByPromise = email =>{
    return fetch(`https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/jobs?email=${email}`)
    .then(res => res.json())
}
