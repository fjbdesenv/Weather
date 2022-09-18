export default class ModelWeather{
    
    img:string;
    day:string;
    description:string;
    temperature:string;
    humidity:string;
    pressure:string;
    visibility:string;
    country:string;
    region:string;
    lat:string;
    lon:string;

    constructor(
        img: string,
        day: string,
        description:string,
        temperature:string,
        humidity:string,
        pressure:string,
        visibility:string,
        country:string,
        region:string,
        lat:string,
        lon:string,
    ){
        this.img = img;
        this.day = day;
        this.description = description;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.visibility = visibility;
        this.country = country;
        this.region = region;
        this.lat = lat;
        this.lon = lon;
    }
} 