import axios from 'axios'
const API_URL = 'https://portfolio2.fly.dev/api/user/getPost'
// const API_URL = 'http://localhost:8081/api/user/getPost'

class WorkService {
  getPost (category, lang) {
    // console.log(API_URL + '/' + category)
    return axios.get(API_URL + '/' + category + '/' + lang

    )
  }
}

export default new WorkService()
