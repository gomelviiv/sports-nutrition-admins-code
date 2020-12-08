import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'

import ChangeNewsMainInformation from './ChangeNewsMainInformation.jsx'
import  {
    setMainInformationNewsTitle,
    setMainInformationNewsAuthors,
    setMainInformationNewsSpecialization,
    setMainInformationNewsLittleDescription,
    setMainInformationNewsAuthorsImg,
    setMainInformationNewsLittleImg,
    setMainInformationNewsBigImg,
    } from '../../../../../store/main/dataNews/changeNews/changeNewsMainInformation/actions'

// import {getSeminarsId} from '../../../../../fetch/fetchSeminar'


function ChangeNewsMainInformationContainer(props){

    useEffect(()=>{
        props.setMainInformationNewsTitle(props.defaultTitle)
    },[props.defaultTitle])

    useEffect(()=>{
        props.setMainInformationNewsAuthors(props.defaultAuthors)
    },[props.defaultAuthors])

    useEffect(()=>{
        props.setMainInformationNewsSpecialization(props.defaultSpecialization)
    },[props.defaultSpecialization])

    useEffect(()=>{
        props.setMainInformationNewsLittleDescription(props.defaultLittleDescription)
    },[props.defaultLittleDescription])

    useEffect(()=>{
        props.setMainInformationNewsAuthorsImg(props.defaultAuthorsImages)
    },[props.defaultAuthorsImages])

    useEffect(()=>{
        props.setMainInformationNewsLittleImg(props.defaultLittleImages)
    },[props.defaultLittleImages])
    useEffect(()=>{
        props.setMainInformationNewsBigImg(props.defaultBigImages)
    },[props.defaultBigImages])

    return (
        <ChangeNewsMainInformation

            setMainInformationNewsTitle = {props.setMainInformationNewsTitle}
            setMainInformationNewsAuthors = {props.setMainInformationNewsAuthors}
            setMainInformationNewsSpecialization = {props.setMainInformationNewsSpecialization}
            setMainInformationNewsLittleDescription = {props.setMainInformationNewsLittleDescription}
            setMainInformationNewsAuthorsImg = {props.setMainInformationNewsAuthorsImg}
            setMainInformationNewsLittleImg = {props.setMainInformationNewsLittleImg}
            setMainInformationNewsBigImg = {props.setMainInformationNewsBigImg}
           
            title = { props.title}
            authors = { props.authors}
            specialization = { props.specialization}
            littleDescription = { props.littleDescription}
            authorsImages = { props.authorsImages}
            littleImages = { props.littleImages}
            bigImages = { props.bigImages}

            upLoadImageAuthor={props.upLoadImageAuthor}
            upLoadImageLittle={props.upLoadImageLittle}
            upLoadImageBig={props.upLoadImageBig}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        title:  state.changeMainInformationNews.title,
        authors: state.changeMainInformationNews.authors,
        specialization: state.changeMainInformationNews.specialization,
        littleDescription: state.changeMainInformationNews.littleDescription,
        authorsImages: state.changeMainInformationNews.authorsImages,
        littleImages: state.changeMainInformationNews.littleImages,
        bigImages: state.changeMainInformationNews.bigImages
    }
}

const mapDispatchToProps = {
    setMainInformationNewsTitle,
    setMainInformationNewsAuthors,
    setMainInformationNewsSpecialization,
    setMainInformationNewsLittleDescription,
    setMainInformationNewsAuthorsImg,
    setMainInformationNewsLittleImg,
    setMainInformationNewsBigImg,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeNewsMainInformationContainer);