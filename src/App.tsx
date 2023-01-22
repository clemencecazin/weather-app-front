import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CityWeather from "./components/CityWeather";

function App() {
    const [data, setData] = useState("");
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setData("");
            setError("");
            const response = await axios.get("http://localhost:3000/weather", {
                params: { name: search },
            });
            let weather;
            if (!response.data) {
                setIsLoading(true);
            } else {
                weather = response.data;
            }

            setData(weather);

            setIsLoading(false);
        } catch (error: any) {
            setError(
                "Cette ville existe peut être ailleurs dans le multivers mais pas ici ! Sorry !"
            );
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter" && search.length >= 1) {
            handleSubmit();
        }
    };

    return (
        <section>
            <h1>
                Weather <img src="src/img/arc.png" />
            </h1>
            <div className="inputBloc">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder="Rechercher une ville"
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                {search.length >= 1 && (
                    <button onClick={handleSubmit}>OK</button>
                )}
            </div>
            {error && <div className="error">{error}</div>}
            {data && <CityWeather data={data} />}
            {isLoading && "Chargement en cours"}
        </section>
    );
}

export default App;
