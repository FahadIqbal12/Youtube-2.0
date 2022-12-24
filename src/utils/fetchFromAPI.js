import axios from "axios";


const Base_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: Base_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
  
export const fetchFromAPI = async (url) => {
   const {data} =  await axios.get(`${Base_URL}/${url}`, options);

    return data;
}