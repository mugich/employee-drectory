import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=10");
  },
};