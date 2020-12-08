export  const CHANGE_MAIN_INFORMATION_NEWS_TITLE = 'CHANGE_MAIN_INFORMATION_NEWS_TITLE'
export  const CHANGE_MAIN_INFORMATION_NEWS_AUTHORS = 'CHANGE_MAIN_INFORMATION_NEWS_AUTHORS'
export  const CHANGE_MAIN_INFORMATION_NEWS_SPECIALIZATION = 'CHANGE_MAIN_INFORMATION_NEWS_SPECIALIZATION'
export  const CHANGE_MAIN_INFORMATION_NEWS_LITTLE_DESCRIPTION = 'CHANGE_MAIN_INFORMATION_NEWS_LITTLE_DESCRIPTION'
export  const CHANGE_MAIN_INFORMATION_NEWS_AUTHORS_IMG = 'CHANGE_MAIN_INFORMATION_NEWS_AUTHORS_IMG'
export  const CHANGE_MAIN_INFORMATION_NEWS_LITTLE_IMG = 'CHANGE_MAIN_INFORMATION_NEWS_LITTLE_IMG'
export  const CHANGE_MAIN_INFORMATION_NEWS_BIG_IMG = 'CHANGE_MAIN_INFORMATION_NEWS_BIG_IMG'


export const setMainInformationNewsTitle = title =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_TITLE,
    payload: title
})

export const setMainInformationNewsAuthors = authors =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_AUTHORS,
    payload: authors
})

export const setMainInformationNewsSpecialization = specialization =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_SPECIALIZATION,
    payload: specialization
})

export const setMainInformationNewsLittleDescription = littleDescription =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_LITTLE_DESCRIPTION,
    payload: littleDescription
})

export const setMainInformationNewsAuthorsImg = img =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_AUTHORS_IMG,
    payload: img
})

export const setMainInformationNewsLittleImg = img =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_LITTLE_IMG,
    payload: img
})

export const setMainInformationNewsBigImg = img =>({
    type: CHANGE_MAIN_INFORMATION_NEWS_BIG_IMG,
    payload: img
})


