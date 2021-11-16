import config from "../config/config"

const axios=require('axios').default;

export default class AddressBookService{

    baseUrl=config.baseUrl;
    addContact(data)
    {
        console.log("push data")
        return axios.post(`${this.baseUrl}`,data);
    }
    getAllContacts()
    {
        console.log("get data")
        return axios.get(`${this.baseUrl}`);
    }
    deleteContact(id)
    {
        console.log("deleted")
        axios.delete(`${this.baseUrl}`+id);
    }
    updateContact(data,id)
    {
        console.log("update")
        return axios.put(`${this.baseUrl}`+id,data);
    }
    getContact(id){
        console.log("get data for one")
        return axios.get(`${this.baseUrl}`+id);
    }
}


