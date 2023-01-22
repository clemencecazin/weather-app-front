import weatherCondition from "../utils/weatherCondition";

type CityWeatherProps = {
    data: any;
};

const CityWeather = ({ data }: CityWeatherProps) => {
    return (
        <>
            <h2>{data.name}</h2>
            <div className="cityWeather">
                <div className="category">
                    <h3>Température</h3>
                    <div>{data.main.temp} °C</div>
                    <h4>Température ressentie</h4>
                    <div>{data?.main?.feels_like} °C</div>
                </div>
                <div className="category">
                    <h3>Temps</h3>
                    <div>{weatherCondition(data.weather[0].main)}</div>
                </div>
                <div className="category">
                    <h3>Vent</h3>
                    <div>{data.wind.speed} km/h</div>
                </div>
            </div>
        </>
    );
};

export default CityWeather;
