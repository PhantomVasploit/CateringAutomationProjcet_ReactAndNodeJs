import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAxios = (url)=>{
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const arbortCont = new AbortController();

    axios.get(url, {signal: arbortCont.signal})
    .then(response =>{
      if(!response.data){
        console.log(`Api server down...`);
        navigate("");
      }else {
        console.log(`Response Data is: ${response.data}`);
        setData(response.data);
        setIsPending(false);
        setError(null);
      }
    })
    .catch(err=>{
      if(err.name === 'AbortError'){
        console.log(`Fetch arborted: ${err.message}`);
      }else{
          setIsPending(false);
          setError(err.message);
      }
    });
    return () => arbortCont.abort();
  }, [url])
  return {data, isPending, error};
}

export default useAxios;
