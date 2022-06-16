import axios from "axios";
const API_URL = "http://localhost:8080/api/img";

class ImageService{

    post(formData){
        return axios.post('http://localhost:8080/api/img', formData, 
         {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    }

}

export default new ImageService();