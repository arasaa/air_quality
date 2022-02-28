import React, { useEffect } from 'react';
import axios from 'axios';

function Comment() {

  const fetchComment = async() => {
    const {data} = await axios.get('/comments');
    console.log(data);
  }

  useEffect(() => {

  }, [])
  return (
    <div>comment</div>
  )
}

export default Comment