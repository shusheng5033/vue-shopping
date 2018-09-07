import axios from "axios"
const baseurl = "../../static/";
axios.defaults.baseURL = baseurl;


// 导出产品列表

export const products = () => {
    return axios.get('product.json').then(res=>res.data);
}