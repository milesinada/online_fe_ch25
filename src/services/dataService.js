import axios from "axios";

var catalog = [];

class DataService {
  async getCatalog() {
    //create http request to retrieve data from server
    // to retrieve dtaa from the server
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    console.log("Test", response.data);
    return response.data;

    //return mock data
    // return catalog;
  }

  registerProduct() {}
}

export default DataService;
