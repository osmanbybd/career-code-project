export const myApplicationPromise = (email, accessToken) =>{
    return fetch(`http://localhost:3000/applications?email=${email}`,{
        credentials:'include',
        headers:{
            authorization : `bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}