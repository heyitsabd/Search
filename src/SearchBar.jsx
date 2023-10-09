import React, { useState } from 'react'
import { data } from './Data'

const SearchBar = () => {
    const [search,setSearch]=useState('');
    console.log(search)
  return (
      <>
      <form>
        <input type='string' onChange={(e) => setSearch(e.target.value)} placeholder='search..'></input>
      </form>
      <table>
        <thead>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>Phone</td>
      </tr>
      </thead>
      <tbody>
      {data
              .filter((item) => 
                search === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase())
              )
        .map((item,idx)=>(
            <tr key={idx}>           
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            </tr>
        ))
        }
      </tbody>
      </table>
      </>
  
  )
}

export default SearchBar
