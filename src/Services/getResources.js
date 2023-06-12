import { apiCall } from "../Utils/apiCall";

export const getResources = async(resource) => {
  return apiCall(`https://www.swapi.tech/api/${resource}`);
}