import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {

    useEffect(() => {
        getData()
    }, [])
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = ()=> {
            const url = `https://api.waqi.info/feed/beijing/?token=4f49f9d08576beb4a454786d768f0e2425517948`
            fetch(url)
              .then((res) =>{
                console.log(res);
                setData(res.status)
                setLoading(true)
              }
              )
             .catch(err => console.log(err))
        
         }
          
  return (
    <>
            {
                loading && 
                <div>
                    {data.status.city}
                </div>
              
                }
             <button onClick={getData}>getData</button>
    </>
  )
}

export default Fetch