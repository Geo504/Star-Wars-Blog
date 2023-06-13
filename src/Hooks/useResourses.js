import { useEffect, useState } from "react";

import { apiCall } from "../Utils/apiCall";
import { getResources } from "../Services/getResources";

export const useResourses = (url) => {
  const [elements, setElements]=useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const elementUrls = await getResources(url);

      const elementResponse = await Promise.all(elementUrls.results.map(element => apiCall(element.url)));

      const elementList = elementResponse.map(element=> element.result);

      setElements(elementList.map(element=>({favorite: false, ...element})));
    }
    fetchData();
  }, [])

  return [elements, setElements];
}
