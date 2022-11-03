import axios from 'axios'
// const API_URL = 'http://localhost:8081/api/contact'
const API_URL = 'https://portfolio2.fly.dev/api/contact'

class ContactService {
  post (name, tel, email, msg) {
    return axios.post(
      API_URL,
      { name, tel, email, msg }
    )
  }
}

export default new ContactService()
