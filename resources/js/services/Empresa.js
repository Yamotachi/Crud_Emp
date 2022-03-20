const baseUrl = 'http://127.0.0.1:8000/api/empresa';
import axios from "axios";
const empresa = {};

empresa.list = async () => {
    const urlList = baseUrl+"/listdocs"
    const res = await axios.get(urlList)
    .then(response => {return response.data })
    .catch(error =>{ return error; })
    return res;
}

empresa.save = async(data) => {
    const urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave, data)
    .then(response => { return response.data; })
    .catch(error => { return error; })
    return res;
}

empresa.listEmpresa = async() => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
}

empresa.get = async (id) => {
    const urlGet = baseUrl+"/get/"+id
    const res = await axios.get(urlGet)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
}

empresa.update = async (data) => {
    const urlUpdate = baseUrl+"/update/"+data.id
    const res = await axios.put(urlUpdate, data)
    .then(response=>{ return response.data })
    .catch(error => { return error; })
    return res;
}

empresa.delete = async (id) => {
    const urlDelete = baseUrl+"/delete/"+id
    const res = await axios.delete(urlDelete)
    .then(response => { return response.data })
    .catch(error => { return error; })
    return res;
  }

export default empresa