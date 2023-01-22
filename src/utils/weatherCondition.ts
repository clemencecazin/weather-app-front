export default function weatherCondition(weather: String) {
    let weatherType;
    switch (weather) {
        case "Thunderstorm":
            weatherType = "Orageux";
            break;
        case "Drizzle":
            weatherType = "Bruine";
            break;
        case "Rain":
            weatherType = "Pluvieux";
            break;
        case "Snow":
            weatherType = "Neigeux";
            break;
        case "Mist" || "Smoke" || "Haze":
            weatherType = "Brumeux";
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
            weatherType = "Nuageux";
            break;
        default:
            break;
    }

    return weatherType;
}
