import React, {useState} from 'react'
import "../../components/screens/hom/home.css"

function Api() {

//define STATE variable in react
//city is noun and setCity is Metoad ,value for city
  const [city, setCity] = useState("");
  const [status, setStatus] = useState(
    {status: '',
    data: '',
    aqi: '',
    idx:'',
      lan:'', airQuality:{} });



  function clickButton() {
    const url = `https://api.waqi.info/feed/${city}/?token=4f49f9d08576beb4a454786d768f0e2425517948`
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        
        setStatus({
          status: status,
          data: data,
          lat: data.location.lat,
          lon: data.location.lon,
          airQuality: data.current.air_quality,

        })
        //getAirquality(); dont need this
        
      }
      )
      .catch(err => console.log(err))

  }

  const changeHandler = (event) => { setCity(event.target.value) }
  return (
    <div className="api">

      {/* <Navbar /> */}

      {/* <input type="text" name="search" placeholder="type the city name" onChange={(event) => {setCity(event.target.value) }}/> */}
      <div >
      <input type="text" name="search" placeholder="type the city name" onChange={changeHandler} />
      <button className="btn btn-primary"Get Geolocation onClick={clickButton}>Search for a new api</button>
      
      <div className="tempCond">
        <ul className="status">
      <div className="tempCond">{city} (lat:{status.lat}, lon:{status.lon}) </div>
          <li>{status.condition} </li>
          <img src={status.icon} alt="icon" />
          <li> {status.temp}</li>
          <li>{status.is_day}deg </li>
        </ul>
        </div>
     
      </div>
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
        <div className="green" ></div>
        :
        <div className="red"></div>
      }
     {/* <footer style={{position:"fixed",bottom:"0"}}></footer> */}
    </div>
    
  )


}

export default Api