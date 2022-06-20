import axios from "axios";
const API_URL = "http://localhost:8081/api/img";

class ImageService{

    post(formData){
        return axios.post(API_URL, formData, 
         {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    }

}

export default new ImageService();