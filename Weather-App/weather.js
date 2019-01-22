class Weather{
    constructor(city, state){
        this.apiKey = '0da71a710f21d8a93739a33a07d2a582';
        this.city = city; 
        this.state = state; 
    }

    //fetch weather from API
    async getWeather(){
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}.json`);

        let responseData = await response.json();

        return responseData.weather;
    }

    //change weather location
    changeLocation(city, state){
        this.city = city;
        this.state =  state;
    }
}