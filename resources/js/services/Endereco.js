const baseUrl = 'http://127.0.0.1:8000/api/endereco';
import axios from "axios";
const endereco = {};

endereco.list = async () => {
    const urlList = baseUrl+"/listdocs"
    const res = await axios.get(urlList)
    .then(response => {return response.data })
    .catch(error =>{ return error; })
    return res;
}

endereco.save = async(data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave, data)
    .then(response => { return response.data; })
    .catch(error => { return error; })
    return res;
}

endereco.listendereco = async() => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
}

endereco.get = async (id) => {
    const urlGet = baseUrl+"/get/"+id
    const res = await axios.get(urlGet)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
}

endereco.update = async (data) => {
    const urlUpdate = baseUrl+"/update/"+data.id
    const res = await axios.put(urlUpdate, data)
    .then(response=>{ return response.data })
    .catch(error => { return error; })
    return res;
}

endereco.delete = async (id) => {
    const urlDelete = baseUrl+"/delete/"+id
    const res = await axios.delete(urlDelete)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
  }

export default endereco