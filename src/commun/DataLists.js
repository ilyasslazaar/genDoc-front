import { getAllTypesURL, getAllDocsURL } from '../constants/defaultValues'
import axios from 'axios'

export const getTypesList = async () => {
  const response = await axios.get(getAllTypesURL, { headers: { Authorization: localStorage.getItem("token") } });
  return await response.data;
}

export const getDocsList = async () => {
  const response = await axios.get(getAllDocsURL, { headers: { Authorization: localStorage.getItem("token") } });
  return await response.data;
}

