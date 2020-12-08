import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './ChangeNewsMainInformation.css'


export default function ChangeNewsMainInformation(props){
        return (
        <div className="change-main-information">
                <div className="">
                        <div>
                                Название: 
                        </div>
                        <div>
                                <input 
                                        type="text"
                                        value={props.title ? props.title : ''}
                                        onChange={(e)=>props.setMainInformationNewsTitle(e.target.value)}
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
                                        onChange={(e)=>props.setMainInformationNewsAuthors(e.target.value)}        
                                />
                        </div>
                </div>
                <div className="">
                        <div>
                                Специализация:
                        </div>
                        <div>
                                <input 
                                        type="text"
                                        value={props.specialization ? props.specialization : ''} 
                                        onChange={(e)=>props.setMainInformationNewsSpecialization(e.target.value)}        
                                />
                        </div>
                </div>
                <div className="">
                        <div>
                                Краткое описание:
                        </div>
                        <div>
                                <textarea 
                                        type="text"
                                        value={props.littleDescription ? props.littleDescription : ''} 
                                        onChange={(e)=>props.setMainInformationNewsLittleDescription(e.target.value)}        
                                />
                        </div>
                </div>
                <div className="">
                        <div>
                                Прикрепить картинку автора:
                        </div>
                        <div>
                                <input 
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={(e)=>{props.upLoadImageAuthor(e.target.files[0]);props.setMainInformationNewsAuthorsImg(e.target.files[0].name)}}
                                />
                                <img src={props.authorsImages ? `http://localhost:8000/images/${props.authorsImages}` : ''} alt=""/>

                        </div>
                </div>
                <div className="">
                        <div>
                                Прикрепить маленькую картинку:
                        </div>
                        <div>
                                <input 
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={(e)=>{props.upLoadImageLittle(e.target.files[0]);props.setMainInformationNewsLittleImg(e.target.files[0].name)}}
                                />
                                <img src={props.littleImages ?`http://localhost:8000/images/${props.littleImages}` : ''} alt=""/>

                        </div>
                </div>
                <div className="">
                        <div>
                                Прикрепить большую картинку:
                        </div>
                        <div>
                                <input 
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={(e)=>{props.upLoadImageBig(e.target.files[0]);props.setMainInformationNewsBigImg(e.target.files[0].name)}}
                                />
                                <img src={props.bigImages ? `http://localhost:8000/images/${props.bigImages}` :''} alt=""/>

                        </div>
                </div>
        </div>
        )
}