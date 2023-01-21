export default function weatherCondition(weather: String) {
    let weatherType;
    console.log("w", weather);
    switch (weather) {
        case "Thunderstorm":
            weatherType = "Orage";
            break;
        case "Drizzle":
            weatherType = "Bruine";
            break;
        case "Rain":
            weatherType = "Pluie";
            break;
        case "Snow":
            weatherType = "Neige";
            break;
        case "Mist" || "Smoke" || "Haze":
            weatherType = "Brume";
            break;
        case "Dust":
            weatherType = "Poussièreux";
            break;
        case "Fog":
            weatherType = "Brouillard";
            break;
        case "Sand":
            weatherType = "Sable";
            break;
        case "Ash":
            weatherType = "Cendre";
            break;
        case "Squall":
            weatherType = "Bourrasque";
            break;
        case "Tornado":
            weatherType = "Tornade";
            break;
        case "Clear":
            weatherType = "Clair";
            break;
        case "Clouds":
            weatherType = "Nuages";
            break;
        default:
            break;
    }

    return weatherType;
}
