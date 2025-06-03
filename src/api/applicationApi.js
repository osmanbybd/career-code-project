export const myApplicationPromise = (email, accessToken) =>{
    return fetch(`https://career-code-server-6oxc1vg23-osmanbybds-projects.vercel.app/applications?email=${email}`, {
        credentials:'include',
        headers:{
            authorization : `bearer ${accessToken} `
        }
    })
    .then(res => res.json())
}