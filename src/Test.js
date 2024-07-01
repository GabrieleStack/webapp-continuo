import React, { useEffect, useState } from 'react'

export default function Test() {

    const [user, setUser] = useState()


    useEffect(() => {
        fetch('http://localhost:5001/api/users')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error('errore nel get', err);
        })
        
    },[])

    
  return (
    <div>
      <h1>Ciao Mamma</h1>
    </div>
  )
}
