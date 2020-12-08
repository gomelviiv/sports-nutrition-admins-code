import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from '../../../fetch/fetchUser'

import DataUsers from './DataUsers.jsx'

function DataUsersContainer(){
    const [dataUsers,setDataUsers] = useState([])
    useEffect(()=>{
        getUsers().then(data => setDataUsers(data))
    },[])
    return (
        <DataUsers
            dataUsers={dataUsers}
        />
    )
}

const mapStateToProps = (state) =>{ 
    return {

    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,mapDispatchToProps)(DataUsersContainer)