const url = "http://localhost:8000";
const urlGETNews = `${url}/news`;
const urlPOSTNews = `${url}/newsadd`;
const urlDELNews = `${url}/news`;


export async function getNews(){
    const response = await fetch(urlGETNews, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "x-access-token": localStorage.getItem('token')
            },
    })
    const data = response.json()
    return data
}

export async function getNewsId(id){
    const response = await fetch(`${urlGETNews}/${id}`, {
        params: id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "x-access-token": localStorage.getItem('token')
            },
    })
    const data = response.json()
    return data
}

export async function postNews(News){
    const response = await fetch(urlPOSTNews,{
        method: "POST",
        body: News,
        
    })
    const data = await response.json()
    return data
}


export async function delNews(id){
    const response = await fetch(`${urlDELNews}/${id}`,{
        params: id,
        method: "DELETE",
        headers: {
            "Content-type": "application/json"  
        },
    })
    const data = await response.json()
    return data
}