import React, {useState} from 'react'
import "./home.css"


function Home() {

//define STATE variable in react
//city is noun and setCity is Metoad ,value for city
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(
    {temp: '',
      condition: '',
      icon: '',
      is_day:'',
      lat:'',
      lan:'', airQuality:{} });



  function clickButton() {
    const url = `http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=yes`
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
        //getAirquality(); dont need this
      }
      )
      .catch(err => console.log(err))

  }

  const changeHandler = (event) => { setCity(event.target.value) }
  return (
    <div className="body">

      {/* <Navbar /> */}

      {/* <input type="text" name="search" placeholder="type the city name" onChange={(event) => {setCity(event.target.value) }}/> */}
      <div className="both">
      <input type="text" name="search" placeholder="type the city name" onChange={changeHandler} />
      <button className="btn btn-primary"Get Geolocation onClick={clickButton}>Search</button>
      </div>
      <div>{city} (lat:{status.lat}, lon:{status.lon}) </div>
      <div>{status.condition}  {status.temp} {status.is_day}deg  <img src={status.icon} alt="icon" /></div>
      {/* <div>Air Quality:
        <br/>co: {status.airQuality.co}
        <br/>gb-defra-index: {status.airQuality["gb-defra-index"]}
        <br/>no2: {status.airQuality.no2}
        <br/>no2: {status.airQuality.no2}
        <br/>o3: {status.airQuality.o3}
        <br/>pm2_5:  {status.airQuality.pm2_5}
        <br/>pm10: {status.airQuality.pm10}
        <br/>so2: {status.airQuality.so2} </div> */}
        

      {status.airQuality["gb-defra-index"]===1?
        <div className="status" style={{background:"green", display:"block", width: "250px", height: "30px"}}></div>
        :
        <div className="status" style={{background:"red", display:"block", width: "250px", height: "30px"}}></div>
      }
     {/* <footer style={{position:"fixed",bottom:"0"}}></footer> */}
    </div>
    
  )


}

export default Home