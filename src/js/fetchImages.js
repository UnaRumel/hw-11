import axios from "axios";
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY ='33609123-733720ae375a65a41d84664d1'

export default async function fetchImages(value, page) {
    const filter = `?key=${API_KEY}&q=${value}$&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
    return await axios.get(`${BASE_URL}${filter}`)
}