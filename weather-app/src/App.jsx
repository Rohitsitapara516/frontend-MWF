
import React,{ useState }from "react";
import axios from "axios";


function App(){
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY =    "a8afb686eb177f0a17713c23a6103715";
 

  const getWeather = async () => {
    if (!city) {
      setError("Please enter city name");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };


  return(
    <>
        <div className="bg-blue-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Weather App Live</h1>
      <div className="flex gap-2 mb-4">
        <input type="text"className="border p-2 rounded-lg" placeholder="Enter City Name" value={city} onChange={(e) => setCity(e.target.value)}/>
         <button className="bg-blue-500 text-white py-2 rounded-lg" onClick={getWeather}>Search</button>
      </div>
      
       {error && <p className="text-red-500">{error}</p>}
       {weather && (
        <div className="bg-white p-5 rounded-lg shadow-md text-center">
          <h2 className="text-2x1 font-bold">{weather.name}</h2>
           <p className="text-lg">
        🌡 {weather.main.temp}°C | {weather.weather[0].description}
        </p>
        <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
       )

       }

    </div>
    
    </>
  )
}


export default App;
