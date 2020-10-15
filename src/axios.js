import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-d9ccf.cloudfunctions.net/api'
});

/* Test url
   baseURL: 'http://localhost:5001/clone-d9ccf/us-central1/api' */
export default instance;