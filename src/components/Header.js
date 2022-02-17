import React from 'react'
import {Link } from "react-router-dom";


export default function Header({search, getSearch, setSearch}) {
  return (
<>
<div className='Header'>
      <div className='nav'>
        <ul className='navlink'>
          <li><Link  to="/" />Home</li>
          <li><Link to="/like" />Liked</li>
        </ul>
      </div>
      <div className="headline">
       <h2 className='title'>The Beer Bank</h2>
       <h6 className='subtitle'>YOUR FAVOURITE BEER PROVIDER</h6>
        <form className="searchform" onSubmit={getSearch}>
          <input className="searchbar" 
            type="text"
            placeholder='search for bear name'
           value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
      </div>
</div>
</>    
)
}
