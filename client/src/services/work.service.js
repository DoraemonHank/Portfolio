import axios from 'axios'
const API_URL = 'https://portfolio2.fly.dev/'
// const API_URL = 'http://localhost:8000/'

class WorkService {
  getPost (category, lang) {
    return axios.get(API_URL + 'api/user/getPost/' + category + '/' + lang
    )
  }

  getPostFromId (_id) {
    return axios.post(API_URL + 'api/user/getPostFromId',
      { _id } // req.body
    )
  }
}

export default new WorkService()
