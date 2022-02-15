import React, { useEffect } from 'react';
import axios from 'axios';

function Coment() {

  const fetchComent = async() => {
    const {data} = await axios.get('/coments');
    console.log(data);
  }

  useEffect(() => {

  }, [])
  return (
    <div>coment</div>
  )
}

export default Coment