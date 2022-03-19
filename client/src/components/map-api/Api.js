import React, {useState} from 'react'
import "./api.css"


function Api() {
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(
     {temp: '',
       condition: '',
      icon: '',
      is_day:'',
      lat:'',
       lan:'', airQuality:{} });

          
          function clickButton() {
           const url = `https://api.waqi.info/feed/beijing/?token=4f49f9d08576beb4a454786d768f0e2425517948`
           fetch(url)
             .then((res) => res.json())
            .then(result => {
                console.log(result)
               setStatus({
                temp: result.current.temp_c,
                 condition: result.current.condition.text,
                icon: result.current.condition.icon,
                is_day:result.current.condition.is_day,
                 lat: result.location.lat,
                 lon: result.location.lon,
                  airQuality: result.current.air_quality,
       
               })
             }
             )
            .catch(err => console.log(err))
       
        }
          const changeHandler = (event) => { setCity(event.target.value) }
return(
  <>
  

   return (
    <div className="api">
  
      <div className="both">
      <input type="text" name="search" placeholder="type the city name" onChange={changeHandler} />
      <button className="btn btn-primary"Get Geolocation onClick={clickButton}>Search</button>
      </div>
      <div className="tempCond">{city} (lat:{status.lat}, lon:{status.lon}) </div>
     <div className="tempCond">{status.condition}  {status.temp} {status.is_day}deg  <img src={status.icon} alt="icon" /></div>
      
        

      {status.airQuality["gb-defra-index"]===1?
         <div className="green"> </div>
       :
        <div className="red" ></div>
     }
   </div>
  
  </>
)









//////////////////////////////////////////////////////



// const [city, setCity] = useState("");
// const [status, setStatus] = useState(
//     {temp: '',
//       condition: '',
//       icon: '',
//       is_day:'',
//       lat:'',
//       lan:'', airQuality:{} });



//   function clickButton() {
//     const url = `http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=yes`
//     fetch(url)
//       .then((res) => res.json())
//       .then(result => {
//         console.log(result)
//         setStatus({
//           temp: result.current.temp_c,
//           condition: result.current.condition.text,
//           icon: result.current.condition.icon,
//           is_day:result.current.condition.is_day,
//           lat: result.location.lat,
//           lon: result.location.lon,
//           airQuality: result.current.air_quality,

//         })
//       }
//       )
//       .catch(err => console.log(err))

//   }

//   const changeHandler = (event) => { setCity(event.target.value) }
//   return (
//     <div className="api">
//       <div className="both">
//       <input type="text" name="search" placeholder="type the city name" onChange={changeHandler} />
//       <button className="btn btn-primary"Get Geolocation onClick={clickButton}>Search</button>
//       </div>
//       <div className="tempCond">{city} (lat:{status.lat}, lon:{status.lon}) </div>
//       <div className="tempCond">{status.condition}  {status.temp} {status.is_day}deg  <img src={status.icon} alt="icon" /></div>
      
        

//       {status.airQuality["gb-defra-index"]===1?
//         <div className="green" data-text="statusstaus"> </div>
//         :
//         <div className="red" data-text="statusstauslllllllllllllllllll" ></div>
//       }
//     </div>

   
    


}

export default Api