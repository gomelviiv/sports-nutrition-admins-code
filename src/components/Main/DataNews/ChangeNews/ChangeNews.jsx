import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeNews.css'

// import ChangeSeminarTableContainer from './ChangeSeminarTable/ChangeSeminarTableContainer.jsx'
import ChangeDiscriptionArticleAndTextContainer from '../../DataSeminars/ChangeSeminar/ChangeDiscriptionArticleAndText/ChangeDiscriptionArticleAndTextContainer.jsx'
import ChangeNewsMainInformationContainer from './ChangeNewsMainInformation/ChangeNewsMainInformationContainer.jsx'
import ModalChangeSaveNewsContainer from './ModalChangeSaveNews/ModalChangeSaveNewsContainer.jsx'
import Modal from 'react-modal';


export default function ChangeNews(props){
    const [imgAuthor, setImgAuthor] = useState([])
    const [imgLittle, setImgLittle] = useState([])
    const [imgBig, setImgBig] = useState([])
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    const upLoadImageAuthor = (file) => {
        setImgAuthor(file)
    }

    const upLoadImageLittle = (file) => {
        setImgLittle(file)
    }

    const upLoadImageBig = (file) => {
        setImgBig(file)
    }
    return (
        <div className="change-seminar">
                <h2>{props.functionName ? props.functionName : ''}</h2>
                <h3>
                    Основная информация:
                </h3>
          
                <ChangeNewsMainInformationContainer
                    upLoadImageAuthor={upLoadImageAuthor}
                    upLoadImageLittle={upLoadImageLittle}
                    upLoadImageBig={upLoadImageBig}
                    defaultTitle={props.dataSelectedNews.title}
                    defaultAuthors={props.dataSelectedNews.authors}
                    defaultSpecialization={props.dataSelectedNews.specialization}
                    defaultLittleDescription={props.dataSelectedNews.littleDescription}
                    defaultAuthorsImages={props.dataSelectedNews.authorsImages}
                    defaultLittleImages={props.dataSelectedNews.littleImages}
                    defaultBigImages={props.dataSelectedNews.bigImages}
                />
                <h3>
                   Информация о новостях:
                </h3>
                <ChangeDiscriptionArticleAndTextContainer
                    defaultAllArticles={props.dataSelectedNews.allArticles}
                    defaultAllParagraph={props.dataSelectedNews.allParagraph} 
                />
                <button onClick={()=>openModal()}>Сохранить семинар</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal-change-save-seminar"
                >
                    <ModalChangeSaveNewsContainer 
                        imgAuthor={imgAuthor}
                        imgLittle={imgLittle}
                        imgBig={imgBig}
                        id={props.dataSelectedNews._id}  
                        buttonClose={closeModal}/>
                        
                </Modal>
        </div>
    )
}