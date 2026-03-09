import { useEffect, useState } from "react";

export const useFetchCharacters = (url) => {
    const [characters, setCharacters] = useState()
    useEffect(() => {
      const getData = async() => {
  
      const response = await fetch(url)
        const data = await response.json()
  setCharacters(data); 
    } 
     getData();
       
     }, [url])
     return { characters }; 
}


