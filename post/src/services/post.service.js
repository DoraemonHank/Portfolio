import axios from "axios";
const API_URL = "http://localhost:8081/api/user";

class PostService{

    post(title,category,order,tag,intro,imgUrl,lang,content){
        return axios.post(
            API_URL + "/post",
            {title,category,order,tag,intro,imgUrl,lang,content}
        );
    }

}

export default new PostService();