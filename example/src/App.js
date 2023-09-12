/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable comma-spacing */
/* eslint-disable arrow-spacing */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React, {useEffect, useState } from 'react'
import axios from "axios"
import { useSearch } from 'use-search-field'

const App = () => {
  const [data, setData] = useState();
  const search = useSearch(data,["body","title"],"sunt")

  const FetchData = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      setData(response.data);
    })
  }
  // FetchData()
  useEffect(()=>{
    FetchData()
    console.log("bonjour");
  },[search]);
  return (
    <div>
      <p>Bonjour</p>
      {search?.map((elem)=>(
        <div key={elem.id}>
          <p>{elem.title}</p>
          <hr/>
          <p>{elem.body}</p>
        </div>
      ))}
    </div>
  )
}
export default App