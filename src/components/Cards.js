import React from 'react'

export default function Cards({beer, id, getLiked}) {
  
    

  return (
      <>
      
        <div>
            <div className="cards">
                <span className='likes'>
                  <button type="button" onClick={ () => getLiked(beer)} className='like'><img src='heart.png' className='likebtn' alt='heart'/></button>
                </span>
                  
               
            <img id='beerImg' src={beer.image_url}  alt={beer.name}/>
            <hr />
            <h4>{beer.name}</h4>
            <p>{beer.tagline}</p>
            </div>
            
        </div>
      </>
  )
}
