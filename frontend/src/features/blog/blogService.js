import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getBlogs = async () => {
    const res = await axios.get(`${base_url}blog`);
    return res.data;
};
const getBlog = async (id) => {
    console.log(id)
    const res = await axios.get(`${base_url}blog/${id}`);
    return res.data;
};

const blogService = {
    getBlogs,
    getBlog,
};

export default blogService;
