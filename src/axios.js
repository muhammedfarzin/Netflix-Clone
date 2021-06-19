import axios from 'axios'
import constant from './constants/constants'

const instance = axios.create({
    baseURL: constant.baseUrl
  });

export default instance