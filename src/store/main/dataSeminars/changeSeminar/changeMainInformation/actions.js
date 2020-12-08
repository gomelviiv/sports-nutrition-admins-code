export  const CHANGE_MAIN_INFORMATION_NAME = 'CHANGE_MAIN_INFORMATION_NAME'
export  const CHANGE_MAIN_INFORMATION_DATE_SEMINARS = 'CHANGE_MAIN_INFORMATION_DATE_SEMINARS'
export  const CHANGE_MAIN_INFORMATION_AUTHORS = 'CHANGE_MAIN_INFORMATION_AUTHORS'
export  const CHANGE_MAIN_INFORMATION_FORMAT = 'CHANGE_MAIN_INFORMATION_FORMAT'
export  const CHANGE_MAIN_INFORMATION_COUNT_PLACE = 'CHANGE_MAIN_INFORMATION_COUNT_PLACE'
export  const CHANGE_MAIN_INFORMATION_IMG = 'CHANGE_MAIN_INFORMATION_IMG'


export const setMainInformationName = name =>({
    type: CHANGE_MAIN_INFORMATION_NAME,
    payload: name
})

export const setMainInformationDateSeminars = dateSeminar =>({
    type: CHANGE_MAIN_INFORMATION_DATE_SEMINARS,
    payload: dateSeminar
})

export const setMainInformationAuthors = authors =>({
    type: CHANGE_MAIN_INFORMATION_AUTHORS,
    payload: authors
})

export const setMainInformationFormat = format =>({
    type: CHANGE_MAIN_INFORMATION_FORMAT,
    payload: format
})

export const setMainInformationCountPlace = countPlace =>({
    type: CHANGE_MAIN_INFORMATION_COUNT_PLACE,
    payload: countPlace
})

export const setMainInformationImg = img =>({
    type: CHANGE_MAIN_INFORMATION_IMG,
    payload: img
})


