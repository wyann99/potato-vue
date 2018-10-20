const baseURL = process.env.NODE_ENV === 'production' ? '' : ''

const URL = {
    getResult: `${baseURL}aaa/queryResult`
}

export default URL
