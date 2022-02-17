import React,{useEffect, useState} from 'react'
import Cards from './Cards';
import Header from './Header';


export default function Home() {
    const base_url = 'https://api.punkapi.com/v2/beers';
    const [data, setData] = useState([])
    const [ search, setSearch ] = useState("");
    const [ liked, setLiked ]  = useState([])
    
    useEffect (() => {
        getBeers()
     },[search])

    
    const getBeers = async (beer) => {
        
        let url = (search === "" || search === null)
                  ?  base_url
                  : `${base_url}?beer_name=${search}`
      await  fetch(url)
         .then((response) => response.json() )
         .then((response) => {
             setData(response)
             console.log(response)
         })

    }
    
    const getSearch = (e) =>{
        e.preventDefault()
        setSearch(search);
    }

    const getLiked = (beer) => {
      const newbeer = beer
      setLiked([...liked, newbeer])

    }

  



  return (
    <>
     <Header getSearch={getSearch}  search={search} setSearch={setSearch}/>
    <div className='displayCards'> 
        {
          data ? data.map((beer) => {
           return (<Cards beer={beer} id={beer.id} key={beer.id} getLiked={getLiked}/>
          )}) : <h2>wait a sec</h2>
        }

    </div>

   {
       liked ? ( <h1>Beers you love</h1> )
         : <h2> Add here your favourite Beers</h2>

   }
   
     

    </>
  )
}
