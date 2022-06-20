import axios from 'axios'
const API_URL = 'http://localhost:8081/api/user/getPost'

class WorkService {
  getPost (category) {
    // console.log(API_URL + '/' + category)
    return axios.get(API_URL + '/' + category

    )
  }
}

export default new WorkService()
