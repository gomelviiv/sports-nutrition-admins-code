import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { delUser,changesUser } from "../../../../fetch/fetchUser"


import DataUsersValue from './DataUsersValue.jsx'

function DataUsersValueContainer(props){
    
    const deleteUser = (id) => {
        delUser(id).then(data => console.log(data))
        location.reload()
    }

    const changeUser = (id,status) =>{
        changesUser({id, status}).then(data => console.log(data))
        location.reload()
    }

    return (
        <DataUsersValue
            dataUsers={props.dataUsers}
            deleteUser={deleteUser}
            changeUser={changeUser}
        />  
    )
}

const mapStateToProps = (state) =>{ 
    return {

    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps,mapDispatchToProps)(DataUsersValueContainer)