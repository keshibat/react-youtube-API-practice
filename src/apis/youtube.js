import axios from 'axios'


const KEY = "AIzaSyCHn_g6G1_esoELwnxNrGb1lTF0Za-yQrc"


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
})




