//usefetch

import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  
  const [state, setState] = useState({ data: null, isloading: true, errors: null });

  
  
  const getFetch = async () => 
  {  
    const response = await fetch(url)
    const data = await response.json()
    setState({
      data,
      isloading: false,
      errors: null,
    }); 
    
    return data;
  }

  useEffect(()=>{getFetch()},[url])


  
}
