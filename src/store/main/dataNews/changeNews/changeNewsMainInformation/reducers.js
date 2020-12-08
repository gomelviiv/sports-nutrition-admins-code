import { 
 CHANGE_MAIN_INFORMATION_NEWS_TITLE,
 CHANGE_MAIN_INFORMATION_NEWS_AUTHORS,
 CHANGE_MAIN_INFORMATION_NEWS_SPECIALIZATION,
 CHANGE_MAIN_INFORMATION_NEWS_LITTLE_DESCRIPTION,
 CHANGE_MAIN_INFORMATION_NEWS_AUTHORS_IMG,
 CHANGE_MAIN_INFORMATION_NEWS_LITTLE_IMG,
 CHANGE_MAIN_INFORMATION_NEWS_BIG_IMG,
    } from './actions'
     
const defaultState = {
    title:  '',
    authors: '',
    specialization: '',
    littleDescription: '',
    authorsImages: '',
    littleImages: '',
    bigImages: '',
}

export const changeMainInformationNewsReducer = (state = defaultState, action) =>{
    switch(action.type){
        case CHANGE_MAIN_INFORMATION_NEWS_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case CHANGE_MAIN_INFORMATION_NEWS_AUTHORS:
            return {
                ...state,
                authors: action.payload
            }
        case CHANGE_MAIN_INFORMATION_NEWS_SPECIALIZATION:
            return {
                ...state,
                specialization: action.payload
            }
        case CHANGE_MAIN_INFORMATION_NEWS_LITTLE_DESCRIPTION:
            return {
                ...state,
                littleDescription: action.payload
            }
        case CHANGE_MAIN_INFORMATION_NEWS_AUTHORS_IMG:
            return {
                ...state,
                authorsImages: action.payload
            }
        case CHANGE_MAIN_INFORMATION_NEWS_LITTLE_IMG:
            return {
                ...state,
                littleImages: action.payload
            }
        case CHANGE_MAIN_INFORMATION_NEWS_BIG_IMG:
            return {
                ...state,
                bigImages: action.payload
            }
    }
    return  state
}