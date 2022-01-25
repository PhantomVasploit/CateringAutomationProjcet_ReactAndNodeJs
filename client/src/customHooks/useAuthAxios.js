import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const useAuthAxios = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authAxios = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })

  useEffect(()=>{
    const abortCont = new AbortController();
    authAxios.get(url, {signal: abortCont.signal})
    .then(response =>{
      if(!response.data){
        console.log(`Api server down...`);
        navigate("");
      }else {
        setData(response.data);
        setIsPending(false);
        setError(null);
      }
    })
    .catch(err=>{
      if(err.name === 'AbortError'){
        console.log(`Fetch aborted: ${err.message}`);
      }else {
        setIsPending(false);
        setError(err.message);
      }
    });
    return () => abortCont.abort();
  }, [url])
  return { data, isPending, error };
}
export default useAuthAxios;
