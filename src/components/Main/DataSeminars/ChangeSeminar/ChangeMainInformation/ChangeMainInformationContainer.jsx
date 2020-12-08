import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'

import ChangeMainInformation from './ChangeMainInformation.jsx'
import  {
    setMainInformationName,
    setMainInformationDateSeminars,
    setMainInformationAuthors,
    setMainInformationFormat,
    setMainInformationCountPlace,
    setMainInformationImg
    } from '../../../../../store/main/dataSeminars/changeSeminar/changeMainInformation/actions'

function ChangeMainInformationContainer(props){
    useEffect(()=>{
        props.setMainInformationName(props.defaultName)
    },[props.defaultName])

    useEffect(()=>{
        props.setMainInformationDateSeminars(props.defaultDateSeminar)
    },[props.defaultDateSeminar])

    useEffect(()=>{
        props.setMainInformationAuthors(props.defaultAuthors)
    },[props.defaultAuthors])

    useEffect(()=>{
        props.setMainInformationFormat(props.defaultFormat)
    },[props.defaultFormat])

    useEffect(()=>{
        props.setMainInformationCountPlace(props.defaultCountPlace)
    },[props.defaultCountPlace])

    useEffect(()=>{
        props.setMainInformationImg(props.defaultImg)
    },[props.defaultImg])

    return (
        <ChangeMainInformation 
            setMainInformationName={props.setMainInformationName}
            setMainInformationDateSeminars={props.setMainInformationDateSeminars}
            setMainInformationAuthors={props.setMainInformationAuthors}
            setMainInformationFormat={props.setMainInformationFormat}
            setMainInformationCountPlace={props.setMainInformationCountPlace}
            setMainInformationImg={props.setMainInformationImg}
            name={props.name}
            dateSeminar={props.dateSeminar}
            authors={props.authors}
            format={props.format}
            countPlace={props.countPlace}
            img={props.img}
            upLoadImage={props.upLoadImage}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        name:  state.changeMainInformation.name,
        dateSeminar: state.changeMainInformation.dateSeminar,
        authors: state.changeMainInformation.authors,
        format: state.changeMainInformation.format,
        countPlace: state.changeMainInformation.countPlace,
        img: state.changeMainInformation.img
    }
}

const mapDispatchToProps = {
    setMainInformationName,
    setMainInformationDateSeminars,
    setMainInformationAuthors,
    setMainInformationFormat,
    setMainInformationCountPlace,
    setMainInformationImg,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeMainInformationContainer);