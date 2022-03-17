// import React, {useState, useEffect} from 'react'
// import axios from "axios";
// // import "../screens/hom/home.css"


// function Api() {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     axios
//     .get('http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=yes')
//     .then(res =>{
//       console.log(res);
//       setPosts(res.data)
//       .catch(err =>{
//         console.log(err);
//       })
//     })
//   })
// return (
//    // const url = `http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=yes`
//    <>
//    <ul>
//      {posts.map(city => (
//        <li key={city.id}>{city.title}</li>
//      ))}
//    </ul>
   
//    </>
    
//   )


// }

// export default Api