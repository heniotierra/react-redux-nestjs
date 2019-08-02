import { 
  apiBase,
} from './constants';
import axios from 'axios';

export const get = (resource, config) => {
  const url = `${apiBase}/${resource}`;
  return axios({
    method: 'GET',
    config,
    url,
  });
}

export const post = (resource, data) => {
  const url = `${apiBase}/${resource}`;
  return axios({
    method: 'POST',
    data,
    url,
  });
}
