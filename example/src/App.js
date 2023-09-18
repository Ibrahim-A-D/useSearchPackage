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
  const [search, setSearch] = useState('')
  const dataFiltered = useSearch(data,search)

  const FetchData = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      setData(response.data);
    })
  }
  const onChange = (e)=>{
    setSearch(e.target.value)
  }
  // FetchData()
  useEffect(()=>{
    FetchData()
  },[]);
  return (
    <div>
      <p>Bonjour</p>
      <input
        value={search}
        onChange={onChange}
        placeholder={"Entrer le terme a rechercher"}
      />
      {dataFiltered?.map((elem)=>(
        <div key={elem.id}>
          <p>Titre {elem.title}</p>
          <hr/>
          <p>Body {elem.body}</p>
        </div>
      ))}
    </div>
  )
}
export default App