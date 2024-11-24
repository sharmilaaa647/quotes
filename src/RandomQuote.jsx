import React, { useState } from 'react'
import quotes from './Quotes'


const RandomQuote=()=> {
  const[quote,setQuote]=useState(quotes[0])
  
  


  const getRandomQuote=()=>{
    const randomIndex=Math.floor(Math.random()*quotes.length)
  setQuote(quotes[randomIndex])
}
  return (
    <>
     <div className="quote-container text-center" >
      
     <div className="quote-box">
            <p className='quote-text'>"{quote.quote}"</p>
            <p className='quote-writer'>"{quote.author}"</p>
            </div>
            <br /><br />
            <button className='btn btn-primary mt-4' onClick={getRandomQuote}> New Quote</button>
        </div> 
    </>
  )
}

export default RandomQuote
