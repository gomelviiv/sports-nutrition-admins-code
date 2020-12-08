import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeSeminar.css'

import ChangeSeminarTableContainer from './ChangeSeminarTable/ChangeSeminarTableContainer.jsx'
import ChangeDiscriptionArticleAndTextContainer from './ChangeDiscriptionArticleAndText/ChangeDiscriptionArticleAndTextContainer.jsx'
import ChangeMainInformationContainer from './ChangeMainInformation/ChangeMainInformationContainer.jsx'
import ModalChangeSaveSeminarContainer from './ModalChangeSaveSeminar/ModalChangeSaveSeminarContainer.jsx'
import Modal from 'react-modal';


export default function ChageSeminar(props){
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [image, setImage] = useState([])
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    
    const upLoadImage = (file) => {
        setImage(file)
    }
    return (
        <div className="change-seminar">
                <h2>{props.functionName ? props.functionName : ''}</h2>
                <h3>
                    Основная информация:
                </h3>
                <ChangeMainInformationContainer
                    defaultName={props.dataSelectedSeminar.name}
                    defaultDateSeminar={props.dataSelectedSeminar.dateSeminar}
                    defaultAuthors={props.dataSelectedSeminar.authors}
                    defaultFormat={props.dataSelectedSeminar.format}
                    defaultCountPlace={props.dataSelectedSeminar.countPlace}
                    defaultImg={props.dataSelectedSeminar.img}
                    upLoadImage={upLoadImage}
                />
                <h3>
                    Информация для таблицы:
                </h3>
    
                <ChangeSeminarTableContainer
                    defaultValuesTable={props.dataSelectedSeminar.valuesTable}
                />
                <h3>
                   Информацияо о семинаре:
                </h3>
                <ChangeDiscriptionArticleAndTextContainer
                    defaultAllArticles={props.dataSelectedSeminar.allArticles}
                    defaultAllParagraph={props.dataSelectedSeminar.allParagraph} 
                />
                <button onClick={()=>openModal()}>Сохранить семинар</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal-change-save-seminar"
                >
                    <ModalChangeSaveSeminarContainer
                        image={image}
                        id={props.dataSelectedSeminar._id}  
                        buttonClose={closeModal}
                    />
                        
                </Modal>
        </div>
    )
}