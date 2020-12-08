import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './DataNews.css'
import Modal from 'react-modal';

import ChangeNewsContainer from './ChangeNews/ChangeNewsContainer.jsx' 
import ModalAddNews from './ModalAddNews/ModalAddNews.jsx'


export default function DataNews(props){
    const [newsVisibility, setNewsVisibility] = useState([])
    const [modalIsOpen,setIsOpen] = React.useState(false);

    useEffect(()=>{
        props.allNews.forEach(element => {
            setNewsVisibility(newsVisibility => 
                [
                    ...newsVisibility,
                    {
                        status: false,
                        id:element._id
                    }
                ])
        })
    },[props])
    const renderButton = (id) =>{
        let elementIndex = newsVisibility.findIndex(item => item.id == id)
        setNewsVisibility(
            [
                ...newsVisibility.slice(0,elementIndex),
                Object.assign({}, newsVisibility[elementIndex], {
                    status: !newsVisibility[elementIndex].status,
                    id
                }),
                ...newsVisibility.slice(elementIndex+1)
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
                    <ModalAddNews
                       buttonClose={closeModal}
                    />
                        
                </Modal>
                { 
                    props.allNews ? props.allNews.map((news,index)=>(
                        <div key={index}>
                            <li className="table-row-seminar" >
                                <div className="col col-1" data-label="Job index">{index+1}</div>
                                <div className="col col-2" data-label="id">{news._id}</div>
                                <div className="col col-2" data-label="Customer Name">{news.title}</div>
                                <div className="col col-2" data-label="Amount">{`${news.dateDay}.${news.dateMonth}.${news.dateYear}`}</div>
                                {/* <div className="col col-2" data-label="Amount">{`${news.dateDay}.${news.dateMonth}.${news.dateYear}.${news.dateSeconds}.${news.dateMinutes}.${news.dateHours}`}</div> */}
                                <div className="col col-2" data-label="Payment Status">
                                    <button onClick={()=>props.fetchDELNews(news._id)}>удалить</button>
                                    <button onClick={()=>renderButton(news._id)}>изменить</button>
                                </div>
                            </li>
                            {
                                newsVisibility.find( item=> item.id == news._id) ?  
                                    newsVisibility.find( item=> item.id == news._id).status ? 
                                        <ChangeNewsContainer  id={news._id} functionName={'Редактирование семинара'} selectedNewsData={news}/>
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