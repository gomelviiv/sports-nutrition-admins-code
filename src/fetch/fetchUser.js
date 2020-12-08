const url = "http://localhost:8000"
const usersCheck = `${url}/userschecking`
const usersAdd = `${url}/usersadd`
const usersGet = `${url}/users`
const usersDelete = `${url}/users`
const usersChange = `${url}/userschange`


export async function getUsers(){
    const response = await fetch(usersGet, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem('token')
            },
    })
    const data = response.json()
    return data

}

export async function signInFetch(User){
    const response = await fetch(usersCheck,{
        method: "POST",
        body: JSON.stringify(User),
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}

export async function signUpFetch(User){
    const response = await fetch(usersAdd,{
        method: "POST",
        body: JSON.stringify(User),
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}

export async function delUser(id){
    const response = await fetch(`${usersDelete}/${id}`,{
        params: id,
        method: "DELETE",
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}

export async function changesUser(value){
    const response = await fetch(usersChange,{
        method: "POST",
        body: JSON.stringify(value),
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}