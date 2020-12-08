import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './DataSeminars.css'
import Modal from 'react-modal';

import ChangeSeminarContainer from './ChangeSeminar/ChangeSeminarContainer.jsx' 
import ModalAddSeminar from './ModalAddSeminar/ModalAddSeminar.jsx'


export default function DataSeminars(props){
    const [seminarVisibility, setSeminarVisibility] = useState([])
    const [modalIsOpen,setIsOpen] = React.useState(false);

    useEffect(()=>{
        props.allSeminars.forEach(element => {
            setSeminarVisibility(seminarVisibility => 
                [
                    ...seminarVisibility,
                    {
                        status: false,
                        id:element._id
                    }
                ])
        })
    },[props])
    const renderButton = (id) =>{
        let elementIndex = seminarVisibility.findIndex(item => item.id == id)
        setSeminarVisibility(
            [
                ...seminarVisibility.slice(0,elementIndex),
                Object.assign({}, seminarVisibility[elementIndex], {
                    status: !seminarVisibility[elementIndex].status,
                    id
                }),
                ...seminarVisibility.slice(elementIndex+1)
            ]
        )
    }
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="data-seminars">
            <ul className="responsive-table">
                <li className="table-header-seminar">
                    <div className="col col-1">Номер #</div>
                    <div className="col col-2">Id:</div>
                    <div className="col col-2">Название:</div>
                    <div className="col col-2">Дата:</div>
                    <div className="col col-2"><button onClick={openModal}>создать</button></div>
                </li>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="main-class-modal-add-seminar"
                >
                    <ModalAddSeminar
                       buttonClose={closeModal}
                    />
                        
                </Modal>
                { 
                    props.allSeminars ? props.allSeminars.map((seminar,index)=>(
                        <div key={index}>
                            <li className="table-row-seminar" >
                                <div className="col col-1" data-label="Job index">{index+1}</div>
                                <div className="col col-2" data-label="id">{seminar._id}</div>
                                <div className="col col-2" data-label="Customer Name">{seminar.name}</div>
                                <div className="col col-2" data-label="Amount">{`${seminar.dateDay}.${seminar.dateMounth}.${seminar.dateYear}`}</div>
                                <div className="col col-2" data-label="Payment Status">
                                    <button onClick={()=>props.fetchDELSeminar(seminar._id)}>удалить</button>
                                    <button onClick={()=>renderButton(seminar._id)}>изменить</button>
                                </div>
                            </li>
                            {
                                seminarVisibility.find( item=> item.id == seminar._id) ?  
                                    seminarVisibility.find( item=> item.id == seminar._id).status ? 
                                        <ChangeSeminarContainer  id={seminar._id} functionName={'Редактирование семинара'} selectedSeminarData={seminar}/>
                                    : '' 
                                : ''  
                            }

                        </div>
                    )) : ''
                }
            </ul>

            
        </div>
    )
}