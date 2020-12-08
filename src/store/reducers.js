import { combineReducers } from 'redux'

import { changeMainInformationNewsReducer } from './main/dataNews/changeNews/changeNewsMainInformation/reducers'
import { changeMainInformationReducer } from './main/dataSeminars/changeSeminar/changeMainInformation/reducers'
import { changeLabelTableReducer } from './main/dataSeminars/changeSeminar/changeSeminarTable/reducers'
import { changeSeminarArticleAndTextReducer } from './main/dataSeminars/changeSeminar/changeDiscriptionArticleAndText/сhangeDuscriptionNewArticle/reducers'

export default combineReducers({
    changeMainInformation: changeMainInformationReducer,
    changeLabelTable: changeLabelTableReducer,
    changeSeminarArticleAndText: changeSeminarArticleAndTextReducer,
    changeMainInformationNews: changeMainInformationNewsReducer,
});