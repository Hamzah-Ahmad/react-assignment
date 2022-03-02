import { useState } from "react";
import { WeatherSearch } from "./api";
import Button from "./components/atoms/Button";
import TextField from "./components/atoms/TextField";

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleOnClick = async () => {
    setError("");
    setData(null);
    const response = await WeatherSearch(input);
    if (response.message) {
      setError(
        "Oops! You might be missing something or the place does not exist."
      );
      return;
    }
    setData(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <TextField type="text" value={input} onChange={handleInput} />
      <Button disabled={!input} onClick={handleOnClick}>
        Click
      </Button>
      {data && (
        <>
          <section>
            <h1>
              {data?.location?.name}, {data?.location?.region},{" "}
              {data?.location?.country}
            </h1>
            <h2>
              {data?.current.temp_c}
              °C
            </h2>
            <div>{data?.current?.condition?.text}</div>
            <img alt="weather-icon" src={data?.current?.condition?.icon} />
            <div>
              <strong>Humidity: </strong>
              {data?.current?.humidity}%
            </div>
            <div>
              <strong>Feels Like: </strong>
              {data?.current?.feelslike_c}°C
            </div>
          </section>
          <section>
            <h2>Forecast</h2>
            {data?.forecast?.forecastday?.map((value, index) => (
              <div key={index}>
                <h3>{value?.date}</h3>
                <img alt="weather-icon" src={value?.day?.condition?.icon} />
                <div>{}</div>
                <div>Average Temprature: {value?.day?.avgtemp_c}°C</div>
                <div>Average Humidity: {value?.day?.avghumidity}%</div>
              </div>
            ))}
          </section>
          <section>
            <h2></h2>
            <img
              alt="weather-map"
              src={`https://tile.openweathermap.org/map/precipitation_new/4/${data?.location?.lat}/${data?.location?.lon}.png?appid=db8ac7f862b8449d8e9185941211405`}
            />
          </section>
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
