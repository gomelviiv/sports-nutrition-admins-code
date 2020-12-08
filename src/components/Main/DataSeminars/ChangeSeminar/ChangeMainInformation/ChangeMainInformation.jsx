import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeMainInformation.css'



export default function ChangeMainInformation(props){
        return (
        <div className="change-main-information">
                <div className="">
                        <div>
                                Название: 
                        </div>
                        <div>
                                <input 
                                        type="text"
                                        value={props.name ? props.name : ''}
                                        onChange={(e)=>props.setMainInformationName(e.target.value)}
                                />
                        </div>
                </div>
                <div className="">
                        <div>
                                Дата проведения:
                        </div>
                        <div>
                                <input 
                                        type="date"  
                                        name="trip-start" 
                                        value={props.dateSeminar ? props.dateSeminar : ''} 
                                        min="2018-01-01" 
                                        max="2100-12-31"
                                        onChange={(e)=>props.setMainInformationDateSeminars(e.target.value)}
                                /> 
                        </div>
                </div>
                <div className="">
                        <div>
                                Авторы:
                        </div>
                        <div>
                                <input 
                                        type="text"
                                        value={props.authors ? props.authors : ''} 
                                        onChange={(e)=>props.setMainInformationAuthors(e.target.value)}        
                                />
                        </div>
                </div>
                <div className="">
                        <div>
                                Формат:
                        </div>
                        <div>
                                <input 
                                        type="text" 
                                        value={props.format ? props.format : ''} 
                                        onChange={(e)=>props.setMainInformationFormat(e.target.value)}
                                />
                        </div>
                </div>
                <div className="">
                        <div>
                                Количество мест:
                        </div>
                        <div>
                                <input 
                                        type="text" 
                                        value={props.countPlace ? props.countPlace : ''} 
                                        onChange={(e)=>props.setMainInformationCountPlace(e.target.value)}
                                        />
                        </div>
                </div>
                <div className="">
                        <div>
                                Прикрепить картинку:
                        </div>
                        <div>
                                <input 
                                        accept=".jpg, .jpeg, .png"
                                        type="file"
                                        onChange={(e)=>{props.upLoadImage(e.target.files[0]);props.setMainInformationImg(e.target.files[0].name)}}
                                />
                                <img src={props.img ? `http://localhost:8000/images/${props.img}` : ''} alt=""/>
                        </div>
                </div>
        </div>
        )
}