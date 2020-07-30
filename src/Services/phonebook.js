import axios from "axios"
const baseUrl = "http://localhost:3001/phonebook"

const getAll = () => {
	return axios.get(baseUrl)
}

const create = (newObject) => {
	return axios.post(baseUrl, newObject)
}

const update = (newObject, id) => {
	return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteItem = (id) => {
	return axios.delete(`${baseUrl}/${id}`)
}

export default {
	getAll: getAll,
	create: create,
	update: update,
	deleteItem: deleteItem,
}
