import { apiBase } from './constants';

export const get = async (resource, config) => {
  try{
    const url = `${apiBase}/${resource}`;
    const response = await fetch(url, config);
    if (!response.ok) return false;
    const json = await response.json();
    return json;
  }catch(e){
    console.log(e);
    return false;
  }
}

export const post = async (resource, data) => {
  try{
    const url = `${apiBase}/${resource}`;
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) return false;
    const json = await response.json();
    return json;
  }catch(e){
    console.log(e);
    return false;
  }
}
