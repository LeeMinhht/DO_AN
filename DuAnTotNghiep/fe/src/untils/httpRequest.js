import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

export const get = async (path,options = {}) => { //từ khoá async để trả về một promises
    const reponse = await httpRequest.get(path, options);
    return reponse.data;
}
export default httpRequest;