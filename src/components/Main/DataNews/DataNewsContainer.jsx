import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {getNews, delNews} from '../../../fetch/fetchNews'
import DataNews from './DataNews.jsx' 

function DataNewsContainer(props){
    const [allNews, setAllNews] = useState([])

    const fetchGETNews = () =>{
        getNews().then( data=>setAllNews(data))
    }

    const fetchDELNews = (id) => {
        delNews(id)
        location.reload()
    }

    useEffect(()=>(
        fetchGETNews()
    ),[])
    return (
        <DataNews
            allNews={allNews}
            fetchDELNews={fetchDELNews}
        />
    )
}

const mapStateToProps = state =>{
    return {
    }
}

const mapDispatchToProps  = {

}


export default connect(mapStateToProps, mapDispatchToProps)(DataNewsContainer)