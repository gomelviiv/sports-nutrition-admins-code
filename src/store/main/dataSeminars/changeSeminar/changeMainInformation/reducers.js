import { 
    CHANGE_MAIN_INFORMATION_NAME,
    CHANGE_MAIN_INFORMATION_DATE_SEMINARS,
    CHANGE_MAIN_INFORMATION_AUTHORS,
    CHANGE_MAIN_INFORMATION_FORMAT,
    CHANGE_MAIN_INFORMATION_COUNT_PLACE,
    CHANGE_MAIN_INFORMATION_IMG,
    } from './actions'
     
const defaultState = {
    name:  '',
    dateSeminar: '',
    authors: '',
    format: '',
    countPlace: '',
    img: '',
}

export const changeMainInformationReducer = (state = defaultState, action) =>{
    switch(action.type){
        case CHANGE_MAIN_INFORMATION_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_MAIN_INFORMATION_DATE_SEMINARS:
            return {
                ...state,
                dateSeminar: action.payload
            }
        case CHANGE_MAIN_INFORMATION_AUTHORS:
            return {
                ...state,
                authors: action.payload
            }
        case CHANGE_MAIN_INFORMATION_FORMAT:
            return {
                ...state,
                format: action.payload
            }
        case CHANGE_MAIN_INFORMATION_COUNT_PLACE:
            return {
                ...state,
                countPlace: action.payload
            }
        case CHANGE_MAIN_INFORMATION_IMG:
            return {
                ...state,
                img: action.payload
            }
    }
    return  state
}